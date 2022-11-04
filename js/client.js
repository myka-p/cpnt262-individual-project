const section = document.querySelector('.data');

const fetchData = async function(endpoint) {
  try{
    // error handling
    const response = await fetch(endpoint);
    // stores json to data to become usable js
    const data = await response.json();

    console.log(response);

    if (!response.ok) {
      throw new Error(`${response.status}: ${response.statusText}`);
    }

    // accumulator
    let output = '';

    const handlePost = function(data) {
      output += `
       <article>
         <h2>${data.title}</h2>
         <img src="${data.image}" alt"Picture of ${data.title}">
         <ul>
           <li>Director: ${data.director}</li>
           <li>Producer: ${data.producer}</li>
           <li>Date: ${data.release_date}</li>
           <li>Description: ${data.description}</li>
           <li>Rotten Tomato Score: ${data.rt_score}</li>
           <li><a href="${data.url}">Complete Information</a></li>
        </ul>
       </article>
       `
    }

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