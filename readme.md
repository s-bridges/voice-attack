## About

Hello! Hopefully this helps you out, if you have any questions feel free to contact me on discord heroshot # zero zero two seven. If you like it and it has improved your stream, consider sponsoring this repo so I can do more cool things for streamers. Good luck and have fun!

## Instructions

- Download [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) (Optional)
- Download [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli#download-and-install)
- Download [NPM & Node.js](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- Download [VS Code](https://code.visualstudio.com/) (Optional)
- Get OAUTH [Password](https://twitchapps.com/tmi/)

- Make a new directory and clone this repo to that directory.
  - `Mkdir voiceattack`
  - `git clone https://github.com/s-bridges/voice-attack/releases/tag/v1.0` (Replace v1.0 with whatever release)
- Open VS Code and open voiceattack folder
- Open the terminal inside VS Code (Ctrl + Shift + `)
- Type `npm install` Hit Enter
- Open up .env.example and change everything so it matches your needs
- Go back to terminal
- Type `heroku local worker`
- To exit, hit `Ctrl + C`, then type `yes`.

- Common issue occurs when the Voice Attack software is located in Program Files (x86), it is recommended that you move it to Program Files or a different directory of your choosing.
