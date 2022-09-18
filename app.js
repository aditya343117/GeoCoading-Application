const express= require("express");
const https = require("https");
const app = express();
const bodyParser= require("body-parser");
const { STATUS_CODES } = require("http");
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req, res){
    res.sendFile(__dirname+"/index.html");
})

app.post("/", function(req, res){
    const apikey="AIzaSyAMosnMRqfmQNdCz6-0GRZGzQeW1ssHIBs";
    const loc= req.body.location;

    const url= "https://maps.googleapis.com/maps/api/geocode/json?address="+loc+"&key="+apikey;

    https.get(url, function(response){
        console.log(response, STATUS_CODES);

        response.on("data", function(data){
            const locData= JSON.parse(data);
            
            var localdatalatitud = locData.results[0].geometry.location.lat;
            var localdatalongitud = locData.results[0].geometry.location.lng; 

            res.write("<h1> Latitude:"+ localdatalatitud + "</h1>");
            res.write("<h1> Longitude:"+ localdatalongitud + "</h1>");
            
            res.send(locData); 
        })
    })

})

app.listen(3000, function(){
    console.log("server is running at 3000");
})