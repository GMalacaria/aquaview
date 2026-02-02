import './App.css';
import AppRouter from './routes/AppRouter';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <Header />
      <AppRouter />
      <Footer />
    </>
  );
}

export default App;
