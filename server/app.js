const express = require('express');
const routes = require('./routes/index');
const listingsRoute = require('./routes/listings')
const profilesRoute = require('./routes/profile')
const sellRoute = require('./routes/sell')
const likesRoute = require('./routes/likes')
const cors = require('cors')


let app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.options('*', cors());

app.use('/', routes);
app.use('/listings', listingsRoute);
app.use('/profile', profilesRoute);
app.use('/sell', sellRoute);
app.use('/likes', likesRoute);

app.listen(PORT, function () {
    console.log(`Listening on port ${PORT}`);
});