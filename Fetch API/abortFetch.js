controller = new AbortController();
const {signal} = controller;
// console.log(controller)
// console.log(signal);

const fetch1 = (req, abortSig) => {
  const controller = new AbortController();
  const {signal} = controller;
  if (abortSig === 'abort') controller.abort();
  // controller.abort('manual abort');
  // controller.abort();

  return fetch(req, {signal})
    .then(res => res.json())
    .then(data => console.log('fetch1', data.id))
    .catch(e => console.error('fetch1 Error: ', e));
};

const fetch2 = req => {
  return fetch(req, {signal})
    .then(res => res.json())
    .then(data => console.log('fetch2', data.id))
    .catch(e => console.error('fetch2 Error: ', e));
};

// controller.abort();
fetch1('http://192.168.0.5:8000/r/react', 'abort');
fetch2('http://192.168.0.5:8000/r/MapPorn',);
