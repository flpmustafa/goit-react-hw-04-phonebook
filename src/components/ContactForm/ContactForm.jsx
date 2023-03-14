import { useState } from 'react';
import PropTypes from 'prop-types';
import css from '../ContactForm/ContactForm.module.css';


export default function ContactForm({ onSubmit }) {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const handleInputChange = e => {
        const { name, value } = e.currentTarget;
        switch (name) {
            case 'name':
                setName(value);
                break;
            
            case 'number':
                setNumber(value);
                break;

            default: 
                return;    
        }
    }    

    const handleSubmitForm = event => {
        event.preventDefault();
        onSubmit(name, number);
        setName('');
        setNumber('');
        
    }

        return (
            <div className={css.container}>
                <h2>Phonebook</h2>
                <form className={css.form} onSubmit={handleSubmitForm}>
                    <label htmlFor="name"
                           className={css.label__form}>
                        Name
                    <input
                        className={css.input__contact}
                        type="text"
                        name="name"
                        id="name"
                        placeholder='Enter a name'
                        value={name}
                        onChange={handleInputChange}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                    />
                    </label>
                    <label htmlFor="number"
                           className={css.label__form}>
                        Number
                    <input
                        className={css.input__contact}
                        type="tel"
                        id="number"
                        name="number"
                        placeholder='Enter the number'
                        value={`${number.substring(0, 7)}`}
                        onChange={handleInputChange}
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                    />
                    </label>

                    <button
                        type='submit'
                        className={css.btn}>Add contact</button>
                </form>
            </div>
        )
    }

    ContactForm.propTypes = {
        onSubmit: PropTypes.func.isRequired,
      };
      