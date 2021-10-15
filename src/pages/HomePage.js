import Header from '../components/Header';
import MainSlider from '../components/MainSlider';
import About from '../components/About';
import BookNow from '../components/BookNow';
import Download from '../components/Download';
import VideoSection from '../components/VideoSection';
import Footer from '../components/Footer';

const HomePage = () => {
  return(
    <div className='homepage'>
      <Header active="home" />
      <MainSlider />
      <About />
      <BookNow />
      <Download />
      <VideoSection />
      <Footer />
    </div>
  )
}

export default HomePage;
