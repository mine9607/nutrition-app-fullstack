# Nutrition-App

*Nutrition and weight-loss app designed using a MERN stack*

## Dependencies & Documentation:

* dotenv: [https://www.npmjs.com/package/dotenv]()
* express: [https://expressjs.com/en/starter/installing.html]()
* body-parser: [https://www.npmjs.com/package/body-parser]()
* mongoose: [https://www.npmjs.com/package/mongoose]()
* findorcreate: [https://www.npmjs.com/package/mongoose-findorcreate]()
* ejs: [https://www.npmjs.com/package/ejs]()
* express-session: [https://www.npmjs.com/package/express-session]()
* passport: [https://www.passportjs.org/tutorials/password/verify/]()
* passport-local: [https://www.passportjs.org/tutorials/password/verify/]()
* passport-local-mongoose: [https://www.npmjs.com/package/passport-local-mongoose]()
* passport-google-oauth20: [https://www.passportjs.org/packages/passport-google-oauth20/]()
* passport-facebook: [https://www.passportjs.org/packages/passport-facebook/]()
* axios: [https://www.npmjs.com/package/axios]()
* lodash: [https://www.npmjs.com/package/lodash]()

## Install Dependencies from Terminal

npm i

## Import Depencies Using ES6 Syntax:

```javascript
import "dotenv/config";
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import findOrCreate from "mongoose-findorcreate";
import session from "express-session";
import passport from "passport";
import passportLocalMongoose from "passport-local-mongoose";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { Strategy as FacebookStrategy } from ""passport-facebook""
import axios from "axios";
import _ from "lodash";
```

## Create an App in both Google and Facebook Developer Dashboards



https://developers.facebook.com/docs/development/create-an-app

## Setup Environmental Variables

Place environmental variables into the .env file including:

```javascript
DB_PASSWORD="YourPasswordHere"
GOOGLE_CLIENT_ID=PastAppIdHere
GOOGLE_CLIENT_SECRET=PasteAppSecretHere
FACEBOOK_CLIENT_ID=PastAppIdHere
FACEBOOK_CLIENT_SECRET=PasteAppSecretHere
```

## Setting up Google OAuth2.0

https://console.cloud.google.com/apis/credentials?project=savage-nutrition-wellness

1. Click on "Credentials"
2. Click on "Configure Consent Screen"
3. User Type: "External" > "Create"
4. Insert App Name - "Savage Nutrition & Wellness"
5. Add App Logo
6. Choose user support email - add an email address
7. App Domain - leave empty
8. Developer Email - add an email address
9. Click "Save & Continue"
10. Add "/auth/userinfor.email", "/auth/userinfo.profile" and "openid" to the scopes and Click "Update"
11. Click on "Credentials"
12. Click on "Create Credentials" > "OAuth Client ID"
13. Application Type: "Web"
14. Name = "Savage Nutrition & Wellness"
15. Authorized JavaScript Origins > "Add URI" > http://localhost:3000
16. Authorized Redirect URIs > "Add URI" >

## Setting up Facebook OAuth2.0

https://github.com/passport/todos-express-facebook

https://developers.facebook.com/docs/development/create-an-app

https://developers.facebook.com/

## Facebook Auth JavaScript SDKs - how do I use this???

```

<script>
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '{your-app-id}',
      cookie     : true,
      xfbml      : true,
      version    : '{api-version}'
    });
    
    FB.AppEvents.logPageView();   
    
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
</script>
```

## Facebook Login Button Documentation

https://developers.facebook.com/docs/facebook-login/web/login-button
