//var titles = document.getElementsByClassName('title');

//console.log(Array.isArray(titles));
//console.log(Array.isArray(Array.from(titles)));

//Array.from(titles).forEach(function(item){
//    console.log(item);
//})

//const wmf = document.querySelector('#book-list li:nth-child(2) .name');
//console.log(wmf);

//var books = document.querySelector('#book-list li .name')
//console.log(books);


//books = document.querySelectorAll('#book-list li .name')
//console.log(books);

//Array.from(books).forEach(function(book){
//    console.log(book);
//})

//var books = document.querySelectorAll('#book-list li .name');

//Array.from(books).forEach(function(book){
//    book.textContent += '(book title)';
//})

//const bookList = document.querySelector('#book-list')
//bookList.innerHTML = '<h2>Books and more books...</h2>';
//bookList.innerHTML += '<p>This is how you add HTML</p>';

//const banner = document.querySelector('#page-banner');

//console.log('#page-banner node type is:', banner.nodeType);
//console.log('#page-banner node name is:', banner.nodeName);
//console.log('#page-banner has child nodes is:', banner.hasChildNodes())


//const clonedBanner = banner.cloneNode(true);
//console.log(clonedBanner);

//const bookList = document.querySelector('#book-list');

//console.log('#the parent node is;',bookList.parentNode);
//console.log('#the parent element is;',bookList.parentElement.parentElement);

//console.log(bookList.children);

//const bookList = document.querySelector('#book-list');

//console.log('#book-list next sibling is:',bookList.nextSibling);
//console.log('#book-list next element sibling is:',bookList.nextElementSibling);

//console.log('#book-list previous sibling is:',bookList.previousSibling);
//console.log('#book-list previous element sibling is:',bookList.previousElementSibling);

//bookList.previousElementSibling.querySelector('p').innerHTMP += '<br />Too cool for everyone else!:';

//const link = document.querySelector('#page-banner a');

//link.addEventListener('click',function(e){
//    e.preventDefault();
//    console.log('navigate to', e.target.textContent, 'was prevented');
//})


//const listItems = document.querySelectorAll('#book-list ul li');

//var btns = document.querySelectorAll('#book-list.delete');

//Array.from(listItems).forEach(function(item){
//    item.addEventListener('click', (e) => {
//  
//      const li = e.target.parentElement;
//     console.log('child element to remove:', li);
//      console.log('parent element to remove child from:', li.parentElement);
//      li.parentNode.removeChild(li);
  
//    });
//});

const list = document.querySelector('#book-list ul');
//delete books
list.addEventListener('click',function(e){
    if(e.target.className == 'delete'){
        const li = e.target.parentElement;
        list.removeChild(li);
    }
})