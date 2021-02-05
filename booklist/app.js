//Book Constructor
function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

//UI constructor
function UI(){}

//Add book to list
UI.prototype.addBookToList = function(book){
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

//UI show alert
UI.prototype.showAlert = function(message, className){
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

//Delete book
UI.prototype.deleteBook = function(target){
    if(target.className = 'delete'){
        target.parentElement.parentElement.remove();
    }
}

//UI clear fields
UI.prototype.clearFields = function(){
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
}

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

        ui.showAlert('Book Added!', 'success');

        //Clear fields
        ui.clearFields();

    }

    e.preventDefault();
})

//Event listener for add book
document.getElementById('book-list').addEventListener('click',
function(e){
    //Instantiate the target
    const ui = new UI();

    ui.deleteBook(e.target);

    //Show alert
    ui.showAlert('Book Deleted','success');

    e.preventDefault();
})