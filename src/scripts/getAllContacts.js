import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  const contactsArr = await readContacts();
  if (contactsArr.length === 0) {
    return 'Contacts not found';
  }
  return contactsArr;
};

console.log(await getAllContacts());
