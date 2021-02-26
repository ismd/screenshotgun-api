import {EDestination} from '../types/EDestination';

function readEnv() {
    if (process.env.UPLOAD_DESTINATION !== EDestination.AWS) {
        throw new Error('Invalid value of $UPLOAD_DESTINATION');
    }

    if (!process.env.WEBSITE) {
        throw new Error('Invalid value of $WEBSITE');
    }

    if (!process.env.S3_ENDPOINT) {
        throw new Error('Invalid value of $S3_ENDPOINT');
    }

    if (!process.env.S3_BUCKET) {
        throw new Error('Invalid value of $S3_BUCKET');
    }

    if (!process.env.AWS_ACCESS_KEY_ID) {
        throw new Error('Invalid value of $AWS_ACCESS_KEY_ID');
    }

    if (!process.env.AWS_SECRET_ACCESS_KEY) {
        throw new Error('Invalid value of $AWS_SECRET_ACCESS_KEY');
    }

    return {
        UPLOAD_DESTINATION: process.env.UPLOAD_DESTINATION,
        WEBSITE: process.env.WEBSITE,
        S3_ENDPOINT: process.env.S3_ENDPOINT,
        S3_BUCKET: process.env.S3_BUCKET,
        AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID,
        AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY,
    };
}

export const config = readEnv();
