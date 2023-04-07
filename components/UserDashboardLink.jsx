'use client'
import Link from 'next/link'
import { UserButton, SignedOut, SignInButton, SignedIn } from '@clerk/nextjs'
import { useQueryClient } from '@tanstack/react-query'

const UserDashboardLink = ({ user }) => {
  // const queryClient = useQueryClient()
  // const reload = queryClient.invalidateQueries(['favorites'])
  console.log(user)
  return (
    <div className='flex flex-col lg:flex-row items-center justify-center'>
      {user ? (
        <Link
          href={'/dashboard'}
          className='mr-2 sm:mr-4'
        >
          <button
            // onClick={reload}
            className='bg-blue-500 py-2 px-4 rounded-xl font-semibold mb-4 lg:mb-0'
          >
            My Movies
          </button>
        </Link>
      ) : (
        ''
      )}

      <SignedIn>
        {/* Mount the UserButton component */}
        <UserButton afterSignOutUrl={'/'} />
      </SignedIn>
      <SignedOut>
        {/* Signed out users get sign in button */}
        <SignInButton className='bg-blue-500 py-2 px-4 rounded-xl font-semibold' />
      </SignedOut>
    </div>
  )
}

export default UserDashboardLink
