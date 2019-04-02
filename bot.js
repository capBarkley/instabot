const TelegramBot = require('node-telegram-bot-api');
const request = require('request');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const rp = require('request-promise');
const cheerio = require('cheerio');

// replace the value below with the Telegram token you receive from @BotFather
const token = '745822757:AAEwJLGZW2OSmzLYWyiSyMmOQBt-8yfqBDg';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

// Listen for any kind of message. There are different kinds of
// messages.

bot.onText(/Dx5 (.+) (.+)/, (msg, match) => {
  // 'msg' is the received Message from Telegram
  // 'match' is the result of executing the regexp above on the text content
  // of the message

  const chatId = msg.chat.id;
  const instaProfile = match[1]; // instagram profile
  const urlOfPost = match[2]; // url of instagram post
  rp(urlOfPost)
    .then(html => {
      let $ = cheerio.load(html);
      let usersCommented = $('.TlrDj').attr('title')
    })

  bot.sendMessage(chatId, resp);
});