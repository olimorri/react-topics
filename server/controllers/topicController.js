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

exports.deleteTopic = async (req,res) => {
  try {
    const { id } = req.params;
    await Topic.findByIdAndDelete(id)
    res.sendStatus(204);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}

exports.voteUp = async (req, res) => voteTopic(req, res, 1);

exports.voteDown = async (req, res) => voteTopic(req, res, -1);

const voteTopic = async (req, res, dir) => {
  try {
    const { id } = req.params;
    const topic = await Topic.findByIdAndUpdate(id,
      { $inc: {votes: dir} },
      {new: true}
      );
    res.send(topic);
  } catch (err) {
    console.log(err)
    res.sendStatus(500);
  }
}