import { Component } from "react";

function Loading (components){
  return function WithLoadingComponents(
    {isLoading, data}
  ){
    if (isLoading){
    return(
      <p>Loading ... </p>
    )
    } else{
      return(
        <components data={data} />
      )
    }
  }
}

export default Loading;

