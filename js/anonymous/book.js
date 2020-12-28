// constructor 构造函数
function Book(isbn,title,author){
    this.isbn = isbn;
    this.title = title;
    this.author = author;
  }
let theHabbit = new Book("0-395-07122-4","The Habbit","J.R.R.Tolkien");
console.log(theHabbit.isbn);