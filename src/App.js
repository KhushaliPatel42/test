import './App.css';
import Calc from './Components/Calc';
import OutputScreen from './Components/OutputScreen';
import Button from './Components/Button';
import React,{useState} from 'react'
function App() {
  const [input, setInput] = useState("");
  // const [output, setOutput] = useState("");  
  const [isDisable, setisDisable] = useState(false);
  const handleClick = (e)=>{
    const val=e.target.value;
    switch(val) {
      case "=":{
        if(input!==""){
          let op=eval(input) ;
          // setOutput(op);
          setInput(input+val+op);
          setisDisable(true)
        }
        break;
      }
      case 'C': {
        setInput("");
        // setOutput("");
        setisDisable(false)
        break;
      }
      case 'X':{
        let str=input;
        str=str.substr(0,str.length-1);
        setInput(str);
        break;
      }
      default:
        setInput(input+val);
        break;
    }
  }
  return (
    <>
    <Calc title="Calculator" />
   <OutputScreen value={input}/>
   {/* <OutputScreen value={output}/> */}
    <div className="App">
      <Button label={'C'} handleClick={handleClick}/>
    </div>
    <div className="App">
      <Button label={'7'} disable={isDisable} handleClick={handleClick}/>
      <Button label={'8'}  disable={isDisable} handleClick={handleClick}/>
      <Button label={'9'}  disable={isDisable} handleClick={handleClick}/>
      <Button label={'+'}  disable={isDisable} handleClick={handleClick}/>
    </div>
    <div className="App">
      <Button label={'4'}  disable={isDisable} handleClick={handleClick}/>
      <Button label={'5'}  disable={isDisable} handleClick={handleClick}/>
      <Button label={'6'}  disable={isDisable} handleClick={handleClick}/>
      <Button label={'-'}  disable={isDisable} handleClick={handleClick}/>
    </div>
    <div className="App">
      <Button label={'1'}  disable={isDisable} handleClick={handleClick}/>
      <Button label={'2'}  disable={isDisable} handleClick={handleClick}/>
      <Button label={'3'}  disable={isDisable} handleClick={handleClick}/>
      <Button label={'*'}  disable={isDisable} handleClick={handleClick}/>
    </div>
    <div className="App">
      <Button label={'0' }  disable={isDisable} handleClick={handleClick}/>
      <Button label={'=' }  disable={isDisable} handleClick={handleClick}/>
      <Button label={'X'}   disable={isDisable} handleClick={handleClick}/>
      <Button label={'/'}  disable={isDisable} handleClick={handleClick}/>
    </div>
    </>
  );
}

export default App;
