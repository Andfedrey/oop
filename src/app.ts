interface Book {
  id: number,
  title: string,
  description: string,
  authors: string[],
  favorite: boolean,
  fileCover: string,
  fileName: string,
  fileBook: string
}

abstract class BooksRepository {

  library: Book[] = []

  createBook(book:Book){
    this.library.push(book)
  }

  getBook(){
    return this.library
  }

  updateBook(id: number): Book{
    for(let i = 0; i < this.library.length; i++) {
      if(this.library[i].id === id) {
        return this.library[i]
      }
    }
  }
  
  deleteBook(id: number): Book[] {
    return this.library = this.library.filter(el => el.id !== id)
  }
}

class Bibleo extends BooksRepository {
}

const book1: Book = {
  id: 1,
  title: "Мартин Иден",
  description: "то се",
  authors: ["Джек Лондон"],
  favorite: true,
  fileCover: "123.jpg",
  fileName: "1.pdf",
  fileBook: "123.pdf"
};

const book2: Book = {
  id: 2,
  title: "Мартин Иден 2",
  description: "5 10",
  authors: ["Джек Лондон"],
  favorite: true,
  fileCover: "123.jpg",
  fileName: "1.pdf",
  fileBook: "123.pdf"
};

const bible = new Bibleo()
bible.createBook(book1);
bible.createBook(book2);

console.log(bible.getBook());