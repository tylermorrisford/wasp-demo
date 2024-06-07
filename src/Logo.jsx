import './Main.css';
import DBALogoSvg from './dba_logo.svg';

export const Logo = () => {
  return (
    <div className='logo' style={{ display: 'flex' }}>
      <img
        src={DBALogoSvg}
        alt='Dancing Bees Apothecary Logo'
        style={{ placeSelf: 'center' }}
      />
    </div>
  );
};
