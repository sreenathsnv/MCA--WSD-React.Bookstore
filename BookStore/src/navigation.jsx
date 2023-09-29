
import Home from "./home"
import Books from "./books"
export default function Nav({search,setSearch,books,setBooks,updatedList,setUpdatedlist})
{

    function searchbtn()
    {
       if(search !== '')
       {
        const updatedLis = books.filter((book)=>{
            if(book.title === search || book.author == search)
            {
                return book
            }
           })
           const newList = [...updatedLis,updatedList]
           setUpdatedlist(newList)
           console.log(updatedList)
           
       }
       else{
        alert('Enter the subject')
       }
       setSearch('')
    }
    return(
        <>
        <nav>
            <div className="logo">
                <img src="https://cdn.pixabay.com/photo/2023/07/17/05/55/bee-8131890_1280.png" alt=""/>
            </div>
            <div className="btns">
                <div className="search-area">
                    <input className="form-control" 
                    value={search}
                    onChange={(e)=>{setSearch(e.target.value)}}
                    type="search" placeholder="Search" aria-label="Search"/>
                    <button type="button" className="btn  btn-sm btn-outline-success" onClick={searchbtn}>Search</button>
                </div>
            </div>
    </nav>
    <h2 style = {{marginTop:"10vh",marginLeft:'40vw'}}>Search Results</h2>
    <Books bookdata={updatedList}/>
        </>
    )
}