const fetchData = async function() {
  const response = await fetch(url);
  const data = await response.json();
  // Use the data
  console.log(data);
}

// Invoke our function
fetchData();