import React from 'react'
import { Link } from 'react-router-dom'
import { Image, ImageFit } from '@fluentui/react/lib/Image'
import { IconButton } from '@fluentui/react/lib/Button'
import logo from '../../assets/logo.svg'
import './HeaderNavigation.scss'

export function HeaderNavigation() {
  const shoppingCart = { iconName: 'ShoppingCart' }
  const hamburgerButton = { iconName: 'GlobalNavButton' }

  return (
    <header className="navigation">
      <Link to={`/`} className="navigation__link">
        <Image src={logo} alt="logo" imageFit={ImageFit.contain} />
        <img />
      </Link>
      <div className="navigation__buttons">
        <IconButton iconProps={shoppingCart} className="navigation__icon" />
        <IconButton iconProps={hamburgerButton} className="navigation__icon" />
      </div>
    </header>
  )
}
