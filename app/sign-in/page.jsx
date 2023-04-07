import { SignIn } from '@clerk/nextjs/app-beta'

export default function Page() {
  return (
    <div className='flex w-full my-8 items-center justify-center '>
      <SignIn
        signUpUrl='/sign-up'
        redirectUrl='/dashboard'
      />
    </div>
  )
}
