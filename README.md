# Deploy

[MAP-APP](https://tyronmaster.github.io/map-app/)


# Docker

## Docker Build

To run docker image build follow the next steps:

1. Open CMD or terminal in application folder

2. Type and run the folowing command

   ```sh
   	docker  build  -t  map-app  .
   ```

3. After the image building process finished type and run the folowing command

   ```sh
   	docker  run --rm -d  -p  4200:80  map-app
   ```

4. To see the result use the folowing link [http://localhost:4200](http://localhost:4200)

## Docker-Compose

To run docker compose follow the next steps:

1. Open CMD or terminal in application folder

2. Type and run the following command
   ```sh
   	docker-compose up --build
   ```
3. To see the result use the folowing link [http://localhost:4200](http://localhost:4200)
