import Carousel from './Carousel'

const Banner = ({ trending, title }) => {
  return (
    <div className='w-full py-5'>
      <h1 className='text-center flex h-auto items-start justify-center  text-5xl tracking-widest  bg-gray-900'>
        {title}
      </h1>
      <Carousel trending={trending} />
    </div>
  )
}

export default Banner
