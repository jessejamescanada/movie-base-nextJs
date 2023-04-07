'use client'
import { useState } from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import toast from 'react-hot-toast'
import { HiOutlineMinusCircle, HiOutlinePlusCircle } from 'react-icons/hi'
import { useUser } from '@clerk/nextjs'
import Link from 'next/link'

const WatchLater = ({ movie }) => {
  const [userExists, setUserExists] = useState(true)
  // get user
  const queryClient = useQueryClient()
  const { user } = useUser()

  // add movie
  const { mutate } = useMutation(
    async (movie) => await axios.post('/api/favs/movies', { movie }),
    {
      onError: (error) => {
        console.log('CHEWY' + error)
        toast.error('Error adding to your watch list')
      },
      onSuccess: (data) => {
        console.log(data)
        toast.success('Movie added to your watch list!')
      },
    }
  )

  const addMovie = () => {
    if (user === null) {
      setUserExists(false)
    } else {
      mutate(movie)
      setUserExists(true)
    }
  }

  // delete movie
  const deleteMovie = useMutation(
    async (movie) =>
      await axios.delete('/api/favs/deleteMovie', { data: movie }),
    {
      onError: (error) => {
        console.log('Error deleting movie')
        toast.error('Error deleting movie')
      },
      onSuccess: (data) => {
        console.log('MOVIE DELETED' + data)
        toast.success('Movie Deleted')
        queryClient.invalidateQueries(['favorites'])
      },
    }
  )

  const deleteFav = () => {
    if (user === null) {
      return
    } else {
      deleteMovie.mutate(movie)
    }
  }
  const toggleButton = () => {
    setUserExists(true)
  }
  return (
    <div className='flex  items-center justify-between my-2'>
      {!userExists ? (
        <div
          onClick={() => setUserExists(true)}
          className='fixed bg-black/50 w-full h-full z-20 top-0 left-0'
        >
          <div className='absolute bg-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-12 rounded-lg flex flex-col gap-6'>
            <h2 className='text-gray-700'>
              Ooops! You must be logged in to add movie to your watchlist
            </h2>
            <div className='flex w-full justify-between'>
              <Link href={'/sign-in'}>
                <button className='font-semibold bg-teal-600 text-sm text-white py-2 px-4 rounded-md'>
                  Sign In
                </button>
              </Link>
              <button
                onClick={toggleButton}
                className='font-semibold bg-red-600 text-sm text-white py-2 px-4 rounded-md'
              >
                Back to browsing
              </button>
            </div>
          </div>
        </div>
      ) : (
        ''
      )}
      <button
        onClick={() => addMovie()}
        className='flex items-center text-lg  justify-center font-semibold'
      >
        <HiOutlinePlusCircle className='mr-1 text-xl text-green-500' />{' '}
        Watchlist
      </button>
      <button
        onClick={() => deleteFav()}
        className='flex items-center text-lg justify-center font-semibold'
      >
        <HiOutlineMinusCircle className='mr-1 text-xl text-red-500' /> Watchlist{' '}
      </button>
      {/* <AddFav movie={movie} /> */}
    </div>
  )
}

export default WatchLater
