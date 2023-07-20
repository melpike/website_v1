import React, { useRef, useState } from 'react';
import handleSubmit from '../handlesubmit';

const Form = () => {
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const messageRef = useRef(null);

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formFilled, setFormFilled] = useState(false);

    const handleChange = () => {
        if (nameRef.current.value !== '' && emailRef.current.value !== '' && messageRef.current.value !== '') {
            setFormFilled(true);
        }
    }

    const submithandler = event => {
        event.preventDefault();
        const newForm = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            message: messageRef.current.value,
        };
        handleSubmit(newForm);
        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
        }, 5000)
        event.currentTarget.reset();
    };

    return (
        <form className='contact' onSubmit={submithandler}>
            {isSubmitting && 
                <div className="submitting">Thanks for reaching out!</div>
            }

            <label htmlFor="lname">Name</label>
            <input name="name" ref={nameRef} type="text" onChange={handleChange} placeholder="Enter your name" />

            <label htmlFor="lemail">Email</label>
            <input name="email" ref={emailRef} type="text" onChange={handleChange} placeholder="Enter your email address" />

            <label htmlFor="lmessage">Message</label>
            <textarea name="message" ref={messageRef} onChange={handleChange} placeholder="Write your message here!" />
            <button type="submit" disabled={!formFilled}>Submit</button>
        </form>
    )
}

export default Form;