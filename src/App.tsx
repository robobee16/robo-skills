import React from "react";
import { AppComponent } from "@app/app.components";
import "@assets/style/App.scss";

function App(): React.ReactElement | null {
  return (
    <div className="App">
      <AppComponent />
    </div>
  );
}

/*
 * this will be required to useHistory
 * for Routing
 * */
export default App;
