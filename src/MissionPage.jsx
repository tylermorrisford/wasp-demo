import { Logo } from './Logo';
import './Main.css';

export const MissionPage = () => {
  return (
    <div className='container'>
      <main>
        <Logo />
        <h2 className='welcome-title'>Our Mission</h2>
        <p className='fullWidth'>
          Guiding the hive to holistic wellness through quality products,
          education and advocacy, Dancing Bees strives to increase access to
          quality medical cannabis for patients in Utah while positively
          affecting the opioid epidemic, social justice, mental health, gender
          equity, and community awareness.
        </p>
      </main>
    </div>
  );
};
