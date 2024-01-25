# palworld-wiki

## Requirements

-   Docker.

## Local development

1. Start DB container: `npm run start:db`
2. Launch local server: `npm run dev`

### Connect to database

1. Go to [pgAdmin portal](http://localhost:5050/)
2. Login:
    1. Username: `admin@admin.com`
    2. Password: `changeme`
3. Select Add New Server and fill data form as follow:
    1. General:
        1. Name: Palworld Wiki (doesn't really matters)
    2. Connection (values match `compose.yml` definition):
        1. Host name/address: `palworld-wiki-db` (docker service name)
        2. Port: `5432`
        3. Username: `admin`
        4. Password: `changeme`
