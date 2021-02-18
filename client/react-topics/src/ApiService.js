const baseURL = "http://localhost:3001";

function getTopics () {
  return fetchRequest('/topics');
}

function postTopics() {
  console.log("POSTY")
}

function fetchRequest(path, options) {
  return fetch(baseURL + path,options)
  .then(res => res.status <= 400 ? res : Promise.reject())
  .then(res => res.status === 204 ? res: res.json())
  .catch(err => {
    console.log(`Error fetching ${path}`, err);
  })
}

export default { getTopics, postTopics };