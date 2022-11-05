const section = document.querySelector('.data');

const fetchData = async function(endpoint) {
  try{
    const response = await fetch(endpoint);
    // stores json to data to become usable js
    const data = await response.json();

    console.log(response);

    // error handling
    if (!response.ok) {
      throw new Error(`${response.status}: ${response.statusText}`);
    }

    // accumulator
    let output = '';

    const handlePost = function(data) {
      output += `
       <article class="card">
         <h2>${data.title}</h2>
         <figure><img src="${data.image}" alt"Picture of ${data.title}"></figure>
         <ul>
           <li><strong>Director:</strong> ${data.director}</li>
           <li><strong>Producer:</strong> ${data.producer}</li>
           <li><strong>Date:</strong> ${data.release_date}</li>
           <li><strong>Description:</strong> <br>${data.description}</li>
           <li><strong>Rotten Tomato Score:</strong> ${data.rt_score}</li>
          </ul>
          <a href="${data.url}">Film Index</a>
       </article>
       `
    }

    // loops the array from API
    data.forEach(handlePost);

    // prints output
    section.innerHTML = output;

  } catch (error) {
    // This code only runs when an exception (error) is thrown
    console.log('Message: ', error.message);
    console.log('Name: ', error.name);
    console.log('Cause: ', error.cause);

    document.querySelector('body').innerHTML = `<h1>There was an error</h1>`
  } 
}

// Invoke our function
fetchData('https://ghibliapi.herokuapp.com/films');