import * as React from "react";
import Navigations from "./Navigations";
import { Provider, useSelector } from "react-redux";
import { store } from "./Redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./Redux/store";
import SplashScreen from "react-native-splash-screen";

const App = () => {
  React.useEffect(() => {
    SplashScreen.hide();
  }, [])

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Navigations />
      </PersistGate>
    </Provider>

  );
};
export default App;
