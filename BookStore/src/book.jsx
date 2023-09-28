import { useState } from "react"
import ReviewForm from "./reviewForm"

export default function Book({name,author,price,review,setformData,formData,getReview})
{
    const[isVisb,setVisb] = useState(false)
    function canReview(){


        isVisb? setVisb(false):setVisb(true)
    }

    
    return(
        <>
           <div className="book">
                
                <p className="bookname">{name}</p>
                <p className="book-author">{author}</p>
                
                <div className="review">
                    <h2>Review</h2>
                        {getReview()}
                </div>
                <div className="btns">
                    <button type="button" className="btn btn-warning price">Buy {`${price}💲`}</button>
                    <button className="btn btn-outline-primary review-btn" onClick={canReview}>Review</button>
                </div>
            </div>
            {isVisb && <ReviewForm review ={review} 
            setformData = {setformData}
            formdata={formData}
            setVisb = {setVisb}
            />}
        </>
        
    )
}