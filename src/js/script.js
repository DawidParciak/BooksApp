{
  'use strict';

  const select = {
    templateOf: {
      book: '#template-book',
    },
    containerOf: {
      list: '.books-list',
    },
    book: {
      image: '.book__image',
    }
  };

  const templates = {
    book: Handlebars.compile(document.querySelector(select.templateOf.book).innerHTML),
  };

  const classNames = {
    favorite: 'favorite',
  };

  function render(){
    for(let book of dataSource.books){
      const generatedHTML = templates.book(book);

      const DOMElement = utils.createDOMFromHTML(generatedHTML);

      const bookListElement = document.querySelector(select.containerOf.list);

      bookListElement.appendChild(DOMElement);
    }
  }

  const favoriteBooks = [];

  function initActions(){
    const books = document.querySelectorAll(select.book.image);

    for(let book of books){
      book.addEventListener('dblclick', function(event){
        event.preventDefault();
          
        const clickedBook = event.target;
        const clickedBookParent = clickedBook.offsetParent;

        const bookId = clickedBookParent.getAttribute('data-id');

        if(!favoriteBooks.includes(bookId)){
          clickedBookParent.classList.add(classNames.favorite);
          favoriteBooks.push(bookId);

        } else {
          clickedBookParent.classList.remove(classNames.favorite);
          favoriteBooks.splice(favoriteBooks.indexOf(bookId), 1);
        }

        console.log(favoriteBooks);
      });
    }
  }

  render();
  initActions();
}