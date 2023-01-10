import { useRouter } from 'next/router'
import pb from '../../components/initPocketbase'
import { useState, useEffect } from 'react'
import { Container, Text, Card, Divider, Center, Group, Button } from '@mantine/core'

async function getNote(noteID: string) {
  return await pb.collection("notes").getOne(noteID, { '$autoCancel': false }).catch((err) => { return err })
}

export default function NoteID() {
  const router = useRouter()
  const [note, setNote] = useState<any[]>([])
  const { noteID } = router.query

  useEffect(() => {
    getNote(noteID).then(setNote)
  }, [noteID])

  return (
    <>
        <Center>
          <Group>
            <Text fz={50} py={50} px={400}>Viewing: {noteID}</Text>
            <Button onClick={() => router.push('/')}>Go Back</Button>
          </Group>
        </Center>
      <Container>

        <Text>
          <Container size="lg" p="lg">
            <Card shadow="sm" p="xl" radius="md" withBorder>
              <Card.Section>
                <Text fz="xl" p="lg">
                  {note.title}
                </Text>
                <Divider my="sm" />
              </Card.Section>

              <Card.Section p="md">
                {note.body}
              </Card.Section>
            </Card>
          </Container>
        </Text>
      </Container>
    </>
  )
}

