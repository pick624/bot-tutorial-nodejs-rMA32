var HTTPS = require('https');
var cool = require('cool-ascii-faces');

var botID = process.env.BOT_ID;

function respond() {
  var request = JSON.parse(this.req.chunks[0]),
      botRegex = /^\/cool guy/;  botRegexDL = /^\/ddl/i;botRegexSalt = /^\/salt/;botRegexRules = /^\/rules/;
      botRegexAd=/^\/advance/;botRegexMI = /^\/Mike/; botRegexSC = /^\/SZN/i; botDEZ = /^\/Dez/; botDuck = /^\/duck/;
      botRegexP = /^\/PDL/i;  botRegexTw = /^\/twitch/i; botRegexSB = /^\/schedules/; botRegexSh = /^\/shrug/; botRegexWk = /^\/teams/; botRegexCC = /^\/cc/;
      botRegexCryNeema=/^\/cry neema/; botRegexCheese = /^\/cheese/
      cheese1 = 'https://pbs.twimg.com/profile_images/494330891/cheese_oh_cheese_400x400.jpg'; cheese2 = 'https://i.ytimg.com/vi/efLRmlILC2I/maxresdefault.jpg'
      cheese3 = 'http://www.wallydfantasyfootball.com/things/cheddar-cheese-cheesehead-fantasy-football-logo-helmet.jpg';
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
    postMessage("https://i.imgur.com/B5BSVqH.png");
    this.res.end();
  } 
  else if(request.text && botRegexAd.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.hackcollege.com/wp-content/uploads/2013/02/kno_advance.jpg");
    this.res.end();
  }
  else if(request.text && botRegexRules.test(request.text)) {
    this.res.writeHead(200);
    postMessage("RULES & GUIDELINES

•    QUITTING:   No Quitting! If you quit it is an Automatic removal from the league.
•    SIM STYLE: This is a SIM LEAGUE! Not a league made to search the internet looking for exploits and "money" plays. Mix up your calls and play realistic!
•    DISCONNECTION POLICY:   If a game gets disconnected, restart the game. No excuses! You may take the win only if:
•    1st half: person whose connection drops was losing by 21 or more points
•    3rd Q: person whose connection drops is losing by 17 or more points
•    4th Q: person whose connection drops is losing by 10 or more points
•    NO TANKING:   Members are not allowed to throw a season or game to have a higher draft pick.
•    SPORTSMANSHIP:   If you are winning big in the 4th: Don’t try and embarrass your opponent by calling timeouts and trying to run up the score If your opponent is out of time outs and game is under 2 minutes, kneel the ball. (This can also be called stats padding and will result in player suspension)
•    if you're up 28+ you must chew clock no matter what quarter it is. You can stop chew clock if the score gets closer. (Your game score should NOT be 65+ points)
•    CHEW CLOCK: You can start chewing clock IF: 1) it's 4th quarter and 2 mins left. 2) If you are winning by a lot (28+ points) 3) If your opponent gives up and allows you to chew clock 
 GAME PLAY OFFENSE

4th DOWN RULE:   These are the only situations in a game when you can go for it on 4th down: (No more than 1 per drive unless you guy losing more than 14)
•    FIRST HALF:
4th down in your own territory (0-50 yard line) Punt the ball.
4th and 1 or less in your opponent’s territory (49-0) you are allowed to go for it.
4th and goal inside the 5 yard line you are allowed to go for it
•    3rd Quarter
Same rules apply as first half unless you are losing by 14 points or more then you are allowed to go for it anytime and anywhere. (At own risk)
•    4th Quarter
If you are losing then you are allowed to go for it anytime and anywhere. If the game is tied then you can go for it at own risk. Also if you are winning by 8 or less and its 4th and 1 or inches then you are allowed to go for it only on opponent’s side of the field (49-0)
•    OT: You are allowed to go for it anytime.
•    Hurry Up Rule - You are allowed to run no huddle for 2 consecutive plays. If you are losing by 14 or more anytime in the game then you can hurry up all you want. Also under 2 minutes in half or 4th quarter hurry up all you want.
•    2PT CONVERSION: You can go for 2pts only when you need them in a real situation. You can also go for it to win a game at the end
•    QB DROP:   You cannot purposely drop back with your QB more than 10 yards after the snap. Also no running straight to sideline when you hike the ball to buy more time. That is not SIM play. You can rollout with QB and run or throw immediately. If you are caught time after time doing this you will be removed.
•    SCREENS:   Maximum of 6 screens per game
•    PUNTS:   You cannot drop a player back into punt coverage before the snap
•    FAKES: 1 FAKE on special teams is allowed per game (Includes onside unless losing in the 4th quarter)
•    QB ROLL OUTS: Do not abuse the QB roll out to lead the WR. Example: you roll out right away after snapping the ball (unless it’s a design play) to lead the WR. If you roll out pass the numbers, you HAVE to run the ball. (Unless it’s a design play/or you pressure in the box)
•    QB SCRAMBLE: No excessive QB scrambling.  Example: 4 WR Verticals play, after hiking you scramble right away multiple times per drive.
•    PLAY MAKER IS BANNED Due to people cheese while rolling out, play maker is banned from this league, if caught, you will be suspended!


GAME PLAY DEFENSE

•    No manually moving a bunch of players all over the field. You are allowed to move a player in COVERAGE in a realistic manner to line up over a receiver; this means a couple of feet here and there.
•    If you use a D-lineman and want to go out in a zone or cover, you must stay on the line until the ball is hiked and then you may drop back.
•    BLITZING:  Nano blitzes are NOT allowed
•    SHIFTS:  :  Excessive shifts (back & forth) are not allowed (shake blitz)
•    COVERAGE:  :  When USER controlling a defender in pass coverage, you cannot purposely bump receivers down field after 5 yards. If you do it by mistake, back off and do not continue to bump the offensive player. This is still a major flaw in the game and it is a major disadvantage to the offense.
•       SUPER ZONE RULE:  :  You must rush 3 or more players on defense at all times! It does NOT have to be 3 D-Lineman. It can be any combination of players on defense. 
Please use the 80/20 rule, either 80% passes and 20% run or 80% run and 20% pass.  This is the same for DEFENSE too (80% zone, 20% man, etc.)  We don’t care, as long as you are not abusing the same plays. Mix it up! Just don’t be calling the same run play or same pass play multiple times per drive. There are tons of different run plays and pass plays. This should not be an issue. 

");
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
    postMessage("http://daddyleagues.com/maddenszn/schedule/s");
    this.res.end();
  } 
  else if(request.text && botRegexSh.test(request.text)) {
    this.res.writeHead(200);
    postMessage("¯\\_(ツ)_/¯");
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
    postMessage("https://i.groupme.com/851x1184.jpeg.330228901f684b0cb46cd1cef6953923");
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
