

export default function ReviewForm({review,setformData,formdata,setVisb})
{

    

    return(
        <>
            <form style ={{margin:".5vh "}}>
            <input type="text" placeholder="Write a Review" 
            value={formdata}
            onChange={(e)=>{setformData(e.target.value);}}
            style ={{margin:".5vh ",height: "10vh",paddingLeft:"5vh"}}/>
            <button className="btn btn-outline-secondary" style ={{margin:".5vh "}} onClick={(e)=>
            {
                e.preventDefault()
                review();
                setVisb(false)

                }}>Add</button>
        </form>
        </>
    )
}