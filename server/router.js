const router = require('express').Router();
const { getTopics, postTopics } = require('./controllers/topicController');

router.get('/topics', getTopics);
router.post('/topics', postTopics);

module.exports = router; //dont forget this!
