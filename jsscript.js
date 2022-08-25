
let myLibrary = [];
newbook = document.getElementById("newbook");
cardscontainer = document.getElementById("cardscontainer");
newbookcontainer = document.getElementById('newbookcontainer');


class Book {
    constructor(title, author, pages, status)  {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
}}


class displayLibrary {

    constructor() {}

    createCard () {

    for (var x=0; x < myLibrary.length; ++x) {


    let card = document.createElement("div");
    card.setAttribute('id', `${x}`);
    card.setAttribute('class', 'card');

    let cardx = document.getElementById(`${x}`)
    
    let cardtitle = document.createElement('div');
    cardtitle.textContent = `Title: ${myLibrary[x].title}`;

    let cardauthor = document.createElement('div');
    cardauthor.textContent = `Author: ${myLibrary[x].author}`;

    let cardpages = document.createElement('div');
    cardpages.textContent = `Pages: ${myLibrary[x].pages}`;

    let deletebutton = document.createElement('button');
    deletebutton.setAttribute('type', 'button');
    deletebutton.textContent = 'Remove';

    let readswitch = document.createElement('button');
    readswitch.setAttribute('type', 'button');
    readswitch.textContent = `${myLibrary[x].status}`;

    if (document.body.contains(cardx) == false) {

    card.appendChild(cardtitle);
    card.appendChild(cardauthor);
    card.appendChild(cardpages);
    card.appendChild(readswitch); 
    card.appendChild(deletebutton);
    cardscontainer.appendChild(card);

    }
    deletebutton.addEventListener('click', (e) => {
        let deletex = Number(e.target.parentNode.id)
        myLibrary.splice(deletex, 1);
        e.target.parentNode.remove() })

    readswitch.addEventListener('click', (e) => {
        if (e.target.textContent == 'Read') {
            e.target.textContent = 'Unread'}

        else  {
            e.target.textContent = 'Read'}
        })
        
    }}}




class addbook {
    constructor() {}

    newform() {

    if (!document.forms[0]) {

    let bookformcontainer = document.createElement('div');
    let bookform = document.createElement('form');
    bookform.setAttribute('action', '');
    bookform.setAttribute('method', '');
    bookform.setAttribute('id', 'bookform');

    let titlecontainer = document.createElement('div');
    let formtitle = document.createElement('input');
    formtitle.setAttribute('type', 'text');
    formtitle.setAttribute('id', 'formtitle');
    formtitle.setAttribute('required', '');
    let titlelabel = document.createElement('label');
    titlelabel.setAttribute('for', 'formtitle');
    titlelabel.textContent = 'Title: ';
    

    let authorcontainer = document.createElement('div');
    let formauthor = document.createElement('input');
    formauthor.setAttribute('type', 'text');
    formauthor.setAttribute('id', 'formauthor');
    formauthor.setAttribute('required', '');
    let authorlabel = document.createElement('label');
    authorlabel.setAttribute('for', 'formauthor');
    authorlabel.textContent = 'Author: ';
    

    let pagescontainer = document.createElement('div');
    let formpages = document.createElement('input');
    formpages.setAttribute('type', 'number');
    formpages.setAttribute('id', 'formpages');
    formpages.setAttribute('required', '');
    let pageslabel = document.createElement('label');
    pageslabel.setAttribute('for', 'formapages');
    pageslabel.textContent = 'Pages: ';
    

    let statuscontainer = document.createElement('div');
    let formstatus = document.createElement('input');
    formstatus.setAttribute('type', 'checkbox');
    formstatus.setAttribute('id', 'formstatus');
    let statuslabel = document.createElement('label');
    statuslabel.setAttribute('for', 'formstatus');
    statuslabel.textContent = 'Read book: ';
    

    let submitcontainer = document.createElement('div');
    let formsubmit = document.createElement('button');
    formsubmit.textContent ='Submit';
    formsubmit.setAttribute('type', 'submit');
    formsubmit.setAttribute('id', 'formsubmit');

  
    titlecontainer.appendChild(formtitle);
    authorcontainer.appendChild(formauthor);
    pagescontainer.appendChild(formpages);
    statuscontainer.appendChild(formstatus);
    titlecontainer.appendChild(titlelabel);
    submitcontainer.appendChild(formsubmit);
    authorcontainer.appendChild(authorlabel);
    pagescontainer.appendChild(pageslabel);
    statuscontainer.appendChild(statuslabel);
    bookform.appendChild(titlecontainer);
    bookform.appendChild(authorcontainer);
    bookform.appendChild(pagescontainer);
    bookform.appendChild(statuscontainer);
    bookform.appendChild(formsubmit);
    bookformcontainer.appendChild(bookform);
    newbookcontainer.appendChild(bookformcontainer);


    


        formsubmit.addEventListener('click', (e) => {

            e.preventDefault();


            let readornot;

            if (formstatus.checked == true) {
                readornot = 'Read';
            }

            else {
                readornot = 'Unread';
            }

            if (bookform.reportValidity() == true) {

            let info = new Book(formtitle.value, formauthor.value, formpages.value, readornot);
            myLibrary.push(info);

            let display = new displayLibrary();
            display.createCard();

            bookform.reset();

            bookformcontainer.remove();

            }

    })

}}}


let addnew = new addbook();
newbook.addEventListener('click', () => {
    addnew.newform()
}, false);