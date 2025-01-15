import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import MobileNavigation from './components/MobileNavigation';
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setBannerData, setImageURL } from './store/movieoSlice';

function App() {
  const dispatch = useDispatch();

  const fetchTrendingData = async () => {
    try {
      const response = await axios.get("https://api.themoviedb.org/3/trending/all/week?api_key=4468e5ae9f69dc22a75a255b5def7d66");
      dispatch(setBannerData(response.data.results)); // Pass the API response to Redux
    } catch (error) {
      console.log("error", error);
    }
  };

  const fetchConfiguration = async () => {
    try {
      const response = await axios.get("/configuration")

      dispatch(setImageURL(response.data.images.secure_base_url+"original"))
    } catch (error) {

    }
  }

  useEffect(() => {
    fetchTrendingData()
    fetchConfiguration()
  }, []);

  return (
    <main className="pt-14 lg:pb-0">
      <Header />
      <div className='min-h-[90vh]'>
        <Outlet />
      </div>
      <Footer />
      <MobileNavigation />
    </main>
  );
}

export default App;
