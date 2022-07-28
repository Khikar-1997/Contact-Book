import { Contact } from '../Types/Contact';

export default (data: Contact[]) =>
  data.filter((cur: Contact) => cur.favorites);
