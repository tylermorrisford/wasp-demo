import { Logo } from './Logo';
import './Main.css';

export const MainPage = () => {
  return (
    <div className='container'>
      <main>
        <Logo />
        <h2 className='welcome-title'>Welcome!</h2>
      </main>
    </div>
  );
};
