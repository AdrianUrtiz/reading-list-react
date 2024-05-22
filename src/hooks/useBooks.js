import { useState, useEffect } from 'react'
import { library as books } from '../../public/books.json'

export function useBooks() {
  const [booksList, setBooksList] = useState(books)
  const [listOfReading, setListOfReading] = useState(
    JSON.parse(localStorage.getItem('listOfReading')) || []
  )

  useEffect(() => {
    const syncLocalStorageWithState = (e) => {
      if (e.key === 'listOfReading') {
        setListOfReading(JSON.parse(e.newValue))
      }
    }

    window.addEventListener('storage', syncLocalStorageWithState)

    return () => {
      window.removeEventListener('storage', syncLocalStorageWithState)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('listOfReading', JSON.stringify(listOfReading))
  }, [listOfReading])

  function addBookToList(ISBN) {
    const book = booksList.find((book) => book.book.ISBN === ISBN)
    if (book) {
      setBooksList((prev) => prev.filter((book) => book.book.ISBN !== ISBN))
      setListOfReading((prev) => [...prev, book])
    }
  }

  function removeBookFromList(ISBN) {
    setListOfReading((prev) => prev.filter((book) => book.book.ISBN !== ISBN))
    const book = books.find((book) => book.book.ISBN === ISBN)
    if (book) {
      setBooksList((prev) => prev.concat(book))
    }
  }

  return {
    booksList,
    listOfReading,
    addBookToList,
    removeBookFromList,
  }
}
