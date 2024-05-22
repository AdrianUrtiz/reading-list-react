import { createContext } from 'react'
import { useBooks } from '../hooks/useBooks'

export const BookContext = createContext({
  booksList: [],
  listOfReading: [],
  addBookToList: () => {},
  removeBookFromList: () => {},
})

export function BookProvider({ children }) {
  const { booksList, listOfReading, addBookToList, removeBookFromList } =
    useBooks()

  return (
    <BookContext.Provider
      value={{
        booksList,
        listOfReading,
        addBookToList,
        removeBookFromList,
      }}>
      {children}
    </BookContext.Provider>
  )
}
