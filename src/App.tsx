import './App.css';
import Timer from './Timer';

function App() {
  return (
    <div className={'container'}>
      <Timer initial={120}></Timer>
    </div>
  );
}

export default App;
