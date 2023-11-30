import Header from './components/header/Header';
import Contact from './components/contact/Contact';
import Topbar from './components/topbar/Topbar';
import './page.css';
import About from './components/about/About';

export default function Home() {
  return (
    <main className="main">
      <Topbar />
      <Header />
      <About />
      <Contact />
    </main>
  );
}
