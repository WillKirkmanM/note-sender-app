import { Button } from '@mantine/core'
import { signOut } from 'next-auth/react'

export default function SignOutButton() {
  return (
    <Button onClick={signOut}>Sign Out</Button>
  )
}
