import { useState } from 'react';
import './TopicInput.css'

function TopicInput(props) {

  const [input, setInput] = useState('')

  const handleChange = (event) => {
    setInput(event.target.value)
  }

  function handleClick(e) {
    if (!input) alert('No input detected')
    e.preventDefault();
    props.createTopic(input);
    setInput('');
  }

  return (
    <form className="topic_input_container" onSubmit={handleClick}>
      <input type="text" className="topic_input_text" value={input} onChange={handleChange}/>
      <button type="submit" className="topic_input_btn">Create</button>
    </form>
  )

}

export default TopicInput