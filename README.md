# simple-rest-test
> A super simple rest web service used to test an F5 package

## Setup

```sh
$ npm install
```

## Usage

```sh
$ npm start
```

POST to `http://localhost:3000/auth`

You'll need to ensure the header `Content-Type` is equal to `application/json` and the body contains the fields `username` and `password`.

Example cURL:

```sh
curl -X "POST" "http://localhost:3000/auth" \
     -H "Content-Type: application/json" \
     -d $'{
  "username": "billybucktoothslim",
  "password": "mysuperdupersecretpassword"
}'
```
