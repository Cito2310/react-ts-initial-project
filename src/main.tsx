import React from 'react'
import ReactDOM from 'react-dom/client'
import "./style.css"
import { ProductManagement } from './ProductManagement/Main'
import { CategoryManagement } from './CategoryManagement/Main'
import { POScreen } from './POScreen/Main'
import { ModalAddProduct } from './ModalDesigns/ModalAddProduct'
import { ModalCashSession } from './ModalDesigns/ModalCashSession'
import { ModalCashOpen } from './ModalDesigns/ModalCashOpen'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* <ModalAddProduct /> */}
    {/* <ModalCashSession /> */}
    <ModalCashOpen />


    <POScreen />
    {/* <ProductManagement /> */}
    {/* <CategoryManagement /> */}
  </React.StrictMode>,
)
