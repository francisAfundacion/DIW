import logo from './logo.svg';
import './App.css';
import About from './screens/about/About';
import Main from './screens/main/Main';
import Examples from './screens/simpleExamples/Examples';
import NotFound from './screens/NotFound'
import { BrowserRouter,Routes , Route} from 'react-router-dom';
import Invoice from './screens/components/invoices/Invoice';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element = {<Main />}></Route> 
          <Route path="/About" element = {<About />}></Route>
          <Route path = "/simpleExamples" element = {<Examples />}></Route>
          <Route path = "*" element = {<NotFound />}></Route>
          <Route path="/invoices/:invoiceId" element={<Invoice/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
