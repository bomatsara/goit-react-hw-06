import Section from './layout/Section/Section';
import { useEffect, useState } from 'react';
import ContactForm from './ContactForm/ContactForm.jsx';
import SearchBox from './SearchBox/SearchBox.jsx';
import defaultContacts from '../data/contacts.json';
import ContactList from './ContactList/ContactList.jsx';

export default function App() {
  return (
    <>
      <Section className="section-form">
        <h1 style={{
          fontSize: 40,
          marginBottom: 30,
        }}>Phonebook</h1>
        <ContactForm />
        <SearchBox />
        <ContactList />
      </Section>
    </>
  );
}