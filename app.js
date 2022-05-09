import { AwsRum } from 'aws-rum-web';
const express = require("express");
const app = express();
const path = require('path');
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.static('public'));

try {
  const config = {
    sessionSampleRate: 1,
    guestRoleArn: "arn:aws:iam::302295667531:role/RUM-Monitor-us-east-2-302295667531-9878267902561-Unauth",
    identityPoolId: "us-east-2:7177af48-d016-4ebc-8733-8bf4746bc551",
    endpoint: "https://dataplane.rum.us-east-2.amazonaws.com",
    telemetries: ["performance","errors","http"],
    allowCookies: true,
    enableXRay: false
  };

  const APPLICATION_ID = '9db1d5b8-f57e-4390-8bb8-5a94d045ca21';
  const APPLICATION_VERSION = '1.0.0';
  const APPLICATION_REGION = 'us-east-2';

  const awsRum = new AwsRum(
    APPLICATION_ID,
    APPLICATION_VERSION,
    APPLICATION_REGION,
    config
  );
} catch (error) {
  // Ignore errors thrown during CloudWatch RUM web client initialization
}

app.get("/", (req,res)=>{
    return res.render('home',{
        title:"Home Page"
    });
});

app.get("/search",(req,res)=>{
    return res.render('search',{
        title:"Search Page"
    });
})

app.get("/sort",(req,res)=>{
    return res.render('sort',{
        title:"Sort Page"
    });
})

app.get("/pathfinding",(req,res)=>{
    return res.render('pathfinding',{
        title:"Pathfinding Page"
    });
})

app.get("/wordsearch",(req,res)=>{
    return res.render('wordsearch',{
        title:"WordSearch Page"
    });
})


app.get("/cpuscheduling",(req,res)=>{
    return res.render('cpuscheduling',{
        title:"CPU Scheduling Page"
    });
})

app.get("/nqueen",(req,res)=>{
    return res.render('nqueen',{
        title:"N-Queen"
    });
})

app.listen(process.env.PORT || 3000, ()=>{
    console.log("listening the port at 8000");
})