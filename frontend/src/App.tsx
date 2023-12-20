import { Provider } from "react-redux";
import "./App.css";
import router from "./routes";
import store from "./store";
import { RouterProvider } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import persistStore from "redux-persist/es/persistStore";
import LoadingBar from "./components/UI/LoadingBar";

const persistor = persistStore(store);

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={<LoadingBar />} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  );
}

export default App;
