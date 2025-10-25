//https://onecompiler.com/javascript/44286te88

const library = {
  name:'',
  location:'',
  books:[{title: 'The Cruel Prince', author: 'Holly Black', available: true},
          {title: 'The Housemaid', author: 'Freida McFadden', available: false},
          {title: 'Normal People', author: 'Sally Rooney', available: true}
          ],
  findBook: function(title){
    for(let book of this.books){
      if(book.title===title){
        return book;
      }
    }
  }
};

console.log('Available books:');
for(let book of library.books){
  if(book.available){
    console.log(`${book.title} by ${book.author}`)
  }
}

const found = library.findBook('Normal People');
if(found){
  console.log('\nBook found:');
  console.log(found);
}else{
  console.log('\nBook not found');
}

