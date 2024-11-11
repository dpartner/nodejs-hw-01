import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
  const contacts = await readContacts();

  const createdContacts = [];
  for (let i = 0; i < number; i += 1) {
    createdContacts.push(createFakeContact());
  }
  const newContacts = [...contacts, ...createdContacts];
  await writeContacts(newContacts).catch((err) => console.log(err));
};

generateContacts(5);
