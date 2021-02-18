const router = require('express').Router();
const { getTopics, postTopics, deleteTopic } = require('./controllers/topicController');

router.get('/topics', getTopics);
router.post('/topics', postTopics);
router.delete('/topics/:id', deleteTopic)

module.exports = router; //dont forget this!
