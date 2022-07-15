export default data => {
  const copied = [...data];
  copied.sort((a, b) => (a.name < b.name ? -1 : a.name > b.name ? 1 : 0));

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
