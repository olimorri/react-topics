import './TopicTile.css'

function TopicTile(props) {

  return (
    <div className="topic_tile_container">
      <div className="topic_tile_voting">
        <button className="btn_vote">👍</button>
        <p>{props.topic.votes}</p>
        <button className="btn_vote">👎</button>
      </div>
      <div className="topic_tile_title">
        <p>{props.topic.title}</p>
      </div>
      <button onClick={() => props.handleClick(props.topic._id)} className="topic_tile_btn_delete">🗑</button>
    </div>
  )
}

export default TopicTile