import React, { useState } from 'react';
import {
    Button,
    Card,
    Container,
    Feed,
    Grid,
    Header,
    Icon,
    Image,
    Rating,
} from 'semantic-ui-react';
import { content, helperArr, textCutter, title } from '../../utils/utils';
import salad from '../../images/salad.svg';

const Post = () => {
    const [isTextExpanded, setTextExpanded] = useState(false);

    const readMore = () => {
        setTextExpanded(true);
    };

    const readLess = () => {
        setTextExpanded(false);
    };

    return (
        <Card fluid>
            <Card.Content>
                <Grid container columns={2}>
                    <Grid.Column width={10} verticalAlign="middle">
                        <Header as="h2">{title}</Header>
                    </Grid.Column>
                    <Grid.Column
                        width={6}
                        textAlign="right"
                        verticalAlign="middle"
                    >
                        <Card.Content>
                            <Image
                                size="mini"
                                circular
                                src="https://react.semantic-ui.com/images/avatar/small/elliot.jpg"
                                floated="right"
                                verticalAlign="middle"
                                style={{ margin: '5px 0 5px 10px' }}
                            />
                            <Card.Header>
                                <a>Matthew Lingholm</a>
                            </Card.Header>

                            <Card.Meta className="tiny-gray-text">
                                Posted 1 day ago
                            </Card.Meta>
                        </Card.Content>
                    </Grid.Column>
                </Grid>
            </Card.Content>

            <Card.Content>
                <Feed>
                    <Feed className="column">
                        <Container textAlign="justified">
                            <Image
                                size="medium"
                                circular
                                src={salad}
                                style={{ marginRight: '1.5em' }}
                            />
                            <p className="main-text">
                                {isTextExpanded ? content : textCutter(content)}
                            </p>
                            {!isTextExpanded && content.length > 720 && (
                                <a className="main-text" onClick={readMore}>
                                    ... Read more
                                </a>
                            )}
                            {isTextExpanded && (
                                <a className="main-text" onClick={readLess}>
                                    ... Read less
                                </a>
                            )}
                        </Container>
                        <Container className="main-text">
                            <Rating
                                icon="star"
                                rating={0}
                                // onRate={updateStar}
                                maxRating={5}
                            />
                            <span
                                className="tiny-gray-text"
                                style={{ marginLeft: 15 }}
                            >
                                Rating 0/0
                            </span>
                        </Container>

                        <div className="space-between main-text">
                            <Container floated="left">
                                {helperArr.map((item, index) => (
                                    <Button
                                        basic
                                        style={{ margin: '10px 20px 10px 0' }}
                                        key={index}
                                    >
                                        Tag {item}
                                    </Button>
                                ))}
                            </Container>
                            <Button icon>
                                <Icon name="pencil alternate" />
                            </Button>
                            <Button>Delete</Button>
                        </div>
                    </Feed>
                </Feed>
            </Card.Content>
        </Card>
    );
};

export default Post;
