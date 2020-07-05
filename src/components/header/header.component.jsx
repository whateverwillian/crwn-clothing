import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import { selectCartHidden } from '../../redux/cart/cart.selector';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import './header.styles.scss';

import { ReactComponent as Logo } from '../../assets/crown.svg'

import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { OptionDiv, OptionLink } from './header.styles';

const Header = ({ currentUser, hidden }) => (
  <div className='header'>
    <Link to='/'>
      <Logo />
    </Link>

    <div className='options'>
      <OptionLink>
        SHOP
      </OptionLink>
      <OptionLink className='option' to='/shop'>
        CONTACT
      </OptionLink>

      {
        currentUser ?
        (<OptionDiv onClick={() => auth.signOut()}>SIGN OUT</OptionDiv>)
        :
        (<OptionLink to='/sign'>SIGN IN</OptionLink>)
      }

      <CartIcon />
    </div>
    {
      hidden ? null :
      <CartDropdown />
    }
  </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);