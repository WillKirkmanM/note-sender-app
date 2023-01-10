import { Button } from '@mantine/core'
import { signIn } from 'next-auth/react'

export default function LoginButton() {
  return (
    <Button onClick={signIn}>Sign In</Button>
  )
}
