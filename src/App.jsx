
/*

import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { l } from 'vite/dist/node/types.d-aGj9QkWt';



const Modal = () => {
  useEffect(() => {
    // Зберігаємо ідентифікатор інтервалу в змінну
    const intervalId = setInterval(() => {
      console.log(`Interval - ${Date.now()}`);
    }, 2000);

    return () => {
      // Очищаємо інтервал за його ідентифікатором
      clearInterval(intervalId);
    };
  }, []);

  return <div>Modal</div>;
};

const CustomButton = ({ message, children }) => {
  return (
    <button onClick={() => alert(message)}>{children}</button>
  );
};

const ClickCounter = ({ value, onUpdate }) => {
  // const [clicks, setClicks] = useState(0);
  // const handleClick = () => {
  //  setClicks(clicks + 1);
  return <button onClick={onUpdate}>Current:{value}</button>
};
//return <button onClick={handleClick}>Current:{clicks}</button>
//}

export default function App() {

  const [isOpen, setIsOpen] = useState(false);
  const [first, setFirst] = useState(0);
  const [second, setSecond] = useState(0);

  useEffect(() => {
    console.log("First update:", first);
  }, [first]);

  useEffect(() => {
    console.log("Second update:", second);
  }, [second]);

  useEffect(() => {
    console.log("first or second update:", first + second);
  }, [first, second]);

  useEffect(() => {
    document.title = `You cliccked ${clicks} times`;
  });
  const [values, setValues] = useState({
    x: 0,
    y: 0,
  });

  const updateX = () => {
    setValues({
      ...values,
      x: values.x + 1
    });
  };

  const updateY = () => {
    setValues({
      ...values,
      y: values.y + 1
    });
  };
  // let clicks = 0;
  const [clicks, setClicks] = useState(0);
  // const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    //clicks = clicks + 1;
    setClicks(clicks + 1);
    //alert("I'm a button!");
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div>

        <button onClick={() => setFirst(first + 1)}>First:{first}</button>
        <button onClick={() => setSecond(second + 1)}>Second:{second}</button>
      </div>

      <div>
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "Close" : "Open"}
        </button>
        {isOpen && <Modal />}
      </div>
      <button onClick={() => setClicks(clicks + 1)}>You clicked {clicks} times</button>
      <div>
        <p> x:{values.x}, y:{values.y}</p>
        <button onClick={updateX}>Update x</button>
        <button onClick={updateY}>Update y</button>
      </div>
      <ClickCounter value={clicks} onUpdate={handleClick} />
      <ClickCounter value={clicks} onUpdate={handleClick} />
      <CustomButton message="Playing music!">Play some music</CustomButton>
      <CustomButton message="Uploading your data!">Upload data</CustomButton>
      <button onClick={handleClick}>Click me! Current:{clicks}</button>

      <button onClick={handleToggle}>{isOpen ? "Hide" : "Show"}</button>
      {isOpen && <p>Now you can see me!</p>}
    </>);
};
*/