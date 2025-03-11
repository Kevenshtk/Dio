import {Container, Content, Rom} from './styles.js';
import { useState } from 'react';
import Input from './components/Input';
import Button from './components/Button';


function App() {
  const[diplayNumbers, setDiplayNumbers] = useState('');
  const[firstNumber, setFirstNumber] = useState('');
  const[secundNumber, setSecundNumber] = useState('');
  const[operation, setOperation] = useState('');
  
  const handleAddNumber = (num) => {
    if(operation !== ''){
      setSecundNumber(`${secundNumber}${num}`);
    }
    setDiplayNumbers((prev) => prev + num);
  }

  const handleClear = () => {
    setDiplayNumbers("");
  }

  const addOperacao = (op) => {
    setFirstNumber(diplayNumbers);
    setOperation(op);
    setDiplayNumbers(`${diplayNumbers}${op}`);
  }

  const executeOperacao = () => {
    switch(operation){
      case '+':
        handleSumNumbers();
        setFirstNumber('');
        setSecundNumber('');
        setOperation('');
      break;
      case '-':
        handleSubNumbers();
        setFirstNumber('');
        setSecundNumber('');
        setOperation('');
      break;
      case 'x':
        handleMultNumbers();
        setFirstNumber('');
        setSecundNumber('');
        setOperation('');
      break;
      case '/':
        handleDivNumbers();
        setFirstNumber('');
        setSecundNumber('');
        setOperation('');
      break;
      default:
      break;
    }
  }

  const handleSumNumbers = () => {
    const sum = Number(firstNumber) + Number(secundNumber);
    setDiplayNumbers(String(sum))
  }

  const handleSubNumbers = () => {
    const sub = Number(firstNumber) - Number(secundNumber);
    setDiplayNumbers(String(sub))
  }

  const handleMultNumbers = () => {
    const mult = Number(firstNumber) * Number(secundNumber);
    setDiplayNumbers(String(mult))
  }

  const handleDivNumbers = () => {
    const div = Number(firstNumber) / Number(secundNumber);
    setDiplayNumbers(String(div))
  }

  return (
    <Container>
      <Content>
        <Input value={diplayNumbers}/>
        <Rom>
          <Button label="x" onClick={() => addOperacao('x')}/>
          <Button label="/" onClick={() => addOperacao('/')}/>
          <Button label="c" onClick={handleClear}/>
          <Button label="." onClick={() => handleAddNumber('')}/>
        </Rom>
        <Rom>
          <Button label="7" onClick={() => handleAddNumber('7')}/>
          <Button label="8" onClick={() => handleAddNumber('8')}/>
          <Button label="9" onClick={() => handleAddNumber('9')}/>
          <Button label="-" onClick={() => addOperacao('-')}/>
        </Rom>
        <Rom>
          <Button label="4" onClick={() => handleAddNumber('4')}/>
          <Button label="5" onClick={() => handleAddNumber('5')}/>
          <Button label="6" onClick={() => handleAddNumber('6')}/>
          <Button label="+" onClick={() => addOperacao('+')}/>
        </Rom>
        <Rom>
          <Button label="1" onClick={() => handleAddNumber('1')}/>
          <Button label="2" onClick={() => handleAddNumber('2')}/>
          <Button label="3" onClick={() => handleAddNumber('3')}/>
          <Button label="=" onClick={executeOperacao}/>
        </Rom>
      </Content>
    </Container>
  );
}

export default App;
