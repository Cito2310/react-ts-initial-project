import { useEffect, useRef, useState } from "react";

interface props {
    name: string;
    section: string;
    subcategories: {name: string, brands: string[]}[]
}


export const ListItemCategory = ({ section, name }: props) => {
    const [height, setHeight] = useState(0)
    const toggleDetailsMenu = () => {
        if ( height === 0 ) setHeight(300);
        if ( height !== 0 ) setHeight(0);
    }

    return <>
        <tr className={`${ height ? null : "border-b" } border-[#7e9292]`}>
            <td className="px-4 py-4 font-medium">{name}</td>
            <td className="font-medium mx-2 text-[#7e9292]">{section}</td>
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