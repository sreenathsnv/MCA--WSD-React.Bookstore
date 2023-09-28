

export default function Book({name,author,price,review})
{
    return(
        <>
           <div class="book">
                
                <p class="bookname">{name}</p>
                <p class="book-author">{author}</p>
                <div class="review">
                    {/* <h2>Review</h2>
                    {
                        review.map(item=>{return(<><p>{item}</p></>)})
                    } */}
                </div>
                
                <div class="btns">
                    <button type="button" class="btn btn-warning price">Buy {`${price}💲`}</button>
                    <button class="btn btn-outline-primary review-btn">Review</button>
                </div>
            </div>
        </>
        
    )
}