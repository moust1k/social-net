import React from 'react'
import { Formik, Form, Field } from "formik";

const NewPostForm = ({ m, onAddPost }) => {
    return (
        <div>
            <h1 className={m.h1Marginb}>My Posts</h1>
            <Formik
                initialValues={{ post: "" }}
                validate={values => {
                    const errors = {};
                    if (!values.post) {
                        errors.post = 'Enter message post...';
                    }
                    return errors;
                }}
                onSubmit={(values) => {
                    onAddPost(values);
                    values.post = '';
                }}>
                {() => (
                    <Form>
                        <div>
                            <Field type={'text'} name={'post'} placeholder={'Enter your message..'} />
                        </div>
                        <button className={m.sendButton} type={'submit'}>Send</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default NewPostForm