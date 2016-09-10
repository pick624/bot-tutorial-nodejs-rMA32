var HTTPS = require('https');
var cool = require('cool-ascii-faces');

var botID = process.env.BOT_ID;

function respond() {
  var request = JSON.parse(this.req.chunks[0]),
      botRegex = /^\/cool guy/;  botRegexChew = /^\/chew clock/i;botRegexSalt = /^\/salt/;botRegexPay = /^\/payouts/;
      botRegexAd=/^\/advance/;botRegexMI = /^\/Mike/; botRegexOffense = /^\/offense/i; botDEZ = /^\/Dez/; botDuck = /^\/duck/;
      botRegexDefense = /^\/defense/i;  botRegexTw = /^\/twitch/i; botRegexTrade = /^\/trades/; botRegexSh = /^\/oh/; botRegexMix = /^\/Mix/; botRegexCC = /^\/respek/; botRegexSr = /^\/trash/; botRegexSt = /^\/haha/; botRegexQu = /^\/stfu/;
      botRegexCryNeema=/^\/cry neema/; botRegexLuck = /^\/luck/; botRegexFumble = /^\/fumble/; botRegexL = /^\/L/;  botRegexCryingg = /^\/cry/; botRegexCheese = /^\/cheese/
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
  else if(request.text && botRegexChew.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/788x707.png.78f65f32c0bb455684a81552eb034980");
    this.res.end();
  } 
  else if(request.text && botRegexSalt.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/600x600.jpeg.abf553e8c766444ca32cd06ffb450d8c");
    this.res.end();
  } 
  else if(request.text && botRegexAd.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.imgflip.com/xgtsl.jpg");
    this.res.end();
  }
  else if(request.text && botRegexPay.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/763x318.png.c51cc183a8004411849ec85120af6a24");
    this.res.end();
  } 
  else if(request.text && botRegexMI.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.kinja-img.com/gawker-media/image/upload/mjvi0ol0s5i3c6ikolql.jpg");
    this.res.end();
  } 
  else if(request.text && botRegexOffense.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/844x705.png.a9d77b1e586f4717b7ea15563bb2a967");
    this.res.end();
  }
  else if(request.text && botRegexDefense.test(request.text)) {
    this.res.writeHead(200);
    var req = request.text.substring(5,request.text.length);
    var rep = req.replace(/ /,"+");
    postMessage("https://i.groupme.com/840x311.png.a2757419aea14faba15e7a6aef2b7d76");
    this.res.end();
  }  

  else if(request.text && botRegexTw.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.twitch.tv/"+request.text.substring(8,request.text.length));
    this.res.end();
  } 
  else if(request.text && botRegexTrade.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/895x598.png.0b9c5de1fcfe4645b6f2d94d9695346f");
    this.res.end();
  } 
  else if(request.text && botRegexSh.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.quickmeme.com/img/fe/fe9126fe4327f1b37f06c8c00c051bf8f37c1580b6c3d16da8b4dcb8607b60b2.jpg");
    this.res.end();
  } 
  else if(request.text && botRegexMix.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/1048x121.png.c1b8db406ab748ed97d8426e23c64049");
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
    else if(request.text && botRegexSt.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://cdn.meme.am/instances/54668610.jpg");
    this.res.end();
  }  
    else if(request.text && botRegexQu.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://media.giphy.com/media/IHaQCbfUJ26wE/giphy.gif");
    this.res.end();
  }
  else if(request.text && botRegexCryNeema.test(request.text)) {
this.res.writeHead(200);
postMessage("https://i.groupme.com/750x706.jpeg.3331bbcbd639415295a9eb64c42cb1c5.large");
this.res.end();
}
  else if(request.text && botRegexLuck.test(request.text)) {
this.res.writeHead(200);
postMessage("http://memecrunch.com/meme/IAWU/you-don-t-always-beat-me-at-madden/image.jpg");
this.res.end();
}
  else if(request.text && botRegexFumble.test(request.text)) {
this.res.writeHead(200);
postMessage("http://s2.quickmeme.com/img/c5/c5e2527ff84089b25e6cd56810125c38dc008985077b3cf18207be27ae4b232d.jpg");
this.res.end();
}
  else if(request.text && botRegexL.test(request.text)) {
this.res.writeHead(200);
postMessage("https://pbs.twimg.com/media/CLNho0mUcAAZ5KC.jpg");
this.res.end();
}
  else if(request.text && botRegexCryingg.test(request.text)) {
this.res.writeHead(200);
postMessage("http://cdn3.sbnation.com/imported_assets/1945573/MORENO-TEARS.gif");
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
