const controller = new AbortController();
const signal = controller.signal;

const timeout = setTimeout(() => {
  controller.abort();
  console.log('Request timed out');
}, 5000); // 5 seconds timeout

fetch('https://api.example.com/data', { signal })
  .then(response => {
    // Process the response
    return response.json();
  })
  .then(data => {
    // Handle the data
    clearTimeout(timeout); // Clear the timeout if the request succeeds
  })
  .catch(error => {
    if (error.name === 'AbortError') {
      console.log('Request aborted due to timeout');
    } else {
      console.error('Error:', error);
    }
  });