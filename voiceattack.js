const tmi = require('tmi.js');

const client = new tmi.Client({
  options: { debug: true },
  connection: {
    secure: true,
    reconnect: true
  },

  identity: {
    username: process.env.TWITCH_USERNAME,
    password: process.env.TWITCH_OAUTH
  },
  channels: [process.env.TWITCH_CHANNEL]
});

client.connect();

// copy and paste this to create additional voice responses
client.on("chat", (channel, userstate, message, self) => {
  message = message.toLowerCase();
  if(message == "hero") {
    // if you want bot to type in chat, use client.say(channel, "<message here>")
    var exec = require('child_process').exec;
    exec(`cd ${process.env.VOICE_ATTACK_PATH} && voiceattack.exe -command test"`, function (err, stdout, stderr) {
        if (err) {
            throw err;
        }
    })
  }
})

