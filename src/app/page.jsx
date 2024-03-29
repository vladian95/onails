import Header from './components/header/Header';
import Topbar from './components/topbar/Topbar';
import About from './components/about/About';
import School from './components/school/school';
import Cards from './components/cards/Cards';
import Inquiry from './components/inquiry/Inquiry';

import Contact from './components/contact/Contact';
import './page.css';

export default function Home() {
  return (
    <main className="main">
      <Topbar />
      <Header />
      <About />
      <School />
      <Cards />
      <Inquiry />
      <Contact />
    </main>
  );
}
