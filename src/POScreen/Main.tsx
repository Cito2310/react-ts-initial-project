import { SectionSidebar } from "./components/SectionSidebar"
import { SectionSumProduct } from "./components/SectionSumProduct"
import { Topbar } from "./components/Topbar"

export const POScreen = () => {
    return (
        <div className="font-[Montserrat] flex">
            <Topbar />

            <SectionSidebar />

        
            <SectionSumProduct />
        </div>
    )
}