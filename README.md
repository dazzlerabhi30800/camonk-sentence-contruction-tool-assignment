# Sentence Construction Tool

## LIVE URL :- _[Sentence Construction Tool](https://camonk-sentence-contruction-tool-assignment.vercel.app/)_

## #Tech Used

1. Framework - React Vite
2. Icons - Bootstrap icons cdn
3. CSS Framework - Tailwind CSS
4. React Router Dom - for page routes & navigation
5. JSON Server - to host json file on localhost
6. Concurrency - running multiple commands at the same time.
7. Tailwind Merge - to pass tailwind classes as props.
8. Typescript - for type checking & faster debugging.

## #How to run locally

1. first clone or download the repo.
2. Inside the root folder run the command `npm install` to install all the dependencies & after that make `.env.local` file in root dir.
3. In the .env.local file paste the code below, for this project to run it locally you can use my api keys.

```
    VITE_API_URL=http://localhost:3001/data
    VITE_PROCESS=development
```

4. Then run the server, remember one thing, first there is dev server which can be run using `npm run dev` second which is json server which can be run using `npm run json-server`. But to run both the commands concurrently use this command `npm run dev-server`, which will run both dev-server & json-server.


## About this App.
1. The db.json file is located inside `public/api/db.json`, which uses json server in development, but I can't get to setup the serverless api for Vercel, it always throws error. Therefore I used local url to fetch the json file & populate the data.
2. The challenge I face coding this app, was to implement the functionality to fill the blank with the selected option & making the filled blank empty.
3. I achieved the results using regex & flat map function to flat the array & return the inline question with filled blanks.
4. Developing this app was really a challenge, I must say, it challenges my proficiency in react so much & I learned a lot of new things for ex: about the `tw merge` in tailwind css to pass classes as props & working with regex.
