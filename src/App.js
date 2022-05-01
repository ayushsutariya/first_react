import logo from './logo.svg';
import './App.css';
import MapFilterReduce from './container/MapFilterReduce';
import ArrayFunction from './container/Array_Function';
import StateClass from './container/StateClass';
import CityClass from './container/CityClass';
import ClockClass from './container/ClockClass';
import Loading from './components/Loading/Loading';
import Home from './components/Home/Home';
import { useEffect, useState } from 'react';
import Counter from './container/Counter';
// import Counter from './container/Counter';

function App(props) {

  const HomeWithLoading = Loading(Home);

  const [loading , setloading] = useState(false)
  const [data, setdata] = useState()

  useEffect(() => {
    setloading(true)
    setTimeout(() => {
      setloading(false)
      setdata(Home)
    }, 2000)
  }, []);

  return (
    <>

    <HomeWithLoading
      isLoading={loading}
      data = {data}
    />
    </>
  );


}

export default App;
