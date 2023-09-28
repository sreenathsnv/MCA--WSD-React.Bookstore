import { useEffect, useState } from "react"
import Book from "./book"

export default function Books({bookdata})
{
  const [reviewData,setReviewdata] = useState([])
  const [formData,setformData] = useState('')

  
  function addReview(bookId){
   
            if(reviewData.bookId)
            {
                alert('done')
            }
        
        
        const review = {id:bookId,review:formData}
           
        const newReviewlis = [...reviewData,review]
         
        setReviewdata(newReviewlis)
    }           
    function getReview(bookId)
    {
        const bookReview = reviewData.find((review) => review.id === bookId);
            if(bookReview)
            {
                
                return <p>{bookReview.review}</p>
            }
        return <p>Add a review</p>
        }
        
    useEffect(()=>addReview(0),[])
    return(
        <div className="window ">
            <div className="books">
                {
                   
                    bookdata.map(book=>{
                        let id = book.id
                        return(
                            <Book key= {book.id} name={book.title} author={book.author} 
                            price={book.price} 
                            review={()=>{
    
                                            addReview(book.id)
                                            setformData('')}}
                            setformData ={setformData} 
                            formData = {formData}
                            getReview = {()=>{return getReview(book.id)}}/>
                        )
                    })
                }
            </div>
        </div>
    )
}

