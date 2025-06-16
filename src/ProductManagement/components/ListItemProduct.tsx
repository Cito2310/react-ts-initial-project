import { useEffect, useRef, useState } from "react";
import { StockBar } from "./StockBar";

interface props {
    name: string;
    category: string;
    section: string;
    stock: [number, number];
    price: number;
    location: string;
}


export const ListItemProduct = ({ category, section, name, price, stock, location }: props) => {
    const [height, setHeight] = useState(0)
    const toggleDetailsMenu = () => {
        if ( height === 0 ) setHeight(310);
        if ( height !== 0 ) setHeight(0);
    }

    return <>
        <tr className={`${ height ? null : "border-b" } border-[#7e9292]`}>
                <td className="px-4 py-4 font-medium">{name}</td>
                <td className="relative mx-2"><div className="flex ">
                    <p className="font-medium rounded-md text-[#7e9292] bg-[#d5e0e0] text-center min-w-[100px] py-0.5 text-sm">{category}</p>
                </div></td>
                <td className="font-medium mx-2 text-[#7e9292]">{section}</td>
                <td className="font-medium mx-2 text-[#7e9292]">{location}</td>
                <td className="font-medium mx-2">${price.toLocaleString("es-ES")}</td>
                <StockBar currentStock={stock[0]} lowStock={stock[1]} />
                <td>
                    <button 
                    onClick={toggleDetailsMenu}
                    className="
                    rounded-full bg-[#f7f7f7] flex aspect-square p-3 justify-center
                    hover:shadow hover:brightness-90 transition-base
                    "><i className="fa-solid fa-ellipsis"></i></button>
                </td>
        </tr>

        <tr className="">
            <td colSpan={10}>
                <div style={{height}} className={`
                    ${height !== 0 ? "px-6 py-5" : ""}
                    bg-white transition-base overflow-hidden flex flex-col shadow-md shadow-[#8f8f8f] rounded-b-md gap-8`}>

                        <div className="flex gap-8">
                            <div className="flex flex-col gap-4 w-[40%]">
                                <div className="flex flex-col">
                                    <label className="text-sm font-medium px-1">Nombre</label>
                                    <input onChange={()=>{}} className="border-b-2 border-[#d5e0e0] px-1 py-1 outline-none focus:border-[#7e9292] transition-base" value={"Aceite de Girasol"}/>
                                </div>

                                <div className="flex flex-row gap-4">
                                    <div className="flex flex-col w-full">
                                        <label className="text-sm font-medium px-1">Categoria</label>
                                        <input onChange={()=>{}} className="border-b-2 border-[#d5e0e0] px-1 py-1 outline-none focus:border-[#7e9292] transition-base" value={"Aceite"}/>
                                    </div>
                                    <div className="flex flex-col w-full">
                                        <label className="text-sm font-medium px-1">Subcategoria</label>
                                        <input onChange={()=>{}} className="border-b-2 border-[#d5e0e0] px-1 py-1 outline-none focus:border-[#7e9292] transition-base" value={"Aceite de Girasol"}/>
                                    </div>
                                </div>

                                <div className="flex flex-row gap-4">
                                    <div className="flex flex-col w-full">
                                        <label className="text-sm font-medium px-1">Marca</label>
                                        <input onChange={()=>{}} className="border-b-2 border-[#d5e0e0] px-1 py-1 outline-none focus:border-[#7e9292] transition-base" value={"Cañuelas"}/>
                                    </div>

                                    <div className="flex flex-col">
                                        <label className="text-sm font-medium px-1">Tamaño</label>
                                        <div className="flex">
                                        <input onChange={()=>{}} className="border-b-2 border-[#d5e0e0] px-1 py-1 outline-none focus:border-[#7e9292] transition-base w-16 text-right" value={"100"}/>
                                        <select defaultValue={"g"} className="h-full border-b-2 border-[#d5e0e0] py-[6px] outline-none focus:border-[#7e9292] transition-base">
                                            <option value={"g"}>g</option>
                                            <option value={"kg"}>kg</option>
                                            <option value={"l"}>l</option>
                                            <option value={"u"}>u</option>
                                        </select>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="flex flex-col gap-4 w-[15%]">
                                <div className="flex flex-col">
                                    <label className="text-sm font-medium px-1">Precio</label>
                                    <div className="flex flex-row">
                                        <span className="border-b-2 py-1 px-1 border-[#d5e0e0]">$</span>
                                        <input onChange={()=>{}} className="max-w-[100px] border-b-2 border-[#d5e0e0] px-1 py-1 outline-none focus:border-[#7e9292] transition-base" value={"5000"}/>
                                        <span className="border-b-2 border-[#d5e0e0] py-1 px-1 text-[#79B26A] font-medium text-sm">105%</span>
                                    </div>
                                
                                </div>
                                <div className="flex flex-col w-full">
                                    <label className="text-sm font-medium px-1">Coste</label>
                                    <div className="relative flex flex-col">
                                        <span className="absolute  px-1 py-1 w-6 ">$</span>
                                        <input onChange={()=>{}} className="pl-5 py-1 border-b-2 border-[#d5e0e0] px-1 outline-none focus:border-[#7e9292] transition-base " value={"5000"}/>
                                    </div>
                                </div>
                            
                                <div className="flex flex-col">
                                    <label className="text-sm font-medium px-1">Codigo de Barra</label>
                                    <input onChange={()=>{}} className=" border-b-2 border-[#d5e0e0] px-1 py-1 outline-none focus:border-[#7e9292] transition-base" value={"770303213134"}/>
                                </div>
                            </div>


                            <div className="flex flex-col gap-4 w-[50%]">
                                <div className="flex flex-col">
                                    <label className="text-sm font-medium px-1">Fecha de Vencimiento</label>
                                    <input onChange={()=>{}} type="date" className="border-[#d5e0e0] px-1 py-1 outline-none focus:shadow-[inset_0_-2px_0_0_#7e9292] transition-base shadow-[inset_0_-2px_0_0_#d5e0e0]"/>
                                </div>

                                <div className="flex flex-row gap-4 w-full">
                                    <div className="flex flex-col w-full">
                                        <label className="text-sm font-medium px-1">Solo expuesto</label>
                                        <input onChange={()=>{}} className="w-full border-b-2 border-[#d5e0e0] px-1 py-1 outline-none focus:border-[#7e9292] transition-base" value={"23"}/>
                                    </div>

                                    <div className="flex flex-col  w-full">
                                        <label className="text-sm font-medium px-1">Poca reserva</label>
                                        <input onChange={()=>{}} className="w-full border-b-2 border-[#d5e0e0] px-1 py-1 outline-none focus:border-[#7e9292] transition-base" value={"23"}/>
                                    </div>

                                    <div className="flex flex-col  w-full">
                                        <label className="text-sm font-medium px-1">Muy poco</label>
                                        <input onChange={()=>{}} className="w-full border-b-2 border-[#d5e0e0] px-1 py-1 outline-none focus:border-[#7e9292] transition-base" value={"23"}/>
                                    </div>
                                </div>

                                <div className="flex flex-row gap-4">
                                    
                                    <div className="flex flex-col w-full">
                                        <label className="text-sm font-medium px-1">Stock actual</label>
                                        <input onChange={()=>{}} className="border-b-2 border-[#d5e0e0] px-1 py-1 outline-none focus:border-[#7e9292] transition-base" value={"23"}/>
                                    </div>

                                    <div className="flex flex-col w-full">
                                        <label className="text-sm font-medium px-1">Tipo de Producto</label>
                                        <select defaultValue={"unidad"} className="h-full border-b-2 border-[#d5e0e0] py-[6px] outline-none focus:border-[#7e9292] transition-base">
                                            <option value={"unidad"}>Unidad</option>
                                            <option value={"por-peso"}>Por Peso</option>
                                        </select>
                                    </div>

                                </div>

                            </div>

                        </div>

                        <div className="flex gap-4 justify-end">
                            <button className="w-[200px] active:brightness-[.90] hover:brightness-95 transition-base font-medium bg-[#ffffff] border-2 border-[#7e9292] text-[#7e9292] rounded-md py-1.5 px-4  shadow-[#747474] flex gap-1 justify-center items-center">
                                Cancelar
                            </button>
                            <button className="w-[200px] active:brightness-[.90] hover:brightness-95 transition-base bg-[#DD656F] border border-[#D9545F] text-[#fff] rounded-md py-1.5 px-4  shadow-[#747474] flex gap-1 justify-center items-center">
                                Eliminar Producto
                            </button>
                            <button className="w-[200px] active:brightness-[.90] hover:brightness-95 transition-base bg-[#008080] border border-[#007070] text-[#fff] rounded-md py-1.5 px-4 flex gap-1 justify-center items-center">
                                Editar Producto
                            </button>
                        </div>
                </div>
            </td>
        </tr>
    </>
}