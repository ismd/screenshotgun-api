# Screenshotgun server

Use this application as a backend for [Screenshotgun](https://github.com/ismd/screenshotgun).

## Deploy

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
  
  [read more](https://docs.aws.amazon.com/credref/latest/refdocs/setting-global-aws_access_key_id.html)

  * `AWS_SECRET_ACCESS_KEY`
  
  [read more](https://docs.aws.amazon.com/credref/latest/refdocs/setting-global-aws_access_key_id.html)
