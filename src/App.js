// import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Profile from './component/Profile';
import Grid from './component/Grid';
import Router from './component/Router';
import NavBar2 from './component/NavBar2';
import Footer from './component/Footer';

function App() {

  return (
    <body>
      <div>
        <NavBar2/>
      </div>
      <div>
        <Profile/>
      </div>
      <Grid/>
   </body>
  );
}

export default App;
