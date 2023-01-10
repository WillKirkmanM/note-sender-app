import pb from '../initPocketbase'
import { useState, useEffect } from 'react'
import { Text, Card, Container, Divider, Anchor } from '@mantine/core'

async function getNotes() {
  const res = await pb.collection("notes").getList(1, 20, { '$autoCancel': false })
  return res.items
}

export default function ShowNotes() {
  const [notes, setNotes] = useState<any>([])

  useEffect(() => {
    getNotes().then(setNotes)
  }, [])

  console.log(notes)

  return (
    <>
      {notes.map((note) => {
        return (
          <>
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

                <Card.Section>
                  <Text ta="right" p="sm">
                    ID:
                    <Text>
                      <Anchor href={`/notes/${note.id}`} >
                        {note.id}
                      </Anchor>
                    </Text>
                  </Text>
                </Card.Section>
              </Card>
            </Container>
          </>
        )
      })}
    </>
  )
}
