import { Request, Response } from 'express'

import db from '../database/connection';

import convertHourToMinutes from '../utils/convertHourToMinutes';

interface scheduleItem {
    week_day: number;
    from: string;
    to: string;
}

   // === rota listagem dos cadastrados ===
export default class MusicController {
    async index (req:Request, res:Response){
        const filters = req.query;

        const subject = filters.subject as string
        const week_day = filters.week_day as string
        const time = filters.time as string
        
        if (!filters.week_day || !filters.subject || !filters.time) {
            return res.status(400).json ({
                error: 'Missing filters to search classes'
            })
        }
        const timeInMinutes = convertHourToMinutes (time);

        const music = await db ('music')
        .whereExists(function() {
            this.select('music_schedule.*')
            .from('music_schedule')
            .whereRaw('`music_schedule`. `music_id` = `music`.`id`')
            .whereRaw('`music_schedule`.`week_day` = ??', [Number(week_day)])
            .whereRaw ('`music_schedule`.`from` <= ??', [timeInMinutes])
            .whereRaw ('`music_schedule`.`to` > ??', [timeInMinutes])
        }) 
        .where('music.subject', '=', subject)
          .join('users', 'music.user_id', '=', 'users.id')
          .select(['music.*', 'users.*']);

        return res.json(music);
    }


    // === rota criacao da tabela, criacao do meu usuario ===
    async create (req:Request, res:Response)  {
        /* Pegando dados do meu banco*/
        const {
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost,
            schedule
        } = req.body;
    
        const trx = await db.transaction(); /*Apaga todo banco caso erro*/
        
        try {
                /* Inserindo dados na tabela*/
        const insertedUsersIds = await trx('users').insert({
            name,
            avatar,
            whatsapp,
            bio
        })
    
        const user_id = insertedUsersIds[0];
    
        const insertedMusicIds = await trx ('music').insert({
            subject,
            cost,
            user_id,
        })
    
        const music_id = insertedMusicIds[0];
    
        const musicSchedule = schedule.map((scheduleItem: scheduleItem) => {
            return {
                music_id,
                week_day: scheduleItem.week_day,
                from:convertHourToMinutes(scheduleItem.from),
                to:convertHourToMinutes(scheduleItem.to),
            };
        })
    
          await trx ('music_schedule').insert(musicSchedule);
    
          await trx.commit();
        
          return res.status(201).send();
        } catch (err) {
          await trx.rollback(); 
            
          return res.status(400).json({
            error: 'Unexpected error while creating new class'
          })  
        }
    }
}

