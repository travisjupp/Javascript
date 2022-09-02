// To copy an object in JavaScript, you have three options:

// Use the spread (...) syntax
// Use the Object.assign() method
// Use the JSON.stringify() and JSON.parse() methods

const person = {
    firstName: 'John',
    lastName: 'Doe'
};


// using spread ...
let p1 = {
    ...person
};

// using  Object.assign() method
let p2 = Object.assign({}, person);

// using JSON
let p3 = JSON.parse(JSON.stringify(person));

// Both spread (...) and Object.assign() perform a shallow copy while the JSON methods carry a deep copy.

// Primitive values vs. Reference values

const baudelaire = {
    occupation: ['Poet', 'Art Critic', 'Philisopher'],
    mistress: 'Jeanne Duval',
    born: 1821,
    died: 1867,
    drugs: ['hashish', 'laudanum'],
    works: {
        poetry: 'Les Fleurs du mal',
        translations: {
            'Thomas de Quincey': ['The Confession of an English Opium Eater', 'Suspiria de profundis'],
            'Edgar Allen Poe': ['Extraordinary Tales', 'Tales of the Grotesque and Arabesque','Prose Tales','Manuscript Found in a Bottle','The Raven','The Fall of the House of Usher']
        }
    }
}

const b1 = {
    ...baudelaire
}

const b2 = Object.assign({}, baudelaire);

const b3 = JSON.parse(JSON.stringify(baudelaire));

const works = {
    ...baudelaire.works
}

b1.occupation[2] = 'Thinker'; // connected
b1.mistress = 'Miss Duval'; // disconnected
b1.born = 'Early 19th Century'; // disconnected
b1.died = 'Late 19th Century'; // disconnected
b1.drugs = 'Some'; // disconnected
b1.works.poetry = 'Spleen'; // connected


b2.occupation[0] = 'Writer'; // connected
b2.mistress = 'None';  // disconnected
b2.born = 'Eighteen Twenty One'; // disconnected
b2.died = 'Eighteen Sixty Seven'; // disconnected
// b2.drugs = 'None'; // disconnected
b2.drugs[0] = 'Alcohol'; // connected
b2.works.poetry = 'The Albatross'; // connected

b1.occupation = 'None'; // disconnected
b1.works.poetry = 'The Flowers of Evil'; // connected

works.poetry = 'Evil Flowers'; // disconnected
works.translations['Edgar Allen Poe'][0] = 'REMOVED'; // connected
// works.translations = 'Poe'; // disconnected

console.log('\nb1',JSON.stringify(b1));
console.log('\nb2',JSON.stringify(b2));
console.log('\nb3',JSON.stringify(b3));
console.log('\nworks',JSON.stringify(works));

console.log('\nbaudelaire',JSON.stringify(baudelaire));


// NOTE: items of an array at the root of a shallow copy are reference values, however, the entire array value is not. eg.

const object = {
    array: ['element1', 'element2']
}

const objectShallowCopy = {
    ...object
}

objectShallowCopy.array[0] = 'ref val'// connected
console.log(JSON.stringify(object));
console.log(JSON.stringify(objectShallowCopy));

objectShallowCopy.array = 'prim val' // disconnected

console.log(JSON.stringify(object));
console.log(JSON.stringify(objectShallowCopy),'\n');

// Nested objects are the same

const tree = {
    branch: {
        nest: 'egg'
    }
}

const treeCopy = {
    ...tree
}

console.log(JSON.stringify(tree));
treeCopy.branch.nest = 'ref val'; // connected

console.log(JSON.stringify(tree));
console.log(JSON.stringify(treeCopy));
treeCopy.branch = 'prim val'; // disconnected
console.log(JSON.stringify(tree));
console.log(JSON.stringify(treeCopy));

const treeCopy2 = Object.assign({}, tree);
treeCopy2.branch.nest = 'back to egg'; // connected
console.log('\n');
console.log(JSON.stringify(tree));
console.log(JSON.stringify(treeCopy2));
treeCopy2.branch = 'prim val'; // disconnected
console.log(JSON.stringify(tree));
console.log(JSON.stringify(treeCopy2));
