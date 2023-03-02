const axios = require('axios');

const CLIENT_ID = 'YOUR_CLIENT_ID';
const CLIENT_SECRET = 'YOUR_CLIENT_SECRET';
const REDDIT_USERNAME = 'YOUR_REDDIT_USERNAME';
const REDDIT_PASSWORD = 'YOUR_REDDIT_PASSWORD';

axios.post('https://www.reddit.com/api/v1/access_token', {
    grant_type: 'password',
    username: REDDIT_USERNAME,
    password: REDDIT_PASSWORD
}, {
    auth: {
        username: CLIENT_ID,
        password: CLIENT_SECRET
    },
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
})
.then(response => {
    const access_token = response.data.access_token;
    console.log('OAuth access token:', access_token);
})
.catch(error => {
    console.error('Error generating OAuth access token:', error);
});
