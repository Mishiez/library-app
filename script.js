const myLibrary = [];
let display;

function Book(title,author,pages,read) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read
    this.id = window.crypto.randomUUID();
}

function addBookToLibrary(title,author,pages,read) {
    myLibrary.push(new Book(title,author,pages,read));
}

//addBookToLibrary("Chozi La Heri","Asumpta K.Matei",98,true)

//console.log(myLibrary);
console.log("My name is Michelle")

/*
function displayBook(){
    for(let i=0;i<myLibrary.length;i++){
        display = myLibrary[i];
        return console.log(display);
    }
}

displayBook(addBookToLibrary("Chozi La Heri","Asumpta K.Matei",98,true));
*/

function displayBook(){
    const newTable = document.createElement("table");
    newTable.innerHTML = "<thead><th>Title</th><th>Author</th><th>Pages</th><th>Read</th><th>Id</th></thead>";
    for(book of myLibrary){
        const newRow = document.createElement("tr");
        const tdTitle = document.createElement("td");
        const tdAuthor = document.createElement("td");
        const tdPages = document.createElement("td");
        const tdRead = document.createElement("td");
        const tdId = document.createElement("td");
        tdTitle.textContent = book.title;
        tdAuthor.textContent = book.author;   
        tdPages.textContent = book.pages;  
        tdRead.textContent = book.read;   
        tdId.textContent = book.id;   
        newRow.appendChild(tdTitle);
        newRow.appendChild(tdAuthor);
        newRow.appendChild(tdPages);
        newRow.appendChild(tdRead);
        newRow.appendChild(tdId);
        newTable.appendChild(newRow);
    }

    const target = document.getElementById('target');
    target.appendChild(newTable);
}



displayBook(
    (addBookToLibrary("Chozi La Heri","Asumpta K.Matei",98,true)),
    (addBookToLibrary("Jane Eyre","Charlotte Bronte",284,true)),
    (addBookToLibrary("The adventures of Tom Sawyer","SCott McKowen",222,false)),
    (addBookToLibrary("Game of Thrones","Hearly Bentley",547,true))
);