import MOCK_DATA from '../../data/MOCK_DATA.json';

export default () => {
  const copied = [...MOCK_DATA];
  copied.sort((a, b) => {
    return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
  });

  return copied.reduce(
    (acc, cur) => {
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
