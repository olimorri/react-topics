const baseURL = "http://localhost:3001";

function getTopics () {
  return fetchRequest('/topics');
}

function postTopic(body) {
  return fetchRequest(`/topics`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({title: body}) //to make this work we need to stringify the whole body
  })
}

function deleteTopic(id) {
  return fetchRequest(`/topics/${id}`, { //no colon here
    method: "DELETE", //make sure this is correct
    headers: {"Content-Type": "application/json"}
  })
}

function fetchRequest(path, options) {
  return fetch(baseURL + path, options)
  .then(res => res.status <= 400 ? res : Promise.reject())
  .then(res => res.status === 204 ? res: res.json())
  .catch(err => {
    console.log(`Error fetching ${path}`, err);
  })
}

export default { getTopics, postTopic, deleteTopic };