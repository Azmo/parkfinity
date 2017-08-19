# Parkfinity
parkfinity for angular CLI application with Material Design and Firebase as a backend.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli)

## Set up development environment
* We recommend [Visual Studio Code](https://code.visualstudio.com/) for code editing
* Install [Node.js](https://nodejs.org/en/)
* Install [git](https://git-scm.com/)

`npm install -g @angular/cli`

## Create new app on Facebook
Get: 
* App ID
* App secret
* OAuth redirect URI

## Set up project on Firebase
* Create new project on [Firebase](https://console.firebase.google.com/)
* Go to Firebase console -> Authentication -> SIGN-IN METHOD (https://console.firebase.google.com/project/{PROJECT-NAME}/authentication/providers) and enable Google and Facebook Providers

## Update project name and settings
* Update app name in the package.json file
* Update project names in the .firebaserc file
* Update project name in the .angular-cli.json
* Go to general project settings on Firebase console
(https://console.firebase.google.com/project/{PROJECT-NAME}/settings/general/)
click "Add Firebase to your web app", copy config and update firebaseConfig variable in app.module.ts
* Search and replace all "parkfinity" words in the project

## Set up CI/CD
