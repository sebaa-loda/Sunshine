import ReactDOM from 'react-dom/client'
import { App }from './App.jsx'
import 'boxicons/css/boxicons.min.css'; 
import { Provider } from 'react-redux'
import store from "./redux/store"
import './scss/base/_globales.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
 <Provider store={store}>
    <App />
  </Provider>
);
