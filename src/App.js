import logo from './logo.svg';
import './App.css';
import MapFilterReduce from './container/MapFilterReduce';
import ArrayFunction from './container/Array_Function';
import StateClass from './container/StateClass';
import CityClass from './container/CityClass';
import ClockClass from './container/ClockClass';
import ClockFunction from './container/ClockFunction';
// import Counter from './container/Counter';

function App() {
  return (
    <>
    <ClockClass/>
    <ClockFunction/>
    {/* <Counter/> */}
    <MapFilterReduce/>
    <ArrayFunction/>
    <StateClass/>
    <CityClass/>
    </>
  );

}

export default App;
