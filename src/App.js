import Input from './components/Input';
import Button from './components/Button';
import { useState } from 'react';

import { Container, Content, Row } from './styles';

const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');

  const handleOnClear = () => {
    setCurrentNumber('0');
    setFirstNumber('0');
    setOperation('');
  };

  const handleAddNumber = (number) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${number}`)
  };

  const handleSumNumbers = () => {

    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('+');
    } else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
      setFirstNumber('0');
      setOperation('');
    }

  };

  const handleMinusNumbers = () => {

    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('-');
    } else {
      const minus = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(minus));
      setFirstNumber('0');
      setOperation('');
    }

  };

  const handleMultNumbers = () => {

    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('x');
    } else {
      const mult = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(mult));
      setFirstNumber('0');
      setOperation('');
    }

  };

  const handleDivNumbers = () => {

    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('/');
    } else {
      const divi = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(divi));
      setFirstNumber('0');
      setOperation('');
    }

  };

  const handleEquals = () => {

    if (firstNumber !== '0' && operation !== '' && currentNumber !== '0') {
      
      switch(operation) {
        case '+':
          handleSumNumbers();
          break;
        case '-':
          handleMinusNumbers();
          break;
        case 'x':
          handleMultNumbers();
          break;
        case '/':
          handleDivNumbers();
          break;
        default:
          break;
      }

    }

  };

  return (
    <Container>
      <Content>
        <Input value={currentNumber}/>
        <Row>
          <Button label="AC" onClick={handleOnClear}/>
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')}/>
          <Button label="8" onClick={() => handleAddNumber('8')}/>
          <Button label="9" onClick={() => handleAddNumber('9')}/>
          <Button label="/" onClick={handleDivNumbers}/>
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')}/>
          <Button label="5" onClick={() => handleAddNumber('5')}/>
          <Button label="6" onClick={() => handleAddNumber('6')}/>
          <Button label="x" onClick={handleMultNumbers}/>
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')}/>
          <Button label="2" onClick={() => handleAddNumber('2')}/>
          <Button label="3" onClick={() => handleAddNumber('3')}/>
          <Button label="-" onClick={handleMinusNumbers}/>
        </Row>
        <Row>
          <Button label="0" onClick={() => handleAddNumber('0')}/>
          <Button label="." onClick={() => handleAddNumber('.')}/>
          <Button label="=" onClick={handleEquals}/>
          <Button label="+" onClick={handleSumNumbers}/>
        </Row>
      </Content>
    </Container>
  );
}

export default App;
