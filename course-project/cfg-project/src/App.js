import './App.css';
import './components/bootstrap/css/bootstrap.min.css';
import './components/css/style.css';
import './components/css/animate.min.css';
import './components/css/font-awesome.min.css';
//import './components/owl-carrosel/owl.carrosel.min.css';
import './components/owl-carrosel/owl.theme.default.min.css';
import './components/css/offcanvas-menu.css';

import MainHeader from './components/MainHeader';
import MainFooter from './components/MainFooter';

function App() {
  return (
    <div className="App">
      <MainHeader/>
      <MainFooter/>
    </div>
  );
}

export default App;
