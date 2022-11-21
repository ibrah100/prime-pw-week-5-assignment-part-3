console.log('***** Music Collection *****')

let collection = [];

function addToCollection (title, artist, yearPublished) {
    let song = { title: title, artist: artist, yearPublished: yearPublished };
    collection.push(song);
    return song;
}

console.log(addToCollection('Welcome My Love', 'Steve Monite', 1984));
console.log(addToCollection('Out Getting Ribs', 'King Krule', 2013));
console.log(addToCollection('Andretti', '454', 2021));
console.log(addToCollection('Misty', 'Errol Garner', 1954));
console.log(addToCollection('Are You Leaving For The Country', 'Karen Dalton', 1971));
console.log(addToCollection('One Beer', 'MF DOOM', 2004));
console.log('This is my collection: ', collection);