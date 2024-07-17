// import logo from './logo.svg';
import './App.css';
import ClassComponent from './components/ClassComp';
import ConditionRenComp from './components/ConditionRenderingComp';
import FunctionComp from './components/FunctionComp';
import MethodEvent from './components/MethodEventComp';
import MyCssComp from './components/MyCssComp';
import MyImageComp from './components/MyImagesComp';
import MySliderCom from './components/MySliderCom';
import ParentComp from './components/ParentComp';
import SetStateComp from './components/SetStateComp';
import ChangeSixImgComp from './Task/ChangeSixImgComp';
import ClickCounterComp from './Task/ClickCounterComp';
import HoverCounterComp from './Task/HoverCounterComp';
import MyDetails from './Task/MyDetailsComp';
import ToggleImgComp from './Task/ToggleImgComp';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      <h2>Welcome Ajith </h2>
      {/* <FunctionComp myName="Ajith Kumar" post="Software Developer Engineer"/>
      <ClassComponent myName="Kumar" post="AI Developer Engineer"/>
      <MyDetails fname="Ajith" lname = "Kumar" email ="Ajith@123.com" contact ="9380410103"/> */}
      {/* 
        <MethodEvent></MethodEvent> */}

      {/* <SetStateComp></SetStateComp> */}

      {/* <ConditionRenComp></ConditionRenComp> */}

      {/* <MyImageComp></MyImageComp> */}
      {/* <ToggleImgComp></ToggleImgComp> */}

      <hr></hr>

      {/* <ParentComp></ParentComp> */}
      {/* <ChangeSixImgComp></ChangeSixImgComp> */}

      {/* <MyCssComp></MyCssComp> */}
      {/* <ClickCounterComp></ClickCounterComp> */}
      <hr></hr>
      {/* <HoverCounterComp></HoverCounterComp> */}
      <MySliderCom></MySliderCom>
    </div>
  );
}

export default App;
