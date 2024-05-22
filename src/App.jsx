import { useContext, useState } from 'react'
import { BookContext } from './context/bookContext'
import CardBook from './components/CardBook'
import ItemOfList from './components/ItemOfList'

function App() {
  const { booksList, listOfReading } = useContext(BookContext)
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <main className='container mx-auto px-4 py-12 flex flex-col items-center justify-center'>
      <header className='flex flex-row items-center justify-between w-full'>
        <div className='flex flex-col'>
          <h1>Lista de Lecturas</h1>
          <p className='text-slate-400'>
            Prueba tecnica de lectura de libros en una lista de lectura
          </p>
        </div>
        <div>
          <button
            onClick={handleOpen}
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
            {isOpen ? 'Cerrar' : 'Ver Lista'}
          </button>
        </div>
      </header>
      <div className='w-full flex flex-row mt-20 gap-x-12'>
        <section className={isOpen ? 'w-9/12' : 'w-full'}>
          <ul className='grid grid-cols-3 gap-4'>
            {booksList.map((book) => (
              <CardBook key={book.book.ISBN} book={book} />
            ))}
          </ul>
        </section>
        <aside
          className={`w-3/12 flex flex-col gap-7 ${isOpen ? 'block' : 'hidden'}`}>
          <h2>Lista de Lectura</h2>
          {listOfReading.length > 0 ? (
            listOfReading.map((book) => (
              <ItemOfList key={book.book.ISBN} book={book} />
            ))
          ) : (
            <p className='text-slate-400'>
              No hay libros en la lista de lectura
            </p>
          )}
        </aside>
      </div>
    </main>
  )
}

export default App
