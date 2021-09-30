const tmi = require('tmi.js');

const client = new tmi.Client({
  options: { debug: true },
  connection: {
    secure: true,
    reconnect: true
  },
  // put in twitch username and oauth password
  identity: {
    username: 'twitchUserName',
    password: 'oauth:23012381029389012830912830'
  },
  // channels for bot to join and actively listen to
  channels: ['jesterw00t']
});

var delay = ( function() {
  var timer = 0;
  return function(callback, ms) {
      clearTimeout (timer);
      timer = setTimeout(callback, ms);
  };
})();

client.connect();
delay(function(){
  console.log("Delay occurred as programmed, continuing on with normal service.");
}, 10000 );


// copy and paste this to create additional voice responses
client.on("chat", (channel, userstate, message, self) => {
  message = message.toLowerCase();
  if(message == "hero") {
    // if you want bot to type in chat, use client.say(channel, "<message here>")
    var exec = require('child_process').exec;
    exec(`cd C:\\Program Files\\VoiceAttack\\ && voiceattack.exe -command test"`, function (err, stdout, stderr) {
        if (err) {
            throw err;
        }
    })
  }
})
// ^^

