import { useEffect, useState } from 'react';
import './App.css';
import TopicList from'./TopicList/TopicList';
import ApiService from './ApiService';
import TopicInput from'./TopicInput/TopicInput';

function App() {

  const [topics, setTopics] = useState([]);

  const deleteTopic = (id) => {
    ApiService.deleteTopic(id)
    .then(() => {
      setTopics(topics.filter(topic => topic._id !== id))
    })
  }

  const createTopic = (input) => {
    console.log(input)
    ApiService.postTopic(input)
    .then(topic => {
      setTopics(prevTopics => [...prevTopics, topic])
    })
  }

  useEffect(() => {
    ApiService.getTopics()
    .then(topics => setTopics(topics))
  }, []);


  return (
    <div className="App">
      <TopicInput createTopic={createTopic}/>
      <TopicList topics={topics} deleteTopic={deleteTopic}/>
      
    </div>
  );
}

export default App;
