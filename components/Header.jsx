'use client'
import Link from 'next/link'
import Image from 'next/image'
import { currentUser } from '@clerk/nextjs/app-beta'
import UserDashboardLink from './UserDashboardLink'
import { useUser } from '@clerk/nextjs'

const Header = () => {
  // const user = await currentUser()
  // console.log(user)
  const { user } = useUser()
  console.log(user)
  return (
    <>
      <header className='w-full pb-5 flex'>
        <div className='flex justify-between items-center w-full sm:px-10'>
          <div className='w-0 sm:w-[100px]'></div>
          <Link
            href={'/'}
            // className='ml-[40%]'
          >
            <div>
              <Image
                src={'/logoR.png'}
                width={225}
                height={225}
                alt='logo'
                className='rounded-xl'
                priority={true}
              />
            </div>
          </Link>
          {user ? (
            <UserDashboardLink user={user} />
          ) : (
            <Link href={'/sign-in'}>
              <button className='bg-blue-500 py-2 px-4 rounded-xl font-semibold'>
                Sign In
              </button>
            </Link>
          )}
        </div>
      </header>
    </>
  )
}

export default Header
