import { useEffect, useState } from 'react'

import Nav from './navigation'
import Books from './books'






function App() {
  
  const [books,setBooks] = useState([])

  const [book,setBook] = useState('')
  async function fetchBooks(){

    try{
  
      const data = await fetch('/books.json')
      const books = await data.json()
      setBooks(books)
    }
    catch(error){
      console.log(error)
    }
  }
  useEffect(()=>{
    fetchBooks()
  },[])
  return (
    <>
      <h1>Online Bookstore</h1>
      <Nav/>
      <Books bookdata= {books}/>

    </>
  )
}

export default App
