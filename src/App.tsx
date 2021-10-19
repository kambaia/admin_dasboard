import { BrowserRouter, } from "react-router-dom";
import GlobalStyle from "./styles/Global";
import './firebase/config';
import "firebase/analytics";
import { AuthProvider } from "./config/Auth/AuthContext";
import { AlertProvider } from "./config/Alert/AlertContextMessage";
import { DataProvider } from "./config/DataShare";
import Messages from "./components/AlertMessage";
import Routes from './routes';
//import { SERVER_IP } from './utils';


const App: React.FC = () => {
  return (
    <>
    <AuthProvider>
        <BrowserRouter>
          <AlertProvider>
            <DataProvider>
              <Messages />
                <Routes/>
            </DataProvider>
          </AlertProvider>
          <GlobalStyle />
        </BrowserRouter>
      </AuthProvider>
    </>

  );
}
export default App;