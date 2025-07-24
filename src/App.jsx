import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import './index.css';
import MainRoutes from './routes/MainRoutes';
import Footer from './components/Footer/Footer';
import Loader from './components/Loader/Loader'; 
import Authentication from './components/Authentication_Page/Authentication';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [showAuth, setshowAuth] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);   

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          {showAuth?<Authentication setshowAuth={setshowAuth}/>:<></>}
          <div className="app">
            <Navbar setshowAuth={setshowAuth} />
            <MainRoutes />
          </div>
          <Footer />
        </>
      )}
    </>
  );
};

export default App;
