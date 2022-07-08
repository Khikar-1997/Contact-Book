import MOCK_DATA from '../../data/MOCK_DATA.json';

export default () => MOCK_DATA.filter(cur => cur.favorites);
