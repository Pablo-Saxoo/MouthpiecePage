import React from 'react'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ControlledCheckbox from './AppCheckboxes'


createRoot(document.getElementById("checkero")).render(
  <StrictMode>
    <ControlledCheckbox />
  </StrictMode>,
)