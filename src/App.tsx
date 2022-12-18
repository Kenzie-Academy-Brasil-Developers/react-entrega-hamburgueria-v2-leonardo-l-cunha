import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { MainRoutes as Routes} from "./routes";
import GlobalStyle from "./styles/globalStyles";

function App() {
  return (
   <>
   <ToastContainer
    position="top-left"
    autoClose={3000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="light"
    />
   <GlobalStyle/>
    <Routes />
   </>
  );
}

export default App;
