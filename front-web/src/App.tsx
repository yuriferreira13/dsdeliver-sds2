import { ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Routes from './routes';


function App() {
  return (
    <>
      <Routes />
      <ToastContainer />
    </>
  );
}

export default App;
