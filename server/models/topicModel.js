const mongoose = require('mongoose');

const topic = {
  title: String,
  created_at: {type: Date, default: Date.now},
  votes: {type: Number, default: 0}
};

const Topic = mongoose.model('react-topics', topic);

module.exports = Topic;