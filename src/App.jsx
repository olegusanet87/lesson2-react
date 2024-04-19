import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const CustomButton = ({ message, children }) => {
  return (
    <button onClick={() => alert(message)}>{children}</button>
  );
};

export default function App() {
  const handleClick = () => {
    alert("I'm a button!");
  };
  return (
    <>
      <CustomButton message="Playing music!">Play some music</CustomButton>
      <CustomButton message="Uploading your data!">Upload data</CustomButton>
      <button onClick={handleClick}>Click me!</button>
    </>);
};