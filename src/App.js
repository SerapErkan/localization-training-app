import "./App.css";
import { IntlProvider, FormattedMessage, FormattedNumber } from "react-intl";
import { useState } from "react";

const messages = {
  "tr-TR": {
    title: "Merhaba Dünya",
  },
  "en-US": {
    title: "Hello Word",
  },
};
function App() {
  const [lang, setLang] = useState("tr-TR");


  return (
    <div className="App">
      <br />
      <IntlProvider messages={messages[lang]}>
        <h1>
          <FormattedMessage id="title" />
        </h1>

        <br />
        <br />

        <button onClick={() => setLang("tr-TR")}>TR</button>
        <button onClick={() => setLang("en-US")}>EN</button>
      </IntlProvider>
    </div>
  );
}

export default App;
