import logo from './logo.svg';
import './App.css';
import Login from './component/LoginCheck';
import Home from './component/frontreact';
import RegistrationForm from './component/registration';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // استيراد React Router
import { postregitrer } from './back/api';
import Newdash from './component/newdah';
import Orders from './component/oreders';
import DashboardLayoutBasic from './component/dashboard';
import users from './component/user';
function App() {
  return (
    // <div className="App">
    //   <Home/>
    //   {/* <Login/> */}
    // </div>
    <Router>
      <div className="App">
        <Routes>
          {/* مسار تسجيل الدخول */}
          <Route path="/" element={<Login/>} />
          <Route path="/dashboard" element={<Newdash/>} />
          <Route path="/orders" element={<Orders/>} />
          <Route path="/users" element={<users/>} />



          <Route path="registration" element={<RegistrationForm/>} />
          {/* مسار الصفحة الرئيسية */}
          <Route path="/frontreact" element={<Home/>} />
          <Route path="/dash" element={<DashboardLayoutBasic/>} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
