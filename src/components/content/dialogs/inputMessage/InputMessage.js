import React from 'react'
import m from './inputMessage.module.css'
import { Formik, Field, Form } from 'formik'

const InputMessage = (props) => {

    let onAddMsg = (message) => {
        props.addMessage(message);
    }

    return (
        <>
            <div className={m.inputMessage}>
                <Formik
                    initialValues={{ message: "" }}
                    validate={values => {
                        const errors = {};
                        if (!values.message) {
                            errors.message = 'Enter message post...';
                        }
                        return errors;
                    }}
                    onSubmit={(values) => {
                        onAddMsg(values)
                        values.message = '';
                    }}>
                    {() => (
                        <Form>
                            <div>
                                <Field className={m.inputAddMessage} type={'text'} name={'message'} placeholder={'type...'} />
                            </div>
                            <button className={m.buttonAddMessage} type={'submit'}>Send</button>
                        </Form>
                    )}
                </Formik>
            </div>
        </>
    )
}

export default InputMessage