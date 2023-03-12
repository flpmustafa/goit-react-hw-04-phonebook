import { nanoid } from 'nanoid';
import { useEffect } from 'react';
import { useState } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

export default function App() {
const [contacts, setContacts] = useState(() => {
  return JSON.parse(localStorage.getItem('contacts')) ?? [];
});
const [filter, setFilter] = useState('');

useEffect(() => {
  window.localStorage.setItem('contacts', JSON.stringify(contacts));
}, [contacts]);
  const handleAddContact = (name, number) => { 
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    

  if (contacts.find(contact => contact.name === name))
     { 
      alert(`${name} is already in contacts`);
  } else if (name.trim() === '' || number.trim() === '') {
    alert("Enter the contact's name and number phone!");
  } else {
    setContacts(prevContacts => 
      [newContact, ...prevContacts])
    }
  }  

  const handleDeleteContact = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  }

  const onVisibleContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  
  const handleFilterChange = filter => setFilter(filter);

    return (
        <>
        <ContactForm
          onSubmit={handleAddContact}
        />
        <ContactList
          contacts={onVisibleContacts()}
          onDeleted={handleDeleteContact}
        >
          <Filter filter={filter} onChange={handleFilterChange} />
        </ContactList>
      </>
     );
  }
