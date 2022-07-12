export default (value, contactsList) => {
  return contactsList.reduce((searchedContactsList, member) => {
    const checkedValue = member?.name.concat(member?.surname || '');
    if (checkedValue.indexOf(value.toLowerCase()) !== -1) {
      searchedContactsList.push(member);
    }
    return searchedContactsList;
  }, []);
};
