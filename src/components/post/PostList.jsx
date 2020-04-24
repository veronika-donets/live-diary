import React from 'react';
import { Button, Container } from 'semantic-ui-react';
import Post from './Post';
import { helperArr } from '../../utils/utils';

const PostList = () => {
    return (
        <>
            {helperArr.map((item, index) => (
                <Post key={index} />
            ))}
            <Container textAlign="center" style={{ marginTop: 40 }}>
                <Button.Group basic>
                    {helperArr.map((item, index) => (
                        <Button key={index}>{index + 1}</Button>
                    ))}
                </Button.Group>
            </Container>
        </>
    );
};

export default PostList;
