import React from 'react'
import ReactDOM from 'react-dom/client'
import "./style.css"
import { ProductManagement } from './ProductManagement/Main'
import { CategoryManagement } from './CategoryManagement/Main'
import { POScreen } from './POScreen/Main'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* <POScreen /> */}
    {/* <ProductManagement /> */}
    <CategoryManagement />
  </React.StrictMode>,
)
