import logo from './logo.svg';
import './App.css';
import Navbar from './components/nav/Navbar'
import RegistrationForm from './components/RegistrationForm/RegistrationForm'

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <RegistrationForm></RegistrationForm>
    </div>
  );
}

export default App;
