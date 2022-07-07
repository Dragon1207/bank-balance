import {useState} from 'react';

const App = () => {
  const [num, setNum] = useState(0);

  function randomNumberInRange(min, max) {
    // 👇️ get number between min (inclusive) and max (inclusive)
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const handleClick = () => {
    setNum(randomNumberInRange(1, 999));
  };

  return (
    <div>
      <h1>Bankitizer</h1>
      <h2>Bank Balance: ${num}</h2>
      <button onClick={handleClick}>Transfer money</button>
    </div>
  );
};

export default App;