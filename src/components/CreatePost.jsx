import React, { useState } from "react"
import { Button, Form, Input, Message, TextArea } from "semantic-ui-react"

const CreatePost = () => {
  const { uid, displayName, photoURL, email } = {}

  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [errorMessage, setErrorMessage] = useState(false)

  const changeTitle = (event) => {
    setTitle(event.target.value)
    setErrorMessage(false)
  }

  const changeContent = (event) => {
    setContent(event.target.value)
    setErrorMessage(false)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const normalizeTitle = title.trim()
    const normalizeContent = content.trim()

    if (normalizeTitle && normalizeContent) {
      const newPost = {
        title: normalizeTitle,
        content: normalizeContent,
        stars: 0,
        user: {
          uid,
          displayName,
          photoURL,
          email,
        },
        createdAt: new Date().getTime(),
      }

      setTitle("")
      setContent("")
      setErrorMessage(false)
    } else {
      setErrorMessage(true)
    }
  }

  return (
    <>
      {errorMessage && (
        <Message
          error
          header="Action Forbidden"
          content="Please fill all fields to submit the message."
        />
      )}
      <Form>
        <Input
          size="large"
          fluid
          placeholder="Title"
          onChange={changeTitle}
          value={title}
        />
        <br />
      </Form>
      <Form>
        <TextArea
          placeholder="Write your post out there"
          onChange={changeContent}
          value={content}
        />
      </Form>
      <Button attached="bottom" onClick={handleSubmit}>
        Send
      </Button>
      <br />
      <br />
    </>
  )
}

export default CreatePost
