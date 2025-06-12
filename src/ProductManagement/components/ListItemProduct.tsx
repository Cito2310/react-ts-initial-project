import { useEffect, useRef, useState } from "react";

interface props {
    name: string;
    category: string;
    section: string;
    stock: [number, number];
    price: number;
    location: string;
}

interface propsStockBar {
    lowStock: number
    currentStock: number
}

const dataStock = {
    goodStock: ["#79B26A", "#E3FCDD", "Alto"],
    lowStock: ["#d3d679", "#edf5be", "Bajo"],
    veryLowStock: ["#e49359", "#FFD9D6", "Muy bajo"],
    outStock: ["#FFD9D6", "#dd656f", "Sin Stock"],
}

export const StockBar = ({ currentStock, lowStock }: propsStockBar) => {
    const getStatusStock = () => {
        const resultStock = currentStock / lowStock
        const statusStock = resultStock === 0 ? "outStock"
                            : resultStock <= 0.5 ? "veryLowStock"
                            : resultStock <= 1 ? "lowStock" 
                            : "goodStock"
                            
        return {
            bgColor: dataStock[statusStock][1],
            barColor: dataStock[statusStock][0],
            text: dataStock[statusStock][2],
            percentage: resultStock/2*100 > 100 ? 100 : resultStock/2*100
        }
    }


    const refBar = useRef<null | HTMLDivElement >(null);
    useEffect(() => {
        if ( refBar.current ) refBar.current.style.width = `${getStatusStock().percentage}%`
    }, [])

    return <td className="">
        
        <p className="text-sm font-medium mx-6">{currentStock} - {getStatusStock().text}</p>
        <div className="mx-5">
        <div style={{backgroundColor: getStatusStock().bgColor}} className={`w-full h-2 rounded-lg`}>
            <div ref={refBar} style={{backgroundColor: getStatusStock().barColor}} className={`transition-all h-full rounded-lg`}/>
        </div>
        </div>
    </td> 

}

export const ListItemProduct = ({ category, section, name, price, stock, location }: props) => {
    const [height, setHeight] = useState(0)

    return <>
        <tr className="border-b border-[#7e9292]">
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
                onClick={()=>setHeight(height+300)}
                className="
                rounded-full bg-[#f7f7f7] flex aspect-square p-3 justify-center
                hover:shadow hover:brightness-90 transition-base
                "><i className="fa-solid fa-ellipsis"></i></button>
            </td>
        </tr>

        <tr className="">
            <td colSpan={10}>
                <div  style={{height}} className="bg-red-400 transition-base overflow-hidden flex flex-col">
                    <input></input>
                    <input></input>
                    <input></input>
                    <input></input>
                    <input></input>
                </div>
            </td>
        </tr>
    </>
}