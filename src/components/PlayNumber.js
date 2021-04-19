import colors from '../theme/colors';

const PlayNumber = ({ number, status }) => (
  <button
    style={{ backgroundColor: colors[status] }}
    className='number'
    onClick={() => console.log('Num', number, status)}
  >
    {number}
  </button>
);

export default PlayNumber;
