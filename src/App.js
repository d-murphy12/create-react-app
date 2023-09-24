import logo from './logo.svg';
import './App.css';

function App() {
  return (
  <div>
    <div class="buttons">
      <button class="duplicate">Duplicate card</button>
      <button class="changetxt">Change title</button>
      <button id="deletecard">Delete</button>
      <button data-toggle-btn>Toggle details</button>
      <button id="changebackground">Change Background</button>
  </div>

    <div id="card" class="card">
        <img src="https://media.istockphoto.com/id/1072291024/vector/vector-illustration-cartoon-residential-townhouse.jpg?s=612x612&w=0&k=20&c=vhYukmGJvZYdabADEakKi8W2-V47XzZ_fUW-3RRmPjE=" width="100"
       height="100"/>
       <h3 >Real Estate Agency</h3>
    <h4>IST 256 Pod 2</h4>
    <details class="details">
    <summary>Open me</summary>
    <div>
    The best agency around! Give us a call!
    </div>
    </details>
</div>
</div>
  );
}

export default App;
