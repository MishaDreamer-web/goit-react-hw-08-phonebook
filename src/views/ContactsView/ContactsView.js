import PageHeading from 'components/PageHeading';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';

import styles from './ContactsView.module.scss';

export default function ContactsView() {
  return (
    <>
      <PageHeading text="Phonebook" />
      <ContactForm />
      <h2 className={styles.Title}>Contacts</h2>
      <Filter />
      <ContactList />
    </>
  );
}
