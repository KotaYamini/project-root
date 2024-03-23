const express = require('express');
const cardRouter = require('./cards.router');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS for all the routes
app.use(cors());

const api = express.Router();
api.use('/cards', cardRouter);

app.get("/cards", (req, res) => {
    return res.json(cards);
});

app.get("/cards/:cardId", (req, res) => {
    const cardId = req.params.cardId;
    return res.json({})
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});


