npm init 

Package will be created then 

Add dependency for typescript, for that type following commands in the terminal.

npm i typescript -D

npm i ts-node -D

npm i @cucumber/cucumber -D

npm i playwright -D

npm i @playwright/test -D

npm i cucumber-html-reporter -D

npm i dotenv -D

npx tsc --init

Open TS config  ---->  un comment   "resolveJsonModule": true  & uncomment  "noImplicitAny": true,   and add  ,
  "exclude": ["node_modules"] at the end
  
Create a folder called e2etests on the root folder & then create two folders test , corelib
Create another folder named features,pages,locators & steps under test folder.
Create a folder reports on the roor folder.
####Create cucumber.json  with below content  

{
    "default": {
        "dryRun": false,
        "formatOptions": {
            "snippetInterface": "async-await"
        },
        "paths": [
            "e2etests/test/features/**/*.feature"
        ],
        "require": [
            "e2etests/test/steps/**/*.ts"
        ],
        "requireModule": [
            "ts-node/register"
        ],
        "format": []
}
}
################

