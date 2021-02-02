import S3 from 'aws-sdk/clients/s3';
import {config} from '../config';

const s3 = new S3({
    accessKeyId: config.AWS_ACCESS_KEY_ID,
    secretAccessKey: config.AWS_SECRET_ACCESS_KEY,
    endpoint: config.S3_ENDPOINT,
});

export const upload = async () => new Promise((resolve, reject) => {
    const uploadParams: S3.Types.PutObjectRequest = {
        Bucket: config.S3_BUCKET,
        Body: 'test1',
        Key: '1.txt',
    };

    s3.upload(uploadParams, (err, data) => {
        if (err) {
            reject({
                status: 'error',
                message: err,
            });
        }

        resolve({
            status: 'ok',
            data,
        });
    });
});
