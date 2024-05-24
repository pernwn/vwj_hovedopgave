
import ClientRender from './components/clientrender';
import Hero from './components/hero';
import CircleCard from './components/intro';
import Benefits from './components/benefits';
import ExplainerCard from './components/info';
import Contact from './components/contact';
import Faq from './components/faq';
import Footer from './components/footer';


export default function Page() {
  return (
    <ClientRender>
      <main className="flex-grow">
        <Hero />
        <CircleCard />
        <Benefits />
        <ExplainerCard />
        <Contact />
        <Faq />
        <Footer />
      </main>
</ClientRender>
  );
};

