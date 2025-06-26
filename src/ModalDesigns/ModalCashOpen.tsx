export const ModalCashOpen = () => {
    return <>
        <div className="fixed top-0 left-0 w-screen h-screen bg-[#00000041] z-[100]"/>


        <div className={`
            fixed translate-x-[-50%] top-[20%] left-[50%] z-[120]
            bg-white font-[Montserrat] py-6 px-10 pb-8 w-[500px] rounded-md
            flex flex-col gap-4
        `}>
            <div className="flex justify-between items-center">
                <h2 className="font-medium text-xl">Abrir Caja</h2>
                
                <button className="text-[#686868]"><i className="fa-solid fa-xmark text-xl"/></button>
            </div>

            <div className="flex flex-col">
                <div className="flex flex-col gap-4">
                    <div className="flex w-full gap-4">
                        <div className="flex flex-col">
                            <label className="text-sm font-medium px-1">Billetes de 10</label>
                            <input onChange={()=>{}} className="w-full border-b-2 border-[#d5e0e0] px-1 py-1 outline-none focus:border-[#7e9292] transition-base" value={"0"}/>
                        </div>

                        <div className="flex flex-col">
                            <label className="text-sm font-medium px-1">Billetes de 20</label>
                            <input onChange={()=>{}} className="w-full border-b-2 border-[#d5e0e0] px-1 py-1 outline-none focus:border-[#7e9292] transition-base" value={"3"}/>
                        </div>
                        
                    </div>
                    
                    <div className="flex w-full gap-4">
                        <div className="flex flex-col">
                            <label className="text-sm font-medium px-1">Billetes de 50</label>
                            <input onChange={()=>{}} className="w-full border-b-2 border-[#d5e0e0] px-1 py-1 outline-none focus:border-[#7e9292] transition-base" value={"1"}/>
                        </div>

                        <div className="flex flex-col">
                            <label className="text-sm font-medium px-1">Billetes de 100</label>
                            <input onChange={()=>{}} className="w-full border-b-2 border-[#d5e0e0] px-1 py-1 outline-none focus:border-[#7e9292] transition-base" value={"22"}/>
                        </div>
                    </div>
                    
                    <div className="flex w-full gap-4">
                        <div className="flex flex-col">
                            <label className="text-sm font-medium px-1">Billetes de 200</label>
                            <input onChange={()=>{}} className="w-full border-b-2 border-[#d5e0e0] px-1 py-1 outline-none focus:border-[#7e9292] transition-base" value={"9"}/>
                        </div>

                        <div className="flex flex-col">
                            <label className="text-sm font-medium px-1">Billetes de 500</label>
                            <input onChange={()=>{}} className="w-full border-b-2 border-[#d5e0e0] px-1 py-1 outline-none focus:border-[#7e9292] transition-base" value={"12"}/>
                        </div>
                    </div>
                    
                    <div className="flex w-full gap-4">
                        <div className="flex flex-col w-full">
                            <label className="text-sm font-medium px-1">Billetes de 1000+</label>
                            <input id="bill1000" onChange={()=>{}} className="w-full border-b-2 border-[#d5e0e0] px-1 py-1 outline-none focus:border-[#7e9292] transition-base" value={"18"}/>
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