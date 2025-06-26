export const ModalAddProduct = () => {
    return <>
        <div className="fixed top-0 left-0 w-screen h-screen bg-[#00000041] z-[100]"/>


        <div className={`
            fixed translate-x-[-50%] top-[20%] left-[50%] z-[120]
            bg-white font-[Montserrat] py-6 px-10 pb-8 w-[500px] rounded-md
            flex flex-col gap-4
        `}>
            <div className="flex justify-between">
                <h2 className="font-medium text-xl">Añadir Producto</h2>
                
                <button className="text-[#686868]"><i className="fa-solid fa-xmark text-xl"/></button>
            </div>

            <div className="flex flex-col">
                <div className="flex flex-col">
                    <input onChange={()=>{}} className="border-b-2 border-[#d5e0e0] px-1 py-1 outline-none focus:border-[#7e9292] transition-base" value={"Cañuelas"}/>
                    {/* <input onChange={()=>{}} className="border-b-2 border-[#d5e0e0] px-4 py-2 outline-none focus:border-[#7e9292] transition-base bg-[#d5e0e0] rounded-md" value={"Aceite"}/> */}

                    <div className="relative w-full hidden">
                    {/* <div className="relative w-full"> */}
                        <div className="flex flex-col items-start absolute top-0 bg-white w-full rounded-md px-4 pb-4 pt-2 text-[#7e9292] shadow-md">
                            <button className="px-4 py-1.5 w-full text-left transition-base hover:bg-[#d5e0e0] hover:text-[#1f1f1f] rounded-md">Cañuelas Aceite 520ml</button>
                            <button className="px-4 py-1.5 w-full text-left transition-base hover:bg-[#d5e0e0] hover:text-[#1f1f1f] rounded-md">Cañuelas Aceite 1.5l</button>
                            <button className="px-4 py-1.5 w-full text-left transition-base hover:bg-[#d5e0e0] hover:text-[#1f1f1f] rounded-md">Cañuelas Harina 000 1kg</button>
                            <button className="px-4 py-1.5 w-full text-left transition-base hover:bg-[#d5e0e0] hover:text-[#1f1f1f] rounded-md">Cañuelas Harina 0000 1kg</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex gap-4 justify-end">
                <button className="transition-base rounded-md w-[140px] text-[#7e9292] px-2 py-2 active:brightness-[.90] active:shadow-inner hover:bg-[#d5e0e0] hover:text-[#3d4646] hover:shadow-none">Cancelar</button>
                <button className="transition-base rounded-md w-[140px] bg-[#008080] text-white px-2 py-2 shadow active:brightness-[.90] active:shadow-inner hover:brightness-95 hover:shadow-none">Añadir</button>
            </div>

        </div>
    </>
}