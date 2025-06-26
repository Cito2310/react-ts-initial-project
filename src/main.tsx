import React from 'react'
import ReactDOM from 'react-dom/client'
import "./style.css"
import { ProductManagement } from './ProductManagement/Main'
import { CategoryManagement } from './CategoryManagement/Main'
import { POScreen } from './POScreen/Main'
import { ModalAddProduct } from './ModalDesigns/ModalAddProduct'
import { ModalCashSession } from './ModalDesigns/ModalCashSession'
import { ModalCashOpen } from './ModalDesigns/ModalCashOpen'
import { ModalCashClosedPartOne } from './ModalDesigns/ModalCashClosedPartOne'
import { ModalCashClosedPartTwo } from './ModalDesigns/ModalCashClosedPartTwo'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* TODOS */}
    {/* TODOS ModalPrintLastTicket */}
    {/* TODOS ModalViewLastSells */}
    {/* TODOS ModalDisconts */}
    {/* TODOS ModalViewPrice */}
    {/* TODOS ModalMakeReport */}

    {/* <ModalAddProduct /> */}
    {/* <ModalCashSession /> */}
    {/* <ModalCashOpen /> */}
    {/* <ModalCashClosedPartOne /> */}
    {/* <ModalCashClosedPartTwo /> */}



    <POScreen />
    {/* <ProductManagement /> */}
    {/* <CategoryManagement /> */}
  </React.StrictMode>,
)
