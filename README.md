# palworld-wiki

### Start DB only

1. Run `npm run start:db`
2. Go to [pgAdmin portal](http://localhost:5050/)
3. Select Add New Server and fill data form as follow:
    1. General
        1. Name: TestDB (it)
    2. Connection
        1. Host name/address: palworld-wiki-db (same as service name on compose.yml)\*
        2. Port: 5432 (same as compose.yml)
        3. Username: admin (same as compose.yml)
        4. Password: changeme (same as compose.yml)
