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

function showCollection (collection) {
    console.log(collection.length + ' songs in this collection.');

    for (let i = 0; i < collection.length; i++) {
        console.log(collection[i].title + ' by ' + collection[i].artist + ', published in ' + collection[i].yearPublished );
    }
}

showCollection(collection);

function findByArtist (artist) {

    let matchingArtists = collection.filter(element => element.artist === artist);

    if (matchingArtists.length === 0) {
        console.log("Artist not found in collection");
    }

    return matchingArtists;


}

console.log(findByArtist('Steve Monite'));
console.log(findByArtist('King Krule'));
console.log(findByArtist('Drake'));

function search (artist, year) {
    let searchResults = collection.filter(element => element.artist === artist && element.yearPublished == year);

    if (artist == null || year == null) {
        console.log(collection);
    } else if (searchResults.length === 0) {
        console.log("Not found");
    } else {
        return searchResults;
    }


}

console.log(search('King Krule', 2013));

console.log(search());

