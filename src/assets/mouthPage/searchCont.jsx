import React from 'react'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MinimumDistanceSlider from './AppSlider'


createRoot(document.getElementById("slidero")).render(
  <StrictMode>
    <MinimumDistanceSlider />
  </StrictMode>,
)