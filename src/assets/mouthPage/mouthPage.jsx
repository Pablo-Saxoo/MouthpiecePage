import React from 'react'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ContApp from './ContApp'


createRoot(document.getElementsByClassName("productsContainer")[0]).render(
  <StrictMode>
    <ContApp />
  </StrictMode>,
)