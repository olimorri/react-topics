const Topic = require('../models/topicModel');


exports.getTopics = async (req,res) => {
  try {
    const topics = await Topic.find();
    res.status(200);
    res.send(topics);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}

exports.postTopics = async (req,res) => {
  try {
    const topic = await Topic.create(req.body);
    res.status(200);
    res.send(topic); //have to send back
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}