import { useState } from "react";

interface props {
    label: string;
    options: string[];
}

export const ButtonFilter = ({ label, options }: props) => {
    const [isActive, setisActive] = useState(false);
    const toggleIsActive = () => {
        setisActive(!isActive)
    }

    const [selectedOption, setSelectedOption] = useState("");
    const onSelectOption = (option: string) => {
        setSelectedOption(option);
    }

    return (
        <div className="relative">
            <button onClick={toggleIsActive} className="bg-white border rounded-md py-0.5 px-4 shadow shadow-[#74747431] flex gap-1 items-center">{label} <i className="fa-solid fa-angle-down text-sm"></i></button>
            {
                isActive ?
                <div className="absolute min-w-[200px] mt-1 bg-[#f3f3f3] flex flex-col rounded shadow-md">{options.map((data)=>
                    <button onClick={()=>onSelectOption(data)} className="text-sm px-2 py-1 bg-inherit hover:brightness-95 transition-base rounded">{data}</button>)}</div>
                : null
            }
        </div>

    )
}