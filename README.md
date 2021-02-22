# Screenshotgun server

Use this application as a backend for [Screenshotgun](https://github.com/ismd/screenshotgun).

## Build and run

``` sh
npm i
npm run build
npm run start
```

The app requires [environment variables](#environment-variables) to be set at runtime.

## Docker

[Image at Docker Hub](https://hub.docker.com/r/ismd/screenshotgun-api)

### Pull

``` sh
docker pull ismd/screenshotgun-api
```

### Run

``` sh
docker run -p 80:80 \
  -e S3_ENDPOINT=<s3_endpoint> \
  -e S3_BUCKET=<s3_bucket> \
  -e AWS_ACCESS_KEY_ID=<aws_access_key> \
  -e AWS_SECRET_ACCESS_KEY=<aws_secret_access_key> \
  ismd/screenshotgun-api
```

See below about [environment variables](#environment-variables).

## Environment variables

To launch the server you shoud set these variables:

  * `PORT` *optional*
  
  Port on which to run server. Default `80`.

  * `UPLOAD_DESTINATION`

  The only available value is `aws`.

  * `S3_ENDPOINT`

  Defines S3 endpoint.
  
  * `S3_BUCKET`

  Defines S3 bucket.

  * `AWS_ACCESS_KEY_ID`
  * `AWS_SECRET_ACCESS_KEY`
  
  [Read more about AWS keys](https://docs.aws.amazon.com/credref/latest/refdocs/setting-global-aws_access_key_id.html)
