export default (value, contactsList) =>
  contactsList.filter(member => {
    const checkedValue = member?.name.concat(' ', member?.surname || '');
    return (
      checkedValue.toLowerCase().indexOf(value.toLowerCase().trim()) !== -1
    );
  });
