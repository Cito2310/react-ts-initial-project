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
import { ModalPrintLastTicket } from './ModalDesigns/ModalPrintLastTicket'
import { ModalMakeReport } from './ModalDesigns/ModalMakeReport'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* TODOS */}
    <ModalMakeReport />
    {/* TODOS ModalViewLastSells */}
    {/* TODOS ModalDisconts */}
    {/* TODOS ModalMakeReport */}
    {/* TODOS ModalRegisterSpending */}

    {/* <ModalPrintLastTicket /> */}
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
