import React from "react"
import { Container, List, Segment } from "semantic-ui-react"

const Footer = () => {
  return (
    <Segment inverted vertical className="footer">
      <Container textAlign="center">
        <List horizontal inverted divided link size="small">
          <List.Item as="a" href="#">
            All Rights Reserved
          </List.Item>
          <List.Item as="a" href="#">
            Terms and Conditions
          </List.Item>
          <List.Item as="a" href="#">
            TM and copyright © 2020
          </List.Item>
        </List>
      </Container>
    </Segment>
  )
};

export default Footer
