const express = require('express')
const PORT = process.env.PORT || 3000;
const app = express()

app.get('/api/v1/phish/members', (req, res) => res.send('Hello Phish!'))

app.listen(PORT, () => console.log(`Example app running!`))