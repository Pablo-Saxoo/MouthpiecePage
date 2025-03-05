import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import FilterDataComponent from './FilterDataComponent'


createRoot(document.getElementById("checkero")).render(
  <StrictMode>
    <FilterDataComponent />
  </StrictMode>,
)