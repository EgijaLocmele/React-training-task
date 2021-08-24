import React from 'react'
import { IconButton } from '@fluentui/react/lib/Button'
import logo from '../../assets/logo.svg'
import './HeaderNavigation.scss'

export function HeaderNavigation() {
  const shoppingCart = { iconName: 'ShoppingCart' }
  const hamburgerButton = { iconName: 'GlobalNavButton' }

  return (
    <header className="navigation">
      <img className="navigation__logo" src={logo} alt="logo" />
      <div className="navigation__buttons">
        <IconButton iconProps={shoppingCart} className="navigation__icon" />
        <IconButton iconProps={hamburgerButton} className="navigation__icon" />
      </div>
    </header>
  )
}
