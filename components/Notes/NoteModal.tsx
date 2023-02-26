import { useState } from "react"
import { Modal, Button, Container, Divider, TextInput } from "@mantine/core"
import { showNotification } from '@mantine/notifications'
import pb from "../initPocketbase";

export default function NoteModal() {
  const [opened, setOpened] = useState(false);

  // Note States
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")

  const NOTE_API_URL = "https://localhost:3000/api/notes/createNote"

  async function handleSubmit() {
    await pb.collection("notes").create({
      title: title,
      body: body 
    })
    await setOpened(false)
    await showNotification({
      title: 'Note Created!',
      message: 'Well Done, You Can Now View the Notes'
    })
  }

  return (
    <>
      <Modal
        opened={opened}
        transition="fade"
        onClose={() => setOpened(false)}
        title="Create a Note!"
      >

        <TextInput
          label="Note Title"
          placeholder="I Need Love - LL Cool J"
          withAsterisk
          onChange={(e) => setTitle(e.currentTarget.value)}
        />

        
        <TextInput
          label="Note Body"
          placeholder="WME in the house, huh, Girl listen to me, When I was sittin' in my room all alone, Staring at the wall"
          withAsterisk
          onChange={(e) => setBody(e.currentTarget.value)}
        />

        <Container ta="right" p="sm">
          <Button onClick={handleSubmit}>Submit</Button>
        </Container>
      </Modal>

        <Button onClick={() => setOpened(true)}>Create Note</Button>
    </>
  )
}
