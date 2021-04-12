import logo from './logo.svg';
import './App.scss';
import Buttons from './molecules/button/Button'
import Inputfield from "./molecules/inputfield/Inputfield";
import Checkbox from "./molecules/checkbox/Checkbox";

function App() {
  return (
    <div className="App">
      <div style={{ textAlign: "left" }}>
        <Buttons
          classes="btn-primary fixed_width"
          text="Press me"
          // iconRight="arrow-right"
          iconLeft="home"
        />
        <Inputfield label="E-mailadres" placeholder="Vul hier iets leuks in" />
        <Checkbox
          name="yes"
          for="yes_option"
          labelText="Wow ja deze wil ik!"
        />
        <Checkbox name="no" for="no_option" labelText="Deze optie stinkt" />
      </div>
    </div>
  );
}

export default App;
