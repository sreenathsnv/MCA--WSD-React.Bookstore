
import Book from "./book"

export default function Books({bookdata})
{
    return(
        <div className="window ">
            <div className="books">
                {
                   
                    bookdata.map(book=>{
                        return(
                            <Book key= {book.id} name={book.title} author={book.author} price={book.price}/>
                        )
                    })
                }
            </div>
        </div>
    )
}