// Queue Data Structure by Exodus 4D
// https://codesandbox.io/p/sandbox/async-queue-ghpqm?file=%2Fsrc%2Findex.js
// https://stackoverflow.com/questions/53540348/js-async-await-tasks-queue

class Queue {
    constructor() { this._items = []; }
    enqueue(item) { this._items.push(item); }
    dequeue() { return this._items.shift(); }
    get size() { return this._items.length; }
}

class AutoQueue extends Queue {
    constructor() {
        super();
        this._pendingPromise = false;
    }

    enqueue(action) {
        return new Promise((resolve, reject) => {
            super.enqueue({ action, resolve, reject });
            this.dequeue();
        });
    }

    async dequeue() {
        if (this._pendingPromise) return false;

        let item = super.dequeue();

        if (!item) return false;

        try {
            this._pendingPromise = true;

            let payload = await item.action(this);

            this._pendingPromise = false;
            item.resolve(payload);
        } catch (e) {
            this._pendingPromise = false;
            item.reject(e);
        } finally {
            this.dequeue();
        }

        return true;
    }
}

// Helper function for 'fake' tasks
// Returned Promise is wrapped! (tasks should not run right after initialization)
let _ = ({ ms, ...foo } = {}) => () => new Promise(resolve => setTimeout(resolve, ms, foo));
// ... create some fake tasks
let p1 = _({ ms: 50, url: '❪𝟭❫', data: { w: 1 } });
let p2 = _({ ms: 20, url: '❪𝟮❫', data: { x: 2 } });
let p3 = _({ ms: 70, url: '❪𝟯❫', data: { y: 3 } });
let p4 = _({ ms: 30, url: '❪𝟰❫', data: { z: 4 } });


const aQueue = new AutoQueue();
const start = performance.now();

aQueue.enqueue(p1).then(({ url, data }) => console.log('%s DONE %fms', url, performance.now() - start)); //          = 50
aQueue.enqueue(p2).then(({ url, data }) => console.log('%s DONE %fms', url, performance.now() - start)); // 50 + 20  = 70
aQueue.enqueue(p3).then(({ url, data }) => console.log('%s DONE %fms', url, performance.now() - start)); // 70 + 70  = 140
aQueue.enqueue(p4).then(({ url, data }) => console.log('%s DONE %fms', url, performance.now() - start)); // 140 + 30 = 170

let fetchTest = (url) => () => fetch(url);

let fetchWithDelayTest = (url, delay) => () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            fetch(url).then(r => resolve(r));
        }, delay)
    })
};

aQueue.enqueue(fetchWithDelayTest('http://192.168.0.5:8000/subreddits/1', 3000))
    .then(response => response.json())
    .then(json => console.log(performance.now() - start, json));

