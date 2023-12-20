import { useSelector } from "react-redux";
import "./App.css";
import router from "./routes";
import { RouterProvider } from "react-router-dom";

import i18n from "./utils/i18n";
import { useEffect } from "react";
import { LangState } from "./store/lang-Slice";

function App() {
  const lang = useSelector(
    (state: { root: { lang: LangState } }) => state.root.lang.lang
  );
  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang]);
  return <RouterProvider router={router} />;
}

export default App;
