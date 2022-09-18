# GeoCoading-Application

-> Here i used node.js and express.js and Google API services to get the information regarding the location 
->commands to install the packages 
~ npm init
~ npm install express
~ npm install body-parser
~ npm i ejs
~ nodemon app.js
->initially to get the output i ran in localhost 3000
->after intalling the packages first we have set up the require expression in ther JS file for express, https, app and body-parser
->then we create one HTML file by which we recieve the input from the user which is in the form of string (location of any city or location of any country)
->after that when HTML file successfully created then we create out javascript file 
->then firstly we through GET request and fetch the information through HTML file which requested by client for the server 
->now we create the out POST request - here we set out out two varibles one is out API key whcih we collect from GOOGLE APT services and another is out location which fetched from the HTML file
->now we build our URL by concatination of API url, location variable and API KEY.
->now we through HTTPS get request and we get the response of out request in form of JSON.
->now out output is in the JSON form so we create one variable for longitude and one variable for latitude 
->now longitude varaible will fetch the langitude from the JSON data and second variable is responsible to fetch the latitude from the JSON data.
->now with help of write function we post our output on localhost 3000.
