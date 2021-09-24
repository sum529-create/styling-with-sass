import React from "react";
import "./App.scss";
import Button from "./components/Button";

function App() {
  return (
    <div className="App">
      <div className="buttons">
        <Button size="large">버튼</Button>
        <Button>버튼</Button>
        <Button size="small">버튼</Button>
      </div>
      <div className="buttons">
        <Button color="gray" size="large">
          버튼
        </Button>
        <Button color="gray">버튼</Button>
        <Button color="gray" size="small">
          버튼
        </Button>
      </div>
      <div className="buttons">
        <Button color="pink" size="large">
          버튼
        </Button>
        <Button color="pink">버튼</Button>
        <Button color="pink" size="small">
          버튼
        </Button>
      </div>

      <div className="buttons">
        <Button size="large" outline>
          버튼
        </Button>
        <Button color="gray" outline>
          버튼
        </Button>
        <Button color="pink" outline size="small">
          버튼
        </Button>
      </div>

      <div className="buttons">
        <Button size="large" fullWidth className="customized-button">
          버튼
        </Button>
        <Button color="gray" fullWidth>
          버튼
        </Button>
        <Button
          color="pink"
          fullWidth
          size="small"
          onClick={() => console.log("클릭됐따!")}
          onMouseMove={() => {
            console.log("마우스무브!");
          }}
        >
          버튼
        </Button>
      </div>
    </div>
  );
}

export default App;
