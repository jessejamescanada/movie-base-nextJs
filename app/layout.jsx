import './globals.css'
import Providers from './providers'
import Header from '../components/Header'
import SearchBar from '../components/Searchbar'
import CategoryLinks from '../components/CategoryLinks'
import { ClerkProvider } from '@clerk/nextjs/app-beta'
export const metadata = {
  title: 'The Movie Base',
  description: 'Search your favorite movies!',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className='bg-gray-900 text-white max-w-7xl mx-auto overflow-hidden '>
        <ClerkProvider>
          <Providers>
            <Header />
            <SearchBar />
            <CategoryLinks />
            {children}
          </Providers>
        </ClerkProvider>
      </body>
    </html>
  )
}
