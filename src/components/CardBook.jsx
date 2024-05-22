import { BookContext } from '../context/bookContext'
import { useContext } from 'react'

function CardBook({ book }) {
  const { addBookToList } = useContext(BookContext)
  return (
    <li
      key={book.book.ISBN}
      className='bg-slate-800 text-white rounded-lg p-4 shadow-lg'>
      <img
        src={book.book.cover}
        alt={book.book.title}
        className='w-full h-64 object-cover rounded-t-lg'
      />
      <div className='flex flex-col mt-4'>
        <h2 className='text-xl font-bold'>{book.book.title}</h2>
        <p className='text-slate-400 mt-2'>{book.book.synopsis}</p>
        <div className='mt-4'>
          <button
            onClick={() => addBookToList(book.book.ISBN)}
            className='bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded'>
            Añadir
          </button>
        </div>
      </div>
    </li>
  )
}

export default CardBook
