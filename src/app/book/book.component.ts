import { Component } from '@angular/core';
import { BookModel } from '../models/book.model';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
  n_bookTitle: string = '';
  n_author: string = '';
  books: BookModel[]=[]

  AddBook(){
    console.log("Book added:", this.n_bookTitle, this.n_author)
    let newBook: BookModel={
      id: Date.now(),
      title: this.n_bookTitle,
      author: this.n_author
    }

    this.books.push(newBook)
    this.n_bookTitle="";
    this.n_author="";

    localStorage.setItem("books",JSON.stringify(this.books))
  }

  DeleteBook(bookId: number){
    const index = this.books.findIndex(b=>b.id===bookId);

    if(index !== -1){
      this.books.splice(index,1)
      localStorage.setItem("books",JSON.stringify(this.books))
    }    
  }
}
