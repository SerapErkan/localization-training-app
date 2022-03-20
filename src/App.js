import "./App.css";
import { IntlProvider, FormattedMessage } from "react-intl";
import { useState, useEffect } from "react";

const messages = {
  "tr-TR": {
    title: "Merhaba Dünya",
    description:"1 Yeni Messaj "
  },
  "en-US": {
    title: "Hello Word",
    description:"{count} New Messages "
    // description:"3 New Messages "
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
          <FormattedMessage id="description" values={{count:3}} />
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
