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
        book.classList.add(classNames.favorite);
        const targetBook = book.getAttribute('data-id');
        favoriteBooks.push(targetBook);

        console.log(favoriteBooks);
      });
    }
  }

  render();
  initActions();
}