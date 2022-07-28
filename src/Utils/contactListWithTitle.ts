import { Contact } from '../Types/Contact';

export default (data: Contact[]) => {
  const copied: Contact[] = [...data];
  copied.sort((a: Contact, b: Contact) =>
    a.name < b.name ? -1 : a.name > b.name ? 1 : 0,
  );

  return copied.reduce(
    (acc: [{ data: Contact[]; title: string }], cur: Contact) => {
      const title = cur.name.charAt(0);
      if (acc[acc?.length - 1].title === title) {
        acc[acc?.length - 1].data.push(cur);
      } else {
        acc.push({ title, data: [cur] });
      }
      return acc;
    },
    [{ title: copied[0].name.charAt(0), data: [] }],
  );
};
