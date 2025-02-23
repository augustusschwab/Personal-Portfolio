import { useState } from 'react';
import "../styles/Contact.css";

export default function Contact() {
    //Set the variables for name, emial, and message using 'useState'.
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleInputChange = (e) => {
        const {name, value} = e.target;
    }

    const handleFormSubmit = (e) => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        e.preventDefault();
        
        if(name === '' || email === '' || message === ''){
            alert('Please fill out all fields.');
        } else {
            alert('Message submitted.')
            //Reset form
            setName('');
            setEmail('');
            setMessage('');
        }
    }

    return(
        <div>
            <h1>Contact</h1>

            <form className="form" onSubmit={handleFormSubmit}>
                <input
                value={name}
                name="name"
                onChange={e => setName(e.target.value)}
                type="text"
                placeholder="Name"
                />
                <input
                value={email}
                name="email"
                onChange={e => setEmail(e.target.value)}
                type="text"
                placeholder="Email"
                />
                <input
                value={message}
                name="message"
                onChange={e => setMessage(e.target.value)}
                type="text"
                placeholder="Message"
                />
                <button type="submit">
                Submit
                </button>
            </form>
      </div>
    );
};