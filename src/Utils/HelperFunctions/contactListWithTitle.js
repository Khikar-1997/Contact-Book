import MOCK_DATA from '../../../data/MOCK_DATA.json';

const sortData = () => {
  return MOCK_DATA.sort((a, b) => {
    return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
  });
};

export default () => {
  const firstNameLetter = sortData()[0].name.charAt(0);
  return sortData().reduce(
    (acc, cur) => {
      const title = cur.name.charAt(0);
      if (acc[acc?.length - 1].title === title) {
        acc[acc?.length - 1].data.push(cur);
      } else {
        acc.push({ title, data: [cur] });
      }
      return acc;
    },
    [{ title: firstNameLetter, data: [] }],
  );
};
