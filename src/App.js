import './App.css';
import Greet from './component/Functional-Component'
import {Greeting} from './component/Functional-Component'
import Welcome from './component/Class-Component'
import Hello  from './JSX/JSX'
import StatesMsg from './states/States'
import Counter from './states/Counter'
import ButtonClick from './eventHandler/ButtonClick'
import ButtonClickClass from './eventHandler/ButtonClickClass';
import Parent from './MethodsAsProps/Parent';
import IfElseApproch from './conditionalRender/IfElseApproch';
import ElementVarApproch from './conditionalRender/ElementVarApproch';
import TernaryApproch from './conditionalRender/TernaryApproch'
import ShortCircuitApproch from './conditionalRender/ShortCircuitApproch';
import NameList from './listRender/NameList';
import Header from './CaseStudy/Header'
import Footer from './CaseStudy/Footer'
import Routing from './CaseStudy/Routing'
import SignUpForm from './CaseStudy/SignUpForm';


function App() {
  return (
    <div className="App">
     <Routing /> 
    {/*<StatesMsg />
    <Hello name='Aditya'/>
      <ShortCircuitApproch/>
     <NameList/>
      <TernaryApproch/>
      <ElementVarApproch/>
      <IfElseApproch />
       <Parent /> 
      <StatesMsg />
      <Greet />
      <Greeting />
      <Welcome name='Aditya' />
      <Hello name='Aditya'>
      <p>Hello</p>
      <button>Submit</button>
      </Hello>
      <Hello name='Ajay'/>
      <Counter />  
      <ButtonClick />
      <ButtonClickClass /> */}
    </div>
  );
}

export default App;
