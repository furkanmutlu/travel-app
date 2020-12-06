# Fullstack Travel App

<p align="center">
  <a href="https://reactjs.org/">
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/768px-React-icon.svg.png" height="60">
  </a>
  +
  <a href="https://www.mapbox.com/">
  <img src="https://assets-global.website-files.com/5d3ef00c73102c436bc83996/5d3ef00c73102c893bc83a28_logo-regular.png" height="60">
  </a>
  +
  <a href="https://nodejs.org/en/">
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/885px-Node.js_logo.svg.png" height="60">
  </a>
  +
  <a href="https://www.mongodb.com/cloud/atlas">
  <img src="https://webassets.mongodb.com/_com_assets/cms/MongoDB_Logo_FullColorBlack_RGB-4td3yuxzjs.png" height="60">
  </a>
</p>
<h1 align="center">
  React + Mapbox + Node JS + MongoDB <br/> fullstack travel log application
</h1>
<p align="center">
  This is a travel logging application that shows the locations I have been travelling or live. It is designed and developed by using React, Mapbox and Nodejs.
  It is created by <a href="https://furkanmutlu.com/">Furkan Mutlu</a> with ❤️. You can contribute by submitting a pull-request.
</p>

## ⚡️ Live
  [Check it live](https://travel-log-five.vercel.app/)

## ✨ Quick start

1.  **Clone this repository.**

    ```sh
    https://github.com/furkanmutlu/travel-app.git
    ```
2. **Running**

  Before you run the application you will need edit .env.example files, and rename them as '.env'.<br/>
  For client environment variables it requires an api key that you can get it from [Mapbox](https://www.mapbox.com/).<br/>
  For server folder environment variables PORT, DATABASE_URL, CORS_ORIGIN and API_KEY (this is a password for entering new location).<br/>
  
  After editing environment variables go to server folder <br/>
  ```sh
    cd server
   ```
   and run server: 
   ```sh
    npm start
   ```
   Then go to client:
   ```sh
    cd ..
    cd client
   ```
   and run react app:
   ```sh
    yarn start
   ```
   
    
## 💫 Deploy
This project deployed by using Vercel.<br/><br/>
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/project?template=https://github.com/furkanmutlu/travel-app.git)
