export const ModalPrintLastTicket = () => {
    return <>
        <div className="fixed top-0 left-0 w-screen h-screen bg-[#00000041] z-[100]"/>


        <div className={`
            fixed translate-x-[-50%] top-[20%] left-[50%] z-[120]
            bg-white font-[Montserrat] py-6 px-10 pb-8 w-[500px] rounded-md
            flex flex-col gap-2
        `}>
            <div className="flex justify-between items-center gap-4">
                <h2 className="font-medium text-xl">Imprimir Ultimo Ticket</h2>
                
                <button className="text-[#686868]"><i className="fa-solid fa-xmark text-xl"/></button>
            </div>

            <div className="flex flex-col">
                <p>¿Seguro que quieres imprimir el ultimo ticket?</p>
            </div>

            <div className="flex gap-4 justify-end mt-2">
                <button className="transition-base rounded-md w-[140px] text-[#7e9292] px-2 py-2 active:brightness-[.90] active:shadow-inner hover:bg-[#d5e0e0] hover:text-[#3d4646] hover:shadow-none">Cancelar</button>
                <button className="transition-base rounded-md w-[140px] bg-[#008080] text-white px-2 py-2 shadow active:brightness-[.90] active:shadow-inner hover:brightness-95 hover:shadow-none">Imprimir</button>
            </div>

        </div>
    </>
}