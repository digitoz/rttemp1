import logo from './logo.svg';
import './App.css';
import Sidebar from "./components/sidebar/Sample1/Sidebar";
import Header from "./components/Headercom/Header";
import BannerSlider from "./components/BannerSlider/BannerSlider";

function App() {
  return (
    <div className="app">
    <Header />
    <BannerSlider />
    <Sidebar />
    <div className="content">
      <h1>Welcome to My App</h1>
      <p>This is the main content area.</p>
    </div>
  </div>
  );
}

export default App;
