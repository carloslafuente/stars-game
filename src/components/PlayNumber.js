import colors from '../theme/colors';

const PlayNumber = ({ number, status, onClick }) => (
  <button
    style={{ backgroundColor: colors[status] }}
    className='number'
    onClick={() => onClick(number, status)}
  >
    {number}
  </button>
);

export default PlayNumber;
