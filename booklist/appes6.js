class Book{
    constructor(title, author, isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class UI{
    addBookToList(book){
        const list = document.getElementById('book-list');
        //Create tr
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class='delete'>X</a></td>
        `;
        list.appendChild(row);

    }

    showAlert(message, className){
        //Create div alert with message and class
        const div = document.createElement('div');
        div.className = `alert ${className}`;
        div.appendChild(document.createTextNode(message));
        //Get parent and insert before the form
        const container = document.querySelector('.container');
        const form = document.querySelector('#book-form');
        container.insertBefore(div, form);
        //Set timeout
        setTimeout(function(){
            document.querySelector('.alert').remove();},
            3000
        );

    }

    deleteBook(target){
        if(target.className = 'delete'){
            target.parentElement.parentElement.remove();
        }

    }

    clearFields(){
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';

    }
}

//Local Storage class
class Store{
    static getBooks(){
        let books;
        if(localStorage.getItem('books') === null) {
            books = [];
        }else{
            books = JSON.parse(localStorage.getItem('books'));
        }
        return books;
    }
    static displayBooks(){
        const books = Store.getBooks();
        //Add to list
        books.forEach(function(book){
            const ui = new UI();
            ui.addBookToList(book);
        })

    }
    static addBook(book){
        const books = Store.getBooks();
        books.push(book);
        localStorage.setItem('books', JSON.stringify(books));

    }
    static removeBook(isbn){
        const books = Store.getBooks();
        //remove from list
        books.forEach(function(book, index){
            if(book.isbn === isbn){
                books.splice(index, 1);
            }
        })

        //Update LS
        localStorage.setItem('books',JSON.stringify(books));

    }
}

//DOM Load Lisener
document.addEventListener('DOMContentLoaded', Store.displayBooks);

//Event Listener for add book
document.getElementById('book-form').addEventListener('submit',
function(e){
    //get values
    const   title =   document.getElementById('title').value,
            author = document.getElementById('author').value,
            isbn = document.getElementById('isbn').value

    //Instantiate a book
    const book = new Book(title, author, isbn);

    //Instantiate UI
    const ui = new UI();

    //Validate
    if(title === '' || author === '' || isbn === ''){
        //Error message
        ui.showAlert('Please fill all forms', 'error');

    } else {
        //Add book to list
        ui.addBookToList(book);

        //Add to LS
        Store.addBook(book); // this is static and don't need instatiate

        ui.showAlert('Book Added!', 'success');

        //Clear fields
        ui.clearFields();

    }

    e.preventDefault();
})

//Event listener for delete book
document.getElementById('book-list').addEventListener('click',
function(e){
    //Instantiate the target
    const ui = new UI();
    //Delete
    ui.deleteBook(e.target);

    //Remove from LS
    Store.removeBook(e.target.parentElement.previousElementSibling.textContent);

    //Show alert
    ui.showAlert('Book Deleted','success');

    e.preventDefault();
})