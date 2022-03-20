import "./App.css";
import { IntlProvider, FormattedMessage } from "react-intl";
import { useState, useEffect } from "react";

const messages = {
  "tr-TR": {
    title: "Merhaba Dünya",
  },
  "en-US": {
    title: "Hello Word",
  },
};
function App() {
  const isLocale = localStorage.getItem("locale");
  const defaultLocale = isLocale ? isLocale : navigator.language;


  const [locale, setlocale] = useState(defaultLocale);

  useEffect(() => {
    localStorage.setItem("locale", locale);
  }, [locale]);

  return (
    <div className="App">
      <br />
      <IntlProvider messages={messages[locale]}>
        <h1>
          <FormattedMessage id="title" />
        </h1>

        <button onClick={() => setlocale("tr-TR")}>TR</button>
        <button onClick={() => setlocale("en-US")}>EN</button>
      </IntlProvider>
    </div>
  );
}

export default App;

//NOT:
//https://formatjs.io/docs/getting-started/installation
//npm i -S react react-intl
//import {IntlProvider, FormattedMessage, FormattedNumber} from 'react-intl'
{
  /* 
<IntlProvider messages={} >

<FormattedMessage id={}/>

</IntlProvider> 
*/
}
