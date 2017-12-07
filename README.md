#JEPRETGRAM

Mini Web App just like instagram with login and register
User only can vote other image not theirs own

List of users routes:

| Routes | HTTP | Description |
|---------------|-------------|---------------|
|`/users/sigin`| POST | User sign in and get acces token using JWT |
|`/users/signup`| POST | User sign up and save their data |
|`/jepret`| GET | Get all images |
|`/jepret`| POST | Adding a new image |
|`/jepret/:id`| PUT | Edit a spesific image |
|`/jepret/:id`| DELETE | Delete a spesific image |
|`/jepret/upvote/:id`| PUT | Vote a spesific image |
|`/jepret/downvote/:id`| PUT | Unvote a spesific image |

USAGE
-----

With only npm
> `npm install`

> `npm start`

> `npm run dev`

Access the website via `http://localhost:3000` or API via `http://localhost:3000/api`