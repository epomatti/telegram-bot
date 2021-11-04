require('dotenv').config()
const axios = require('axios');

const bot = process.env.BOT
const token = process.env.TOKEN

const url = `${bot}${token}/getMe`

console.log(url)

axios.get(url)
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.error(error);
    })