import './App.css';
import './components/bootstrap/css/bootstrap.min.css';
import './components/css/style.css';
import './components/css/animate.min.css';
import './components/css/font-awesome.min.css';
import './components/owl-carrosel/owl.theme.default.min.css';
import './components/css/offcanvas-menu.css';
import './components/css/responsive.css';

import MainHeader from './components/MainHeader';
import MainFooter from './components/MainFooter';
import OffCanvasView from './components/OffCanvasView';
import SubscribeSection from './components/SubscribeSection';
import MainSlider from './components/MainSlider';

function App() {
  return (
    <div className="App">
      <MainHeader/>
      <MainSlider/>
      <SubscribeSection/>
      <MainFooter/>
      <OffCanvasView/>
    </div>
  );
}

export default App;
