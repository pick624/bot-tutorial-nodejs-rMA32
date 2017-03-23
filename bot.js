var HTTPS = require('https');
var cool = require('cool-ascii-faces');

var botID = process.env.BOT_ID;

function respond() {
  var request = JSON.parse(this.req.chunks[0]),
      botRegex = /^\/cool guy/; botRegexSalt = /^\/salt/;botRegexPay = /^\/payouts/;
      botRegexAd=/^\/advance/;botRegexMI = /^\/mike/; botDEZ = /^\/eat/; botDuck = /^\/duck/;
      botRegexTw = /^\/twitch/i; botRegexYu = /^\/youtube/i; botRegexTrade = /^\/trades/; botRegexGuide = /^\/guidelines/;  botRegexSh = /^\/what/; botRegexCC = /^\/bleach/; botRegexSr = /^\/trash/; botRegexQu = /^\/stfu/; botRegexBack = /^\/comeback/;
      botRegexCryNeema=/^\/cry neema/; botRegexLuck = /^\/luck/; botRegexFumble = /^\/fumble/; botRegexL = /^\/L/;  botRegexCryingg = /^\/cry/;  botRegexRuless = /^\/rules/; botRegexCommands = /^\/commands/; botRegexOffseason = /^\/offszn/; botRegexDL = /^\/gszn/; botRegexWeekOne = /^\/week1/;botRegexWeek2 = /^\/week 2/;botRegexWeek3 = /^\/week 3/;botRegexWeek4 = /^\/week 4/;botRegexWeek5 = /^\/week 5/;botRegexWeek6 = /^\/week 6/;botRegexWeek7 = /^\/week 7/;botRegexWeek8 = /^\/week 8/;botRegexWeek9 = /^\/week 9/;botRegexWeek10 = /^\/week 10/;botRegexWeek11 = /^\/week 11/;botRegexWeek12 = /^\/week 12/;botRegexWeek13 = /^\/week 13/;botRegexWeek14 = /^\/week 14/;botRegexWeek15 = /^\/week 15/;botRegexWeek16 = /^\/week 16/;botRegexWeek17 = /^\/week 17/; botRegexCheese = /^\/cheese/
      cheese1 = 'https://pbs.twimg.com/profile_images/494330891/cheese_oh_cheese_400x400.jpg'; cheese2 = 'https://media.giphy.com/media/3o6Mb93JnT2hfbvK92/giphy.gif'
      cheese3 = 'http://www.packerpalace.com/palace02/maddenwcheese.gif';
  var teamAb = ["NE","NO","ARI","PHI","CLE","TEN","OAK","DAL","IND","SEA","CIN","PIT","JAC"
                ,"BAL","SD","DEN","MIN","ATL","KC","NYG","GB","DET","HOU","STL","CHI","CAR",
                "MIA","BUF","SF","WAS","NYJ","TB"]
  if(request.text && botRegex.test(request.text)) {
    this.res.writeHead(200);
    postMessage(cool());
    this.res.end();
  } 
  else if(request.text && botRegexSalt.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/480x374.gif.ff4b7c47fe184675a8418304fcd32e91");
    this.res.end();
  } 
  else if(request.text && botRegexAd.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.imgflip.com/xgtsl.jpg");
    this.res.end();
  }
  else if(request.text && botRegexPay.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/820x960.png.c0eca8bb4e9a4b3db068fc139ce4a698");
    this.res.end();
  } 
  else if(request.text && botRegexMI.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.kinja-img.com/gawker-media/image/upload/mjvi0ol0s5i3c6ikolql.jpg");
    this.res.end();
  } 
  else if(request.text && botRegexTw.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.twitch.tv/"+request.text.substring(8,request.text.length));
    this.res.end();
  } 
    else if(request.text && botRegexYu.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.youtube.com/"+request.text.substring(8,request.text.length));
    this.res.end();
  } 
  else if(request.text && botRegexTrade.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/715x741.png.824f085332c94560bdb69c4c94048178");
    this.res.end();
  } 
  else if(request.text && botRegexGuide.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/562x724.png.1274436c6dd3438ab81700268e80081e");
    this.res.end();
  } 
  else if(request.text && botRegexSh.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/195x229.gif.5d12ede6cdcc48dfbaad6fe71282d4a8");
    this.res.end();
  } 
   else if(request.text && botDEZ.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://i.giphy.com/l0MYAeAmySoRMsXn2.gif");
    this.res.end();
  } 
  else if(request.text && botDuck.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://media3.giphy.com/media/YCseTHF2I6CCA/giphy.gif");
    this.res.end();
  }
  else if(request.text && botRegexCC.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://media.giphy.com/media/1VUITRu23snvi/giphy.gif");
    this.res.end();
  }
    else if(request.text && botRegexSr.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://i.imgur.com/78jbQMz.jpg");
    this.res.end();
  }  
    else if(request.text && botRegexQu.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://media.giphy.com/media/3o7TKOzuVO0pYfSzHa/giphy.gif");
    this.res.end();
  }
      else if(request.text && botRegexBack.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://cdn.meme.am/cache/instances/folder427/59634427.jpg");
    this.res.end();
  }
  else if(request.text && botRegexCryNeema.test(request.text)) {
this.res.writeHead(200);
postMessage("https://i.groupme.com/750x706.jpeg.3331bbcbd639415295a9eb64c42cb1c5.large");
this.res.end();
}
  else if(request.text && botRegexLuck.test(request.text)) {
this.res.writeHead(200);
postMessage("https://media.giphy.com/media/5xtDarDFtx1uQhOC44E/giphy.gif");
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
  else if(request.text && botRegexRuless.test(request.text)) {
this.res.writeHead(200);
postMessage("https://i.groupme.com/1531x1599.jpeg.8eb3a9e6e8bd474abd5434774e757ffa");
this.res.end();
}
  else if(request.text && botRegexCryingg.test(request.text)) {
this.res.writeHead(200);
postMessage("https://media.giphy.com/media/3ohA2XuxdIjFlHGhlC/giphy.gif");
this.res.end();
}
  else if(request.text && botRegexCommands.test(request.text)) {
this.res.writeHead(200);
postMessage("https://i.groupme.com/192x479.png.59eb928f19b84fe89a85eed8e4f6b10e");
this.res.end();
}
    else if(request.text && botRegexOffseason.test(request.text)) {
this.res.writeHead(200);
postMessage("");
this.res.end();
}
      else if(request.text && botRegexDL.test(request.text)) {
this.res.writeHead(200);
postMessage("https://daddyleagues.com/szn");
this.res.end();
}
        else if(request.text && botRegexWeekOne.test(request.text)) {
this.res.writeHead(200);
postMessage("");
this.res.end();
}
        else if(request.text && botRegexWeek2.test(request.text)) {
this.res.writeHead(200);
postMessage("https://i.groupme.com/631x1159.png.8f6c4cd79eca4c329c7c201ab87327f4.large");
this.res.end();
}
        else if(request.text && botRegexWeek3.test(request.text)) {
this.res.writeHead(200);
postMessage("https://i.groupme.com/635x1131.png.6cf38c8eef4a4d6a9d4d439242dab614.large");
this.res.end();
}
        else if(request.text && botRegexWeek4.test(request.text)) {
this.res.writeHead(200);
postMessage("https://i.groupme.com/1270x1986.png.02e4ce84329c4c1786d3671554d39f18.large");
this.res.end();
}
        else if(request.text && botRegexWeek5.test(request.text)) {
this.res.writeHead(200);
postMessage("https://i.groupme.com/1243x2013.png.9890d88d6cc64967bb0e02d3546887cd.large");
this.res.end();
}
        else if(request.text && botRegexWeek6.test(request.text)) {
this.res.writeHead(200);
postMessage("https://i.groupme.com/1249x1975.png.99fdf4e071764b01aedb8dbf04bbb51a.large");
this.res.end();
}
        else if(request.text && botRegexWeek7.test(request.text)) {
this.res.writeHead(200);
postMessage("https://i.groupme.com/1253x2006.png.231f1d35df344e3abe0b40cbfc0f8bae.large");
this.res.end();
}
        else if(request.text && botRegexWeek8.test(request.text)) {
this.res.writeHead(200);
postMessage("https://i.groupme.com/1273x1870.png.2dc77ec68c0b43f58be20316103f317c.large");
this.res.end();
}
        else if(request.text && botRegexWeek9.test(request.text)) {
this.res.writeHead(200);
postMessage("https://i.groupme.com/1248x1863.png.234394cda54b4138be61f51e5f3f683d.large");
this.res.end();
}
        else if(request.text && botRegexWeek10.test(request.text)) {
this.res.writeHead(200);
postMessage("https://i.groupme.com/1231x2003.png.1adbe58a2f1f46768cd740b620ef8b62.large");
this.res.end();
}
        else if(request.text && botRegexWeek11.test(request.text)) {
this.res.writeHead(200);
postMessage("https://i.groupme.com/624x1147.png.95c7650ed0e14158bea4013bb3cb4858.large");
this.res.end();
}
        else if(request.text && botRegexWeek12.test(request.text)) {
this.res.writeHead(200);
postMessage("https://i.groupme.com/618x1146.png.01a6a33e2fd04f898cd45876a7dbdd25.large");
this.res.end();
}
        else if(request.text && botRegexWeek13.test(request.text)) {
this.res.writeHead(200);
postMessage("https://i.groupme.com/617x1129.png.fc9390e2f928407ba13716cee47f080f.large");
this.res.end();
}
        else if(request.text && botRegexWeek14.test(request.text)) {
this.res.writeHead(200);
postMessage("https://i.groupme.com/635x1125.png.e2e6d1810358468498f6227108938f64.large");
this.res.end();
}
        else if(request.text && botRegexWeek15.test(request.text)) {
this.res.writeHead(200);
postMessage("https://i.groupme.com/621x1142.png.bc2d802be12546fcb1b0e04844300dec.large");
this.res.end();
}
        else if(request.text && botRegexWeek16.test(request.text)) {
this.res.writeHead(200);
postMessage("https://i.groupme.com/629x1144.png.2864c578f62d4c3fab2a4e3dfba2996b.large");
this.res.end();
}
        else if(request.text && botRegexWeek17.test(request.text)) {
this.res.writeHead(200);
postMessage("https://i.groupme.com/613x1140.png.99b273cd67e342568f05d6edab7d05d2.large");
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
