import { useContext } from 'react'
import { BookContext } from '../context/bookContext'

function ItemOfList({ book }) {
  const { removeBookFromList } = useContext(BookContext)
  return (
    <li
      key={book.book.ISBN}
      className='bg-slate-800 flex flex-col text-white rounded-lg p-4 shadow-lg'>
      <img
        src={book.book.cover}
        alt={book.title}
        className='size-28 object-cover rounded-t-lg'
      />
      <div
        className='mt-2
                flex flex-col gap-2'>
        <h2 className='text-xl font-bold'>{book.book.title}</h2>
        <button
          className='bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 rounded'
          onClick={() => removeBookFromList(book.book.ISBN)}>
          Eliminar
        </button>
      </div>
    </li>
  )
}

export default ItemOfList
