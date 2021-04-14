import './App.css';
import StarMatch from './components/StarMatch';

const App = ({ title }) => {
  return (
    <>
      <h3 style={{textAlign: 'center'}}>{title}</h3>
      <StarMatch />
    </>
  );
};

export default App;
