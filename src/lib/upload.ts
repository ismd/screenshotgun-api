import {Request} from 'express';
import {config} from './config';
import {EDestination} from '../types/EDestination';

function getUpload() {
    const website = process.env.WEBSITE.replace(/\/+$/, '');

    switch (config.UPLOAD_DESTINATION) {
        case EDestination.AWS:
            return async (req: Request) => {
                const result = await require('./uploaders/aws').upload(req);
                const [year, month, day, hash] = result.Key.replace(/\.png$/, '').split('/');
                return `${website}/${year}-${month}-${day}/${hash}`;
            };
    }
}

export const upload = getUpload();
