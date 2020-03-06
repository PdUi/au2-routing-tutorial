import { Book } from "./book";
import { BookService } from "./book-service";

export class BookDetails {
    /*
    this enables us to access id property on parameters in enter method without explicitly having to assign it that name in the view.
    */
    public static parameters: string[] = ['id'];

    public book: Book;

    public constructor(private bookService: BookService) {
    }

    public enter(parameters) {
        this.book = this.bookService.getBook(parameters.id);
        console.log(this.book);
    }
}
