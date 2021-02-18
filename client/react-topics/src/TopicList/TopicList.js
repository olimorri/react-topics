import TopicTile from '../TopicTile/TopicTile'
import './TopicList.css'


function TopicList(props) {

  return (
    <div className="topic_list_container" >
      {props.topics.map(topic => <TopicTile key={topic._id} topic={topic} handleClick={props.deleteTopic}/>)}
    </div>
  )
}

export default TopicList