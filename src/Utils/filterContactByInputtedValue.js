export default (value, contactsList) =>
  contactsList.reduce((searchedContactsList, member) => {
    const checkedValue = member?.name.concat(member?.surname || '');
    if (checkedValue.indexOf(value.toLowerCase().trim()) !== -1) {
      searchedContactsList.push(member);
    }
    return searchedContactsList;
  }, []);
