import "./App.css";

import { Button } from "reactomnix/dist/reactomnix";

function App() {
  return (
    <div className="App">
      <Button onClick={() => console.log("Button Clicked!")}>Click Me</Button>
      <Button preText="🚀" onClick={() => console.log("Launch Clicked!")}>
        Launch
      </Button>

      <Button postText="👋" onClick={() => console.log("Say Hi Clicked!")}>
        Say Hi
      </Button>

      <Button
        className="custom-button"
        text="s"
        onClick={() => console.log("Custom Class Clicked!")}
      >
        Custom Class
      </Button>

      <Button onClick={() => console.log("Custom Children Clicked!")}>
        <span style={{ color: "blue" }}>I'm a Custom Child</span>
      </Button>
    </div>
  );
}

export default App;
