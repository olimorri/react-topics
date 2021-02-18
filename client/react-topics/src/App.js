import { useEffect, useState } from 'react';
import './App.css';
import TopicList from'./TopicList/TopicList';
import ApiService from './ApiService';

function App() {

  const [topics, setTopics] = useState([]);

  const deleteTopic = (id) => {
    ApiService.deleteTopic(id)
    .then(() => {
      setTopics(topics.filter(topic => topic._id !== id))
    })
  }

  useEffect(() => {
    ApiService.getTopics()
    .then(topics => setTopics(topics))
  }, []);


  return (
    <div className="App">
      
      <TopicList topics={topics} deleteTopic={deleteTopic}/>
      
    </div>
  );
}

export default App;
