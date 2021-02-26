import { Request } from 'express';
import S3, { ManagedUpload } from 'aws-sdk/clients/s3';
import SendData = ManagedUpload.SendData;
import {config} from '../config';
import {generateFilename} from '../generateFilename';
import {IUpload} from '../../types/IUpload';

const s3 = new S3({
    accessKeyId: config.AWS_ACCESS_KEY_ID,
    secretAccessKey: config.AWS_SECRET_ACCESS_KEY,
    endpoint: config.S3_ENDPOINT,
});

export const upload = async (req: Request<any, any, IUpload>): Promise<SendData> => new Promise((resolve, reject) => {
    const params: S3.Types.PutObjectRequest = {
        Bucket: config.S3_BUCKET,
        Body: Buffer.from(req.body.image, 'base64'),
        Key: generateFilename(),
        ObjectLockMode: 'GOVERNANCE',
    };

    s3.upload(params, (err, data) => {
        if (err) {
            reject(err);
        }

        resolve(data);
    });
});
