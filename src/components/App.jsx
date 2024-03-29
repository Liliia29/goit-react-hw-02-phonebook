import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from 'components/ContactForm';
import { ContactList } from 'components/ContactList';
import { Filter } from 'components/Filter';
import {
  Container,
  Title,
  ContactsTitle,
  FilterTitle,
  NoContacts,
} from './App.styled';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleFormSubmit = contact => {
    const isInContacts = this.state.contacts.some(
      ({ name }) => name.toLowerCase() === contact.name.toLowerCase()
    );
    if (isInContacts) {
      alert(`${contact.name} is already in contacts.`);
    } else {
      this.setState(prevState => ({
        contacts: [{ id: nanoid(), ...contact }, ...prevState.contacts],
      }));
    }
  };

  handleFilterChange = e => {
    this.setState({ filter: e.target.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  removeContact = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(({id}) => id !== contactId),
      };
    });
  };

    render() {
      const { filter, contacts } = this.state;
      const visibleContacts = this.getVisibleContacts();
       return (
        <Container>
          <Title>Phonebook</Title>
          <ContactForm onSubmit={this.handleFormSubmit}/>
          <ContactsTitle>Contacts</ContactsTitle>
          <FilterTitle>Find contacts by name</FilterTitle>
          <Filter value={filter} onFilterChange={this.handleFilterChange}/>
          {contacts.length ? (
            <ContactList
              contacts={visibleContacts}
              onRemove={this.removeContact}
            />
          ) : (
            <NoContacts>No contacts added yes.</NoContacts>
          )}
        </Container>
      );
    }
}
