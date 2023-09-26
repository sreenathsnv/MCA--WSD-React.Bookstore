import { useState } from 'react'

import Nav from './navigation'
import Home from './home'
import Books from './books'

function App() {
  
  const [books,setBooks] = useState([])

 async function fetchBooks(){

    try{

      const data = await fetch('./src/books.json')
      const books = await data.json()
      setBooks(books)
    }
    catch(error){
      console.log('error')
    }
  }

  fetchBooks()

  return (
    <>
      <h1>Online Bookstore</h1>
      <Nav/>
      
    </>
  )
}

export default App
