const myLibrary = [];

function Book(title,author,pages,read) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read
    this.id = window.crypto.randomUUID();
}

// without crypto.randomUUID()
/*
function addBookToLibrary(title,author,id,pages,read) {
    myLibrary.push(new Book(title,author,id,pages,read))
}

addBookToLibrary("Chozi La Heri,Asumpta K.Matei",67,98,true)

console.log(myLibrary);
console.log("My name is Michelle")
*/

function addBookToLibrary(title,author,pages,read) {
    myLibrary.push(new Book(title,author,pages,read));
}

addBookToLibrary("Chozi La Heri","Asumpta K.Matei",98,true)

console.log(myLibrary);
console.log("My name is Michelle")