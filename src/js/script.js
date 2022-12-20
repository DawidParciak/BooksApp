{
  'use strict';

  const select = {
    templateOf: {
      book: '#template-book',
    },
    containerOf: {
      list: '.books-list',
      filters: '.filters',
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

  const favoriteBooks = [];
  const filters = [];

  function render(){
    for(let book of dataSource.books){
      const generatedHTML = templates.book(book);

      const DOMElement = utils.createDOMFromHTML(generatedHTML);

      const bookListElement = document.querySelector(select.containerOf.list);

      bookListElement.appendChild(DOMElement);
    }
  }

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

    const form = document.querySelector(select.containerOf.filters);

    form.addEventListener('click', function(event){
      const filter = event.target;

      if (
        filter.tagName == 'INPUT' &&
        filter.type == 'checkbox' &&
        filter.name == 'filter'
      ) {
        let filterValue = filter.value;
        console.log('filterValue:', filterValue);

        if ( 
          filter.checked == true
        ) {
          filters.push(filterValue);
        } else {
          filters.splice(filters.indexOf(filterValue), 1);
        }

        console.log('filters:', filters);
      }
    });
  }

  render();
  initActions();
}