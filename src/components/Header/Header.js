import './Header.scss';
import logo from '../../assets/images/google_logo.jpg';
import help from '../../assets/icons/help.svg';
import app from '../../assets/icons/apps.svg';
import AccessModal from '../AccessModal/AccessModal';
import {useState} from 'react';


function Header({handleLargeText}) {

    const [show, setShow] = useState(false);

    return(
        <div className='header'>
            <div className='header__container--left'>
                <img className='header__logo' src={logo} alt='google logo' />
                <h3 className='header__text'>Account</h3>
                <input className='header__search' type='text' placeholder='Search Google Account'></input>
            </div>
            <div>
   
            </div>
            <div className='header__container--right'>
                <button 
                    className='header__access-button'
                    onClick={() => setShow(true)}
                ></button>
                <AccessModal
                    handleLargeText={handleLargeText}
                    show={show}
                    onClose={() => setShow(false)}
                />
                <img className='header__help' src={help} alt='question mark inside of circle' />
                <img className='header__app' src={app} alt='three by three grid of circles' />
                <div className='header__avatar'></div>
            </div>
        </div>
    );
};

export default Header;