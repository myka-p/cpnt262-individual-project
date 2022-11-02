const randomInteger = function(max) {
  const randomInteger = Math.floor(Math.random() * max);
  return randomInteger;
}

const fetchData = async function(endpoint) {
  const response = await fetch(endpoint);
  // stores json to data to become usable js
  const data = await response.json();
  // Use the data
  //loop this for the assignment
  const anime = data[randomInteger(data.length)];

  const body = document.querySelector('body');
  
  output = `
    <article>
      <h2>${anime.title}</h2>
      <img src="${anime.image}" alt"Picture of ${anime.title}">
      <ul>
        <li>Director: ${anime.director}</li>
        <li>Producer: ${anime.producer}</li>
        <li>Date: ${anime.release_date}</li>
        <li>Description: ${anime.description}</li>
        <li>Rotten Tomato Score: ${anime.rt_score}</li>
      </ul>
    </article>
    `
  body.innerHTML = output;
}

// Invoke our function
fetchData('https://ghibliapi.herokuapp.com/films'); 