require('dotenv').config()
const axios = require('axios');

const bot = process.env.BOT
const token = process.env.TOKEN
const offset = process.env.OFFSET

// Test the API
const getMe_url = `${bot}${token}/getMe`

axios.get(getMe_url)
    .then(function (response) {
        console.log(response);
    })

// Get Updates
const getUpdates_url = `${bot}${token}/getUpdates?offset=${offset}`

axios.get(getUpdates_url)
    .then(function (response) {
        console.log('Get Updates')
        console.log(response.status)
        console.log(response.data)
    })