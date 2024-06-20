const fetchQueue = [];
let isFetching = false;

function fetchWithDelay(url, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        fetch(url)
            .then(response => resolve(response))
            .catch(error => reject(error));
        }, delay);
    });
}

function processQueue() {
    if (!isFetching && fetchQueue.length > 0) {
        isFetching = true;
        const { url, delay } = fetchQueue.shift();
        fetchWithDelay(url, delay)
            .then(response => {
                if (response) {
                    // Process the response
                    const json = response.json();
                    json.then(r => console.log('r.id', r.id));
                } else {
                    // Handle timeout
                }
                isFetching = false;
                processQueue(); // Continue processing the queue
            })
            .catch(error => {
                console.log('Error: ', error.message);
                // Handle fetch error
                isFetching = false;
                processQueue(); // Continue processing the queue
            });
    }
}

function handleQueue(request) {
    fetchQueue.push(request);
    processQueue();

}
handleQueue({ url: 'http://192.168.0.5:8000/user/405_notallowed', delay: 2000 });
handleQueue({ url: 'http://192.168.0.5:8000/user/Adventurous_Ant7239', delay: 3000 });
handleQueue({ url: 'http://192.168.0.5:8000/r/MapPorn', delay: 2000 });
// handleQueue({ url: 'https://www.reddit.com/user/lolifax/about.json', delay: 2000 });
// Usage example
// fetchQueue.push(
    // { url: 'http://192.168.0.5:8000/user/405_notallowed', delay: 2000 },
    // { url: 'http://192.168.0.5:8000/user/Adventurous_Ant7239', delay: 3000 },
    // { url: 'http://192.168.0.5:8000/r/MapPorn', delay: 2000 },
    // { url: 'https://www.reddit.com/user/lolifax/about.json', delay: 2000 },
    // { url: 'https://www.reddit.com/user/Deep-Neighborhood587/about.json', delay: 1000 },
    // { url: 'https://www.reddit.com/user/RatsWithLongTails/about.json', delay: 1000 },
    // { url: 'https://www.reddit.com/user/PervyFather1973/about.json', delay: 1000 },
    // { url: 'https://www.reddit.com/user/Anadyne/about.json', delay: 1000 },
    // { url: 'https://www.reddit.com/user/rememberall/about.json', delay: 1000 },
    // { url: 'https://www.reddit.com/user/SM-68/about.json', delay: 1000 }
    // { url: 'https://www.reddit.com/user/[deleted]/about.json', delay: 15000 }
// );
// fetchQueue.push({ url: 'http://192.168.0.5:8000/r/MapPorn', delay: 5000 }); // Add fetch request to the queue
// processQueue(); // Start processing the queue
