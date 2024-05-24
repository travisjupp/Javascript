//  https://medium.com/suyeonme/javascript-fetch-multiple-data-at-once-in-delay-9a74ef6afc7

const delay = (ms = 5000) => new Promise(r => setTimeout(r, ms));

const getDataSeries = async items => {
  let results = [];
  for (let index = 0; index < items.length; index++) {
    await delay();
    const res = await fetch(items[index]);
    const json = await res.json();
    console.log('json.id =>',json.id);
    results.push(json.id);
  }
  return results;
};

const items = ['http://192.168.0.5:8000/user/405_notallowed','http://192.168.0.5:8000/user/Adventurous_Ant7239'];
getDataSeries(items).then((r)=>console.log(r));
