import React from 'react'
import Array_Function from '../../container/Array_Function';
import CityClass from '../../container/CityClass';
import ClockClass from '../../container/ClockClass';
import Counter from '../../container/Counter';
import MapFilterReduce from '../../container/MapFilterReduce';
import StateClass from '../../container/StateClass';

export default function Home (props) {
  return (
      <>
      <ClockClass/>
      <MapFilterReduce/>
      <Array_Function/>
      <StateClass/>
      <CityClass/>
      <Counter/>
      </>
  )
}