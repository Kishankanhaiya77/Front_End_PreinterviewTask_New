import React, { useState } from "react";
import DisplayTime from "./components/displayTime/DisplayTime";
import Button from "./components/button/Button";
import {localDateFormat, getNextButtonColor} from "./utils"
import './app.scss'

interface AppProps { }

export interface AppState {
  lastClicked?(currentDate: Date): Date  ;
  buttonColor: "red" | "blue" | "green";
}

const App: React.FC<AppProps> = () => {
  const [state, setState] = useState<AppState>({
    lastClicked: undefined,
    buttonColor: "red",
  });

  const { lastClicked, buttonColor } = state;

  const onClick = () => {
    setState({
      lastClicked: localDateFormat(new Date()),
      buttonColor: getNextButtonColor(state),
    });
  };


  return (
    <>
    <Button 
        title='Get Local Time!' 
        onClick={onClick}
        buttonColor={buttonColor} 
      />
    
    <div className="TimeContainer flex m-12 justify-between">
      <DisplayTime lastClicked={lastClicked} />
      <DisplayTime lastClicked={lastClicked} />
      <DisplayTime lastClicked={lastClicked} />
    </div>
    </>
  );
};

export default App;
