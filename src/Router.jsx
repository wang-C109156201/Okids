import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ConfigProvider } from 'antd';
// import { useSelector } from "react-redux";
import { HelmetProvider } from 'react-helmet-async'
import Home from './pages/Home'
import Start from './pages/Start'
import Signup from './pages/Signup';

function Router() {
//   const lightMode = useSelector(selectLightMode);
//   const theme = lightMode ? lightTheme : darkTheme;
  return (
      <ConfigProvider  >
        <HelmetProvider context={{}}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/StartPage" element={<Start />} />
              <Route path="/Signin" element={<Signup />} />
            </Routes>
          </BrowserRouter>
        </HelmetProvider>
      </ConfigProvider>
  );
}

export default Router;