require('dotenv').config()
const axios = require('axios');

const bot = process.env.BOT
const token = process.env.TOKEN

// Test the API
const getMe_url = `${bot}${token}/getMe`

axios.get(getMe_url)
    .then(function (response) {
        console.log(`Get Me: ${response.status}`)
    })

// Get Updates
const offset = 750513351
const getUpdates_url = `${bot}${token}/getUpdates?offset=${offset}`

axios.get(getUpdates_url)
    .then(function (response) {
        console.log('Get Updates')
        console.log(response.status)
        console.log(response.data)
    })