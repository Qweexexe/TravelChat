import React from "react";
import "./App.css";
import Routers from "./routes/routes";
import { TokenProvider } from "./hooks/useToken";

function App() {
  return (
    <TokenProvider>
      <div className="App">
        <Routers />
      </div>
    </TokenProvider>
  );
}

export default App;
