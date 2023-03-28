export default function RootLayout({ children }) {
  return (
    <main className='flex space-x-4 divide-x-2 p-5'>
      <div className='w-full'>{children}</div>
    </main>
  )
}
