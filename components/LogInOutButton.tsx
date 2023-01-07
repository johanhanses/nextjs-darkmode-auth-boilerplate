import { User } from '@prisma/client'
import { Session, SessionOptions } from 'next-auth'
import { useSession, signIn, signOut } from 'next-auth/react'
import { useEffect } from 'react'

type MySession = Session & {
  user: User
}

export default function LogInOutButton() {
  const { data: session } = useSession()

  if (session) {
    return (
      <>
        Signed in as {(session.user as MySession).user.username} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  )
}
