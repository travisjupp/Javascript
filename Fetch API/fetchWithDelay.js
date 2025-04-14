// Adding a delay to a fetch operation
// Note: This only adds a delay to the Promise, fetch still happens immediately. See `fetchWithDelayAsync.js` for adding delay between requests, or `fetchQueue.js` on how to use a `isFetching` flag ensures that subsequent fetch requests are only made after the current one has finished.

const t0 = performance.now();
function fetchWithDelay(url, delay = 1000) { // delay must be at least a second or setTimeout will resolve before fetch is done
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(response => resolve(response))
      .catch(error => reject(error));
    setTimeout(() => {
      const t1 = performance.now();
      console.log(`Call took ${t1 - t0} milliseconds.`);
      resolve(null); // Resolve after the delay even if fetch fails
    }, delay);
  });
}

const t1 = performance.now();
fetchWithDelay('http://192.168.0.5:8000/r/MapPorn', 1000)
// then(data => data.json()
  .then(data => data.json())
  .then(json => console.log(json.id))
  .catch(e => console.error(e.message))
// fetchWithDelay('https://www.reddit.com/user/lolifax/about.json');

// { url: 'https://www.reddit.com/user/Deep-Neighborhood587/about.json', delay: 1000 },
// { url: 'https://www.reddit.com/user/RatsWithLongTails/about.json', delay: 1000 },
// { url: 'https://www.reddit.com/user/PervyFather1973/about.json', delay: 1000 },
// { url: 'https://www.reddit.com/user/Anadyne/about.json', delay: 1000 },
// { url: 'https://www.reddit.com/user/rememberall/about.json', delay: 1000 },
// { url: 'https://www.reddit.com/user/SM-68/about.json', delay: 1000 }
// { url: 'https://www.reddit.com/user/[deleted]/about.json', delay: 15000 }
