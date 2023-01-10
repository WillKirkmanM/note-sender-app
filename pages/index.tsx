import LoginButton from "../components/Authentication/LoginButton"
import SignOutButton from "../components/Authentication/SignOutButton"
import NoteModal from "../components/Notes/NoteModal"
import { Container, Text, Button, Group, Center } from '@mantine/core'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'

export default function Home() {
  const { data: session } = useSession()
  const router = useRouter()

  if (session) {
    return (
      <>
        <Container p="lg" ta="center">
          <Text fz="lg">Welcome {session?.user?.name}!</Text>
          <SignOutButton />
        </Container>

        <Center>
          <Group>
            <NoteModal />
            <Button onClick={() => router.push('/notes')}>
              Go to Notes
            </Button>
          </Group>
        </Center>
      </>
    )
  }

  if (!session) {
    return (
      <Container ta="center" py="sm">
        <Text fz="lg">You are not logged in. Please Sign In!</Text>
        <LoginButton />
      </Container>
    )
  }
}
