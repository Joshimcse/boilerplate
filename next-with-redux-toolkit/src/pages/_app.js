// - Import npm packages
import { Provider } from "react-redux";

// - import utils/constant/configs/others
import { store } from "../redux/store";

// - Stylesheets
import "../styles/app.css";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
