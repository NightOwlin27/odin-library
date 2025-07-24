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
    page = document.getElementById('pages')

    addBookToLibrary(title.value, author.value, read.checked, page.value);
    title.value = '';
    author.value = '';
    page.value = '';
     e.preventDefault();
})

// toggleReadBtn = document.addEventListener('click', () => createBook.textContent = `You've Read This`)

function Book (title, author, isRead, page) {
    if(!new.target) {
        throw Error("You must use the 'new' operator to call the constructor")
    }
    
    this.title = title,
    this.author = author,
    this.isRead = isRead,
    this.id = crypto.randomUUID(),
    this.page = page
    // this.pages = pages
    // this doesn't work. try adding the randomPages function to the addBookToLibrary function
}

// constructor test
// const book1 = new Book ('lord of the rings', 'J.RR')
// book1.isRead()


function addBookToLibrary (title, author, isRead, page) {
    const newBook = new Book(title, author, isRead, page)
    myLibrary.push(newBook);
    renderLibrary();
    console.log(myLibrary)
}

// addBookToLibraryTest
// addBookToLibrary('dune','frank herbert')
// addBookToLibrary('1984','George Orwell')


function renderLibrary () {

    const bookDisplay = document.querySelector('.book-display');
    // if () {}
    myLibrary.forEach(function(book) {
        const createBook = document.createElement('div');
        const readButton = document.createElement('button')
        const removeButton = document.createElement('button');

        createBook.classList.add('book');
        createBook.textContent = `${book.title} Authored by ${book.author} ${book.page} pages`;

        readButton.classList.add('readBtn');
        readButton.textContent = `Read`;

        removeButton.classList.add('removeBtn');
        removeButton.textContent = `Remove Book`;

        bookDisplay.appendChild(createBook);
        createBook.appendChild(readButton);
        createBook.appendChild(removeButton);

        if (book.isRead.checked) {
            createBook.textContent = `You've Read This`;
        }

    })
}

// renderLibrary test (comment out all other functions and leave array)
// renderLibrary()