const router = require('express').Router();
const { getTopics, postTopics, deleteTopic, voteUp, voteDown } = require('./controllers/topicController');

router.get('/topics', getTopics);
router.post('/topics', postTopics);
router.delete('/topics/:id', deleteTopic)
router.put('/topics/:id/up', voteUp)
router.put('/topics/:id/down', voteDown)

module.exports = router; //dont forget this!
