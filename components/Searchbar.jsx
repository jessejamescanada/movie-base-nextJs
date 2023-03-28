'use client'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

function SearchBar() {
  const [search, setSearch] = useState('')
  const [error, setError] = useState(false)
  const router = useRouter()

  const handleSearch = async (e) => {
    e.preventDefault()
    if (search === '') {
      setError(true)
      setTimeout(() => {
        setError(false)
      }, 2000)
    } else {
      setSearch('')
      router.push(`/search/${search}`)
    }
  }

  return (
    <>
      <form
        onSubmit={handleSearch}
        className='flex flex-col sm:flex-row  w-full mx-auto items-center justify-center my-2'
      >
        <input
          type='text'
          value={search}
          placeholder='Search for a movie...'
          onChange={(e) => setSearch(e.target.value)}
          className='text-black w-[90%] sm:w-1/4 p-2 rounded sm:mr-2'
        />
        <button
          type='submit'
          className='btn bg-blue-500 text-white font-bold py-2 px-6 rounded-lg mt-2 sm:mt-0 '
        >
          Search
        </button>
      </form>
      {error ? (
        <p className='text-red-500 font-semibold text-center'>
          Please enter something
        </p>
      ) : (
        ''
      )}
    </>
  )
}
export default SearchBar
