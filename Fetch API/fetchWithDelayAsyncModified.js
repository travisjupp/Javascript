//  https://medium.com/suyeonme/javascript-fetch-multiple-data-at-once-in-delay-9a74ef6afc7

const delay = (ms = 5000) => new Promise(r => setTimeout(r, ms));

// const getDataSeries = async items => {
//   let results = [];
//   for (let index = 0; index < items.length; index++) {
//     await delay();
//     const res = await fetch(items[index]);
//     const json = await res.json();
//     console.log('json.id =>',json.id);
//     results.push(json.id);
//   }
//   return results;
// };
const q = [];
let isFetching = false;
const results = [];

const getData = async item => {
  if(item) q.push(item);
  if(q.length && !isFetching){
    isFetching = true;
    await delay();
    const res = await fetch(q.shift());
    const json = await res.json();
    isFetching = false;
    results.push(json.id);
    getData();
  } else if (isFetching) {
    console.log('fetch blocked for', item );
  }
}

// const items = ['http://192.168.0.5:8000/user/405_notallowed','http://192.168.0.5:8000/user/Adventurous_Ant7239'];
// getDataSeries(items).then((r)=>console.log(r));
const data = async () => {
  const id = await getData('http://192.168.0.5:8000/user/405_notallowed');
  console.log('data =>' ,id, results);
};
data();

const data2 = async () => {
  const id = await getData('http://192.168.0.5:8000/user/Adventurous_Ant7239');
  console.log('data2 =>', id, results);
};
data2();
console.log(results);
