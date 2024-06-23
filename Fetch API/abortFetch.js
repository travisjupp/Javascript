
// console.log(controller);
// console.log(signal);

function fetch1(req, abort) {
    const controller = new AbortController();
    const {signal} = controller;
    if (abort === 'abort') controller.abort('some reason');
    
    return fetch(req, {signal})
        .then(r => console.log('fetch1',r))
        .catch(e => console.error('fetch1',e));
    
};

// const fetch2 = req => {
//     return fetch(req, {signal})
//         .then(r => console.log('fetch2',r))
//         .catch(e => console.error('fetch2',e));
    
// };

// controller.abort();
fetch1('http://192.168.0.5:8000/user', 'abort');
fetch1('http://192.168.0.5:8000/r');
// fetch2('http://192.168.0.5:8000/r');



