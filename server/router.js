// will organize the communication  to state that the server is running
const express =  require ('express');
const router = express.Router();

router.get("/", (req, res)=> {
    res.send({ response: "Server is running!!"}).status(200);
});

module.exports = router;