

export default function Book({url,name,author,price,review})
{
    return(
        <>
            <div className="book">
                <img src="https://images.pexels.com/photos/1516983/pexels-photo-1516983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
                <p className="bookname">Lorem ipsum dolor sit.</p>
                <p className="book-author">Lorem, ipsum dolor</p>
                <p className="category">Lorem, ipsum.</p>
                
                <div className="btns">
                    <button type="button" className="btn btn-warning price">Buy</button>
                    <button className="btn btn-outline-primary review">Review</button>
                </div>
            </div>
        </>
        
    )
}