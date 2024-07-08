var library = [ 
    {
        title: 'The Road Ahead',
        author: 'Bill Gates',
        readingStatus: true
    },
    {
        title: 'Steve Jobs',
        author: 'Walter Isaacson',
        readingStatus: true
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        readingStatus: false
    }
];

library.forEach(book => {
    if(book.readingStatus==false){
    console.log("You Still Need to Read "+book.title+" by "+book.author);
    }
    else
    {
    console.log("Already Read "+book.title+" by "+book.author);
    }
});