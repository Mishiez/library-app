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
        const remBtn = document.createElement('button');

        tdTitle.textContent = book.title;
        tdAuthor.textContent = book.author;   
        tdPages.textContent = book.pages;  
        tdRead.textContent = book.read;   
        tdId.textContent = book.id;  
        remBtn.textContent = 'Remove';
        
        newRow.appendChild(tdTitle);
        newRow.appendChild(tdAuthor);
        newRow.appendChild(tdPages);
        newRow.appendChild(tdRead);
        newRow.appendChild(tdId);
        newRow.appendChild(remBtn);
        newTable.appendChild(newRow);

        remBtn.onclick = remBook;
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

function addingBookForm(){
    //form and add new links function 

    let zoneForm = document.createElement("div");

    let addNewBookButton = document.createElement("button");
    addNewBookButton.textContent = "Add new Book";
    addNewBookButton.style.borderRadius = "5px";
    addNewBookButton.style.padding = "3px";

    let form = document.createElement("form");
    form.id = "newBookForm";
    form.style.width = "100%";

    let title = document.createElement("input");
    title.placeholder = "Enter the title of the book:";
    title.style.marginLeft = "40px";
    title.style.width = "18%";
    title.id = "title";
    title.setAttribute('type', "text");
    title.setAttribute('name', "title");

    let author = document.createElement("input");
    author.placeholder = "Enter the author of the book:";
    author.id = "author";
    author.setAttribute('type', "text");
    author.setAttribute('name', "author");


    let pages = document.createElement("input");
    pages.placeholder = "Enter the number of pages for the book:";
    pages.style.marginLeft = "40px";
    pages.style.width = "18%";
    pages.id = "pages";
    pages.setAttribute('type', "number");
    pages.setAttribute('name', "pages");


    let read = document.createElement("input");
    read.placeholder = "Have you read the book?";
    read.style.marginLeft = "40px";
    read.style.width = "18%";
    read.id = "read";
    read.setAttribute('type', "text");
    read.setAttribute('name', "read");

    let submitButton = document.createElement("input");
    submitButton.style.marginLeft = "40px";
    submitButton.style.borderRadius = "5px";
    submitButton.style.width = "7%";
    submitButton.style.padding = "3px";
    submitButton.setAttribute('type', "button");
    submitButton.setAttribute('value', "submit");


    form.appendChild(author);
    form.appendChild(title);
    form.appendChild(pages);
    form.appendChild(read);
    form.appendChild(submitButton);
    zoneForm.appendChild(addNewBookButton);




    addNewBookButton.addEventListener("click", function() {
        if (addNewBookButton) {
            addNewBookButton.style.display = 'none';
            form.style.display = 'inline-block';
            zoneForm.appendChild(form);
        } else {
            document.getElementById("nouveauLien").style.display = "none";
        }
    });


    submitButton.addEventListener("click", function() {
        let message = document.createElement("p");
        message.textContent = "link already added! ";
        let message2 = "Try again";
    
        let newObject = {
        title: document.getElementById('title').value,
        author: document.getElementById('author').value,
        pages: document.getElementById('pages').value,
        read: document.getElementById('read').value,
        id : window.crypto.randomUUID()
        };
        
        myLibrary.push(newObject);
        displayBook(
            (newObject)
        );
        
    
        if (submitButton) {
        form.style.display = 'none';
        addNewBookButton.style.display = 'block';
        document.getElementById("nouveauLien").style.display = "none";
        return message;
        } else {
        return message2;
        }
    
    });

    document.getElementById("content").appendChild(zoneForm);
}

addingBookForm();

function remBook(){
    document.addEventListener("click",(e)=>{
        const element = e.target;
        element.remove();
    });
}