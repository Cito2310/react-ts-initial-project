import { useEffect, useState } from "react"

export const ShowNumber = () => {
    const [currNumber, setCurrNumber] = useState<string>();
    const [timer, setTimer] = useState<number>();
    const [status, setStatus] = useState<"initial" | "reset" | "working">("initial");
    const [countNumber, setCountNumber] = useState(0);
    const [arrayNumber, setArrayNumber] = useState<string[]>([]);
    const [result, setResult] = useState(0);

    const randomNumber = () => Math.floor(Math.random()*20)+1;
    const randomBoolean = () => !!Math.round(Math.random());
    const getSymbol = (isPositive: boolean) => isPositive ? "+" : "-";

    useEffect(() => {
        if ( status === "working" ) {
            const initNumber = "+"+randomNumber();
            setCurrNumber(initNumber);
            setArrayNumber([initNumber]);
    
            setTimer(
                setInterval(()=>{
                    const newNumber = getSymbol( randomBoolean() ) + randomNumber();
                    setCurrNumber(newNumber);
                    setArrayNumber(v => [...v, newNumber]);
                    setCountNumber(v => v+1)

                }, 300)
            )

            setStatus("working")
        }

        if ( status === "reset" ) {
            const copyArray = structuredClone(arrayNumber);
            copyArray.pop()
            setResult(copyArray.reduce( ( a,b ) => a + Number(b) , 0))
        }

        return () => { clearInterval(timer) }
    }, [status])


    useEffect(() => {
        if (countNumber === 10) { 
            clearInterval(timer); 
            setCountNumber(0); 
            setStatus("reset");
        }
    }, [countNumber])
    

    return (
        <div className="rounded-full h-[90vh] aspect-square golden flex justify-center items-center">
            <div className="text-[90vh] rounded-full bg-black w-[95%] aspect-square text-white flex items-center justify-center" >

                <button onClick={()=>{ setStatus("working") }} className="font-extrabold text-[0.6em] text-golden font-sans relative left-[0.08em] top-[0.04em] hover:brightness-[.95] active:brightness-[.85] transition-base">
                    { status === "initial" && <i className="fa-solid fa-play"/> }
                </button>

                <p className="font-extrabold text-[0.5em] text-silver font-sans">
                    { status === "working" && currNumber }
                </p>

                <button onClick={()=>{ setStatus("working") }} className="font-extrabold text-[0.5em] text-golden font-sans hover:brightness-[.95] active:brightness-[.85] transition-base">
                    { status === "reset" && result }
                </button>
            </div>
        </div>
    )
}