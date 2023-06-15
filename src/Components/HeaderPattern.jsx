import React from 'react'

import desktopPattern from '../assets/images/bg-header-desktop.svg';
import modilePattern from '../assets/images/bg-header-mobile.svg'

function HeaderPattern() {
  return (
    <div>
      <img className="hidden sm:block w-full" src={desktopPattern} alt="pattern" />
      <img className="sm:hidden w-full" src={modilePattern} alt="pattern" />
    </div>
  )
}

export default HeaderPattern