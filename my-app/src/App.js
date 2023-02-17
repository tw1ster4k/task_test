import React, {useState} from 'react';
import './App.css';
import Dropdown from './Dropdown';
import Button from './Button';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Не выбрано');
  const [isActive, setIsActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const options = ['Не выбрано','Сделка', 'Контакт', 'Компания'];
  
  function handleClick() {
    setIsLoading(true);
    setIsActive(false)
    setTimeout(() => {
      setIsLoading(false);
      setIsActive(true)
    }, 2000);
  }

  function selectOption(option) {
    if(option !== 'Не выбрано') {
        setSelectedOption(option);
        setIsOpen(false);
        setIsActive(true)
    }else{
        setSelectedOption(option);
        setIsOpen(false);
        setIsActive(false)
    }
  }
  return (
    <div>
      <Dropdown selectOption={selectOption} isOpen={isOpen} selectedOption={selectedOption} options={options} setIsOpen={setIsOpen} />
      <Button isActive={isActive} click={handleClick} isLoading={isLoading}/>
    </div>
  );
}

export default App;
