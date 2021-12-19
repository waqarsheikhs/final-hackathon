import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppRouter from './confiq/Router';
import { Provider } from 'react-redux';
import store from './store/store';
import { Home } from './containers';


function App() {
  return (
    <AppRouter />
  );
}

export default App;
