import React, { useEffect } from 'react';
import {
    Button,
    Card,
    Checkbox,
    Container,
    Form,
    Icon,
    Message,
    TextArea,
} from 'semantic-ui-react';
import { useForm } from 'react-hook-form';

const CreatePost = () => {
    const { register, errors, handleSubmit, setValue } = useForm();

    useEffect(() => {
        register({ name: 'title' }, { required: 'Title is required' });
        register({ name: 'content' }, { required: 'Content is required' });
        register({ name: 'isPrivate' });
    }, []);

    const handleChangeInput = (e, { name, value }) => {
        setValue(name, value);
    };

    const handleChangeCheckBox = (e, { name, checked }) => {
        setValue(name, checked);
    };

    const onSubmit = (data) => {
        console.log('data', data);
    };

    return (
        <Card fluid>
            <Container className="create-post-container">
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Input
                        fluid
                        placeholder={
                            !errors.title ? 'Title' : errors.title.message
                        }
                        name="title"
                        onChange={handleChangeInput}
                        error={!!errors.title}
                    />
                    <TextArea
                        placeholder="Write your post"
                        style={{ minHeight: 200, marginBottom: 20 }}
                        name="content"
                        onChange={handleChangeInput}
                        error={
                            !!errors.content && {
                                content: errors.content.message,
                            }
                        }
                    />
                    {errors.content && (
                        <Message negative style={{ margin: 0 }}>
                            <Message.Header>
                                {errors.content.message}
                            </Message.Header>
                            <p>
                                Please, write your post to the corresponding
                                field
                            </p>
                        </Message>
                    )}

                    <div className="space-between main-text">
                        <Form.Field
                            control={Checkbox}
                            required
                            name="isPrivate"
                            onChange={handleChangeCheckBox}
                            error={
                                errors.isPrivate && {
                                    content: errors.isPrivate.message,
                                }
                            }
                            label="Private"
                        />
                        <Button>Public</Button>
                    </div>
                </Form>
            </Container>
        </Card>
    );
};

export default CreatePost;
