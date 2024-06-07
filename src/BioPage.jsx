import { Logo } from './Logo';
import { Layout } from './Components/Layout';
import './Main.css';

const BioContent = () => {
  return (
    <div>
      <h2 className='welcome-title'>Team Bios</h2>
      <div>
        <p>Meghan - CEO</p>
        <p>Michael (aka Duffy) - Chief Scientist</p>
        <p>Cassie - Chief Strategist</p>
      </div>
    </div>
  );
};

export const BioPage = () => {
  return (
    <div className='container'>
      <main>
        <Layout leftContent={<Logo />} rightContent={<BioContent />} />
      </main>
    </div>
  );
};
