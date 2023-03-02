const CLIENT_ID = 'YOUR_CLIENT_ID';
const CLIENT_SECRET = 'YOUR_CLIENT_SECRET';
const REDDIT_USERNAME = 'YOUR_REDDIT_USERNAME';
const REDDIT_PASSWORD = 'YOUR_REDDIT_PASSWORD';

const urlSearchParams = new URLSearchParams();
urlSearchParams.append('grant_type', 'password');
urlSearchParams.append('username', REDDIT_USERNAME);
urlSearchParams.append('password', REDDIT_PASSWORD);

fetch('https://www.reddit.com/api/v1/access_token', {
    method: 'POST',
    headers: {
        'Authorization': `Basic ${btoa(`${CLIENT_ID}:${CLIENT_SECRET}`)}`,
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: urlSearchParams
})
.then(response => {
    if (!response.ok) {
        throw new Error('Error generating OAuth access token');
    }
    return response.json();
})
.then(data => {
    const access_token = data.access_token;
    console.log('OAuth access token:', access_token);
})
.catch(error => {
    console.error(error);
});
