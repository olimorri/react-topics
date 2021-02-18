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
    ApiService.postTopic(input)
    .then(topic => {
      setTopics(prevTopics => [...prevTopics, topic])
    })
  }

  const voteTopic = (id, dir) => {
    ApiService.voteTopic(id, dir)
    .then(updatedTopic => {
      setTopics(topics => {
        const index = topics.findIndex(topic => topic._id === updatedTopic._id)
        const tempArr = [...topics]
        const entryToRemove = tempArr.splice(index, 1, updatedTopic)
        return tempArr;

      })
      //we want to remove the item at the index of id and replace it
      //but we cant do this in place
      //tempArr is the array after we've taken the old version out

    })
  }

  useEffect(() => {
    ApiService.getTopics()
    .then(topics => setTopics(topics.sort((a,b) => b.votes - a.votes)))
  }, [topics]); //we need to put topics in here so that it refreshes on changes to topics


  return (
    <div className="App">
      <TopicInput createTopic={createTopic}/>
      <TopicList topics={topics} deleteTopic={deleteTopic} voteTopic={voteTopic}/>
      
    </div>
  );
}

export default App;
