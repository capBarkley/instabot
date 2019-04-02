const rp = require('request-promise');
const cheerio = require('cheerio');

const urlOfPost = 'https://www.instagram.com/p/Bsi0G1aAmrt/';

rp(urlOfPost)
    .then(html => {
      process.stdout.write('loading')
      let $ = cheerio.load(html);
      let usersCommented = [];
      return $('h3._6lAjh > a')
    })
    .then(result => console.log(result))
    .catch(err => console.log(err))