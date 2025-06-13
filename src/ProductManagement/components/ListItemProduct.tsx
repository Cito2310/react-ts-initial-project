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
        if ( height === 0 ) setHeight(300);
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
                    bg-white transition-base overflow-hidden flex flex-col shadow-md shadow-[#8f8f8f] rounded-b-md `}>
                    <input value={name}></input>
                    <input></input>
                    <input></input>
                    <input></input>
                    <input></input>
                </div>
            </td>
        </tr>
    </>
}