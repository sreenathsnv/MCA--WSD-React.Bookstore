
import Home from "./home"
export default function Nav()
{
    return(
        <>
        <nav>
            <div className="logo">
                <img src="https://cdn.pixabay.com/photo/2023/07/17/05/55/bee-8131890_1280.png" alt=""/>
            </div>
            <div className="btns">
                <button type="button" className="btn btn-sm btn-outline-secondary" onClick={()=>{return(<><Home/></>)}}  >Home</button>
                <button type="button" className="btn  btn-sm btn-outline-secondary">Books</button>
                <button type="button" className="btn  btn-sm btn-outline-secondary">About</button>
                <div className="search-area">
                    <input className="form-control" type="search" placeholder="Search" aria-label="Search"/>
                    <button type="button" className="btn  btn-sm btn-outline-success">Search</button>
                </div>
            </div>
    </nav>
        </>
    )
}