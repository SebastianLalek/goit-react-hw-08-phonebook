import ContactList from 'components/contacts/Contacts';
import Filter from 'components/filter/filter';
import Form from 'components/form/form';
import Section from 'components/section/section';

export default function Contacts() {
  return (
    <div>
      <Section title="Phonebook">
        <Form />
      </Section>
      <Section title="Contacts">
        <ContactList>
          <Filter />
        </ContactList>
      </Section>
    </div>
  );
}
