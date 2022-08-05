import { Contact } from '../Types/Contact';

export default (value: string, contactsList: Contact[]) =>
  contactsList.filter((member: Contact) => {
    const checkedValue = member?.name?.concat(' ', member?.surname || '');
    return (
      checkedValue?.toLowerCase().indexOf(value?.toLowerCase().trim()) !== -1
    );
  });
