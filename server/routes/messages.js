const { addMessage, getMessages } = require("../controllers/messageController");
const router = require("express").Router();

// calls from middleware to next router
router.post("/addmsg/", addMessage);
router.post("/getmsg/", getMessages);

module.exports = router;
