const express = require('express');
const morgan = require('morgan');
const app = express();

const port = 8080;
app.use(morgan('short'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('pages/index', {
        content: ['item 1', 'item 2', 'item 3', 'item 4']
    });
});

app.get('*/*', (req, res) => {
    res.status(404).json({message: 'Page not found.'})
});

app.listen(port, () => console.log(`Server running on port ${port}.`));
