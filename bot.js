var HTTPS = require('https');
var cool = require('cool-ascii-faces');

var botID = process.env.BOT_ID;

function respond() {
  var request = JSON.parse(this.req.chunks[0]),
      botRegex = /^\/cool guy/;  botRegexDL = /^\/ddl/i;botRegexSalt = /^\/salt/;botRegexRules = /^\/rules/;
      botRegexAd=/^\/advance/;botRegexMI = /^\/Mike/; botRegexSC = /^\/SZN/i; botDEZ = /^\/Dez/; botDuck = /^\/duck/;
      botRegexP = /^\/PDL/i;  botRegexTw = /^\/twitch/i; botRegexSB = /^\/full rules/; botRegexSh = /^\/oh/; botRegexWk = /^\/teams/; botRegexCC = /^\/respek/; botRegexSr = /^\/trash/;
      botRegexCryNeema=/^\/cry neema/; botRegexCheese = /^\/cheese/
      cheese1 = 'https://pbs.twimg.com/profile_images/494330891/cheese_oh_cheese_400x400.jpg'; cheese2 = 'https://i.ytimg.com/vi/efLRmlILC2I/maxresdefault.jpg'
      cheese3 = 'http://www.packerpalace.com/palace02/maddenwcheese.gif';
  var teamAb = ["NE","NO","ARI","PHI","CLE","TEN","OAK","DAL","IND","SEA","CIN","PIT","JAC"
                ,"BAL","SD","DEN","MIN","ATL","KC","NYG","GB","DET","HOU","STL","CHI","CAR",
                "MIA","BUF","SF","WAS","NYJ","TB"]
  if(request.text && botRegex.test(request.text)) {
    this.res.writeHead(200);
    postMessage(cool());
    this.res.end();
  } 
  else if(request.text && botRegexDL.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://daddyleagues.com/maddenszn");
    this.res.end();
  } 
  else if(request.text && botRegexSalt.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://cdn.meme.am/instances/58034344.jpg");
    this.res.end();
  } 
  else if(request.text && botRegexAd.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.hackcollege.com/wp-content/uploads/2013/02/kno_advance.jpg");
    this.res.end();
  }
  else if(request.text && botRegexRules.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/1992x2629.jpeg.dd767f0d9f854ea9a872c2113a988d2a");
    this.res.end();
  } 
  else if(request.text && botRegexMI.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.kinja-img.com/gawker-media/image/upload/mjvi0ol0s5i3c6ikolql.jpg");
    this.res.end();
  } 
  else if(request.text && botRegexSC.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://daddyleagues.com/maddenszn/teams"+request.text.substring(5,8)+"/schedule");
    this.res.end();
  }
  else if(request.text && botRegexP.test(request.text)) {
    this.res.writeHead(200);
    var req = request.text.substring(5,request.text.length);
    var rep = req.replace(/ /,"+");
    postMessage("http://daddyleagues.com/maddenszn/players?=name"+rep+"&position=all&team=all");
    this.res.end();
  }  

  else if(request.text && botRegexTw.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.twitch.tv/"+request.text.substring(8,request.text.length));
    this.res.end();
  } 
  else if(request.text && botRegexSB.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://daddyleagues.com/maddenszn/rules");
    this.res.end();
  } 
  else if(request.text && botRegexSh.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.quickmeme.com/img/fe/fe9126fe4327f1b37f06c8c00c051bf8f37c1580b6c3d16da8b4dcb8607b60b2.jpg");
    this.res.end();
  } 
  else if(request.text && botRegexWk.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://daddyleagues.com/maddenszn/teams/");
    this.res.end();
  } 
  else if(request.text && botDEZ.test(request.text)) {
    this.res.writeHead(200);
    postMessage("Throw Up The X*");
    this.res.end();
  } 
  else if(request.text && botDuck.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://media3.giphy.com/media/YCseTHF2I6CCA/giphy.gif");
    this.res.end();
  }
  else if(request.text && botRegexCC.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/400x400.jpeg.9e7bea369900400fb3edb99093bdac91");
    this.res.end();
  }
    else if(request.text && botRegexSr.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://i.imgur.com/78jbQMz.jpg");
    this.res.end();
  }
  else if(request.text && botRegexCryNeema.test(request.text)) {
this.res.writeHead(200);
postMessage("https://i.groupme.com/750x706.jpeg.3331bbcbd639415295a9eb64c42cb1c5.large");
this.res.end();
}
  else if(request.text && botRegexCheese.test(request.text)) {
    this.res.writeHead(200);
    if(0.6 >= Math.random() > 0.3)
      postMessage(cheese1);
    else if(Math.random() >0.6)
      postMessage(cheese3)
    else
      postMessage(cheese2);
    this.res.end();
  }
  
  else {
    console.log("don't care");
    this.res.writeHead(200);
    this.res.end();
  }
}

function postMessage(response) {
  var botResponse,options, body, botReq;

  botResponse = response

  options = {
    hostname: 'api.groupme.com',
    path: '/v3/bots/post',
    method: 'POST'
  };

  body = {
    "bot_id" : botID,
    "text" : botResponse
  };

  console.log('sending ' + botResponse + ' to ' + botID);

  botReq = HTTPS.request(options, function(res) {
      if(res.statusCode == 202) {
        //neat
      } else {
        console.log('rejecting bad status code ' + res.statusCode);
      }
  });

  botReq.on('error', function(err) {
    console.log('error posting message '  + JSON.stringify(err));
  });
  botReq.on('timeout', function(err) {
    console.log('timeout posting message '  + JSON.stringify(err));
  });
  botReq.end(JSON.stringify(body));
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


exports.respond = respond;
