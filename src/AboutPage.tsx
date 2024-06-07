import { Logo } from './Logo';
import { Layout } from './Components/Layout';
import './Main.css';

export const AboutPage = () => {
    return (
        <div className='container'>
            <main>
                <Logo />
                <h2 className='welcome-title'>About</h2>
                <p className='fullWidth'>Dancing Bees Apothecary is a medical cannabis processing establishment with an “Intent to License” in Salt Lake City, Utah.</p>
            </main>
        </div>
    );
};
