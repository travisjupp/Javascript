const fetchQueue = [];
let isFetching = false;

function fetchWithDelay(url, delay) {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(response => resolve(response))
            .catch(error => reject(error));
        setTimeout(() => {
            resolve(null); // Resolve after the delay even if fetch fails
        }, delay);
    });
}

function processQueue() {
    if (!isFetching && fetchQueue.length > 0) {
        isFetching = true;
        const { url, delay } = fetchQueue.shift();

        fetchWithDelay(url, delay)
            .then(response => {

                // console.log('response.ok', response.ok, 'status', response.status);

                if (response) {
                    // Process the response
                    const data = response.json();
                    return data;

                } else {
                    // Handle timeout
                }
            })
            .then(data => {
                console.log('=> ', data.data.name)
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

// Usage example
fetchQueue.push(
    { url: 'http://192.168.0.5:8000/user/405_notallowed', delay: 100 },
    { url: 'http://192.168.0.5:8000/user/Adventurous_Ant7239', delay: 5000 },
    { url: 'https://www.reddit.com/user/lolifax/about.json', delay: 2000 },
    { url: 'https://www.reddit.com/user/Deep-Neighborhood587/about.json', delay: 1000 },
    // { url: 'https://www.reddit.com/user/RatsWithLongTails/about.json', delay: 1000 },
    // { url: 'https://www.reddit.com/user/PervyFather1973/about.json', delay: 1000 },
    // { url: 'https://www.reddit.com/user/Anadyne/about.json', delay: 1000 },
    // { url: 'https://www.reddit.com/user/rememberall/about.json', delay: 1000 },
    // { url: 'https://www.reddit.com/user/SM-68/about.json', delay: 1000 }
    // { url: 'https://www.reddit.com/user/[deleted]/about.json', delay: 15000 }
);
// fetchQueue.push({ url: 'http://192.168.0.5:8000/r/MapPorn', delay: 5000 }); // Add fetch request to the queue
processQueue(); // Start processing the queue
