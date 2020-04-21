import React from "react"
import { Button, Card, Container, Feed, Rating } from "semantic-ui-react"
import { content, title } from "../utils/utils"

const Post = () => {
  return (
    <Card fluid>
      <Card.Content>
        <Card.Header>{title}</Card.Header>
      </Card.Content>

      <Card.Content>
        <Feed>
          <Feed className="column">
            <Container textAlign="justified">
              <p className="text">{content}</p>
            </Container>

            <div className="space-between">
              <Rating
                icon="star"
                rating={0}
                // onRate={updateStar}
                maxRating={5}
              />
              <Button>Delete</Button>
            </div>
          </Feed>
        </Feed>
      </Card.Content>
    </Card>
  )
}

export default Post
