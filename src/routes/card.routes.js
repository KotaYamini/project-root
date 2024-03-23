const cardRouter = express.Router();

cardRouter.get("/", (req, res) => {
    return res.json(cards);
});


cardRouter.get("/:cardId", (req, res) => {
    const cardId = req.params.cardId;
    return res.json(cards[cardId]);
});

