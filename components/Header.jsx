import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  return (
    <>
      <header className='w-full pb-5 flex'>
        <div className='flex justify-center w-full px-10'>
          <Link href={'/'}>
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
        </div>
      </header>
    </>
  )
}

export default Header
