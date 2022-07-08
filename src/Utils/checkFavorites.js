import MOCK_DATA from '../../data/MOCK_DATA.json';

export default () => {
  return MOCK_DATA.filter(cur => {
    return cur.favorites;
  });
};
