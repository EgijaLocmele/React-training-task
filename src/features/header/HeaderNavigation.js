import './HeaderNavigation.scss';
import logo from '../../assets/logo.svg';
import { NeutralColors } from '@fluentui/theme';
import { IconButton } from '@fluentui/react/lib/Button';

export function HeaderNavigation() {
  const shoppingCart={iconName: 'ShoppingCart'};
  const hamburgerButton={iconName: 'GlobalNavButton'};
  
  return (
    <header className="navigation" style={{ background: NeutralColors.gray60 }}>
      <img className="navigation__logo" src={logo} alt="logo"></img>
      <div className="navigation__buttons">
        <IconButton iconProps={shoppingCart} className="navigation__buttons-style"/>
        <IconButton iconProps={hamburgerButton} className="navigation__buttons-style"/>
      </div>
    </header>
  )
}