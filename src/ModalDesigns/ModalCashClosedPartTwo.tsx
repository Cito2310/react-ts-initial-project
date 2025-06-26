export const ModalCashClosedPartTwo = () => {
    return <>
        <div className="fixed top-0 left-0 w-screen h-screen bg-[#00000041] z-[100]"/>


        <div className={`
            fixed translate-x-[-50%] top-[10%] left-[50%] z-[120]
            bg-white font-[Montserrat] py-6 px-10 pb-8 w-[500px] rounded-md
            flex flex-col gap-4
        `}>
            <div className="flex justify-between items-center">
                <h2 className="font-medium text-xl">Resumen - Cerrar Caja</h2>
                
                <button className="text-[#686868]"><i className="fa-solid fa-xmark text-xl"/></button>
            </div>

            <div className="flex flex-col">
                <div className="flex flex-col gap-2">
                    <p className="font-medium">Monto Retirado: <b className="font-normal text-[#536464]">?</b></p>
                    <p className="font-medium">Transferencia: <b className="font-normal text-[#536464]">?</b></p>
                    <p className="font-medium">Monto En Caja Actual: <b className="font-normal text-[#536464]">$54.000</b></p>
                    
                    <p className="font-medium mt-3">Gastos: <b className="font-normal text-[#536464]">$54.000</b></p>

                    <p className="font-medium mt-3">Monto En Caja Al Iniciar Turno: <b className="font-normal text-[#536464]">$54.000</b></p>
                    <p className="font-medium">Monto Total Registrado: <b className="font-normal text-[#536464]">$54.000</b></p>


                    <h2 className="text-lg mt-2">Balance Final: <b className="font-medium text-[#79B26A]">+$1.254</b></h2>

                </div>
            </div>

            <div className="flex gap-4 justify-end">
                <button className="transition-base rounded-md w-[140px] bg-[#008080] text-white px-2 py-2 shadow active:brightness-[.90] active:shadow-inner hover:brightness-95 hover:shadow-none">Imprimir</button>
            </div>

        </div>
    </>
}