import { useNavigate } from 'react-router-dom';

import img404 from '../../assets/404art.png';

import './NotFound.styles.scss';

function NotFound() {
  const history = useNavigate();

  function goBackToPortfolio(e) {
    e.preventDefault();
    history('/');
  };

  return (
    <div className='notfound-container'>
      <img src={img404} alt='404 Page not found' className='responsive' />
      <div className='text-wrapper'>
        <h1>Oopsy Daisy!</h1>
        <p>Don't know how you got here.</p>
        <button
          className='goBackHome'
          onClick={goBackToPortfolio}>
          Back to Home
        </button>
      </div>
    </div>
  )
}

export default NotFound;
