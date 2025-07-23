const myLibrary = [
    // {
    //     title: 'dune',
    //     author: 'frank herbert'
    // },
    // {
    //     title: '1984',
    //     author: 'george orwell'
    // }
];


submitBookForm = document.addEventListener('submit', function(e) {
    title = document.getElementById('title');
    author = document.getElementById('author');
    read = document.getElementById('read')

    addBookToLibrary(title.value, author.value, read.checked);
    title.value = '';
    author.value = '';
     e.preventDefault();
})

function Book (title, author, isRead) {
    if(!new.target) {
        throw Error("You must use the 'new' operator to call the constructor")
    }

    randomPages = function getRandomPages () {
        return Math.random() * (20 - 1500) + 20;
    }

    this.title = title,
    this.author = author,
    this.isRead = isRead,
    this.id = crypto.randomUUID,
    this.pages = randomPages.value
    // this doesn't work. try adding the randomPages function to the addBookToLibrary function
}

// constructor test
// const book1 = new Book ('lord of the rings', 'J.RR')
// book1.isRead()


function addBookToLibrary (title, author, isRead) {
    const newBook = new Book(title, author, isRead)
    myLibrary.push(newBook);
    renderLibrary();
    console.log(myLibrary)
}

// addBookToLibraryTest
// addBookToLibrary('dune','frank herbert')
// addBookToLibrary('1984','George Orwell')


function renderLibrary () {
    const bookDisplay = document.querySelector('.book-display');
    myLibrary.forEach(function(book) {
        const createBook = document.createElement('div');
        createBook.classList.add('book');
        createBook.textContent = `${book.title} authored by ${book.author} The book is ${book.isRead} it has is ${book.pages}`
        bookDisplay.appendChild(createBook)
    })
}

// renderLibrary test (comment out all other functions and leave array)
// renderLibrary()