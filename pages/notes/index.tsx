import ShowNotes from "../../components/Notes/Notes";
import { Text, Container, Button, Group, Center } from '@mantine/core'
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter()

  return (
    <>
        <Center>
          <Group>
            <Text fz={50} py={50} px={400}>Notes</Text>
            <Button onClick={() => router.push('/')}>Go Back</Button>
          </Group>
        </Center>
      <ShowNotes />
    </>
  )
}
