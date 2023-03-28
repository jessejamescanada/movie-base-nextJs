import './globals.css'
import Header from '../components/Header'
import SearchBar from '../components/Searchbar'
import CategoryLinks from '../components/CategoryLinks'

export const metadata = {
  title: 'The Movie Base',
  description: 'Search your favorite movies!',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className='bg-gray-900 text-white max-w-7xl mx-auto overflow-hidden'>
        <Header />
        <SearchBar />
        <CategoryLinks />
        {children}
      </body>
    </html>
  )
}
