import { Separator } from "@radix-ui/react-separator"
import Link from "next/link"
import { Avatar } from "@mui/material"

export const BusinessStarted = () => {
    const business_Started = [
        {
            logo: '/BusinessBrander.svg',
            name: 'BusinessBrander',
            link: 'http://businessbrander.online/',
            grossProfit: '$70K/GrossProfit',
        },
    ];

    const styleForLogo = {
        width: {
            xs: 50,
            sm: 100,
            md: 100,
        },
        height : {
            xs: 50,
            sm: 100,
            md: 100,
        }
    }
    return (
        // business i worked with
        <div className="text-center">

            <h1 className="pb-4 font-bold tracking-tight text text-5xl mt-20
            lg:text-6xl">Business ive Started </h1>
            <div className="flex items-center justify-center">
                <Separator className="mt-3 bg-slate-100/20 h-0.5 w-40"/>
            </div>
            <div className="flex items-center justify-center mx-auto sm:space-x-4 lg:space-x-8">
                {business_Started.map((Business, index) => (
                    <div key={index} className="mt-10 flex "> 
                        <div className="flex flex-col items-center">
                            <Link href={Business.link}/>
                                <Avatar sx={styleForLogo} src={Business.logo} alt={Business.name}  /> 
                            <h1 className="font-semibold text-xl mt-4">
                                {Business.name}
                            </h1>

                            <p className="text-xl mt-2 font-semibold">{Business.grossProfit}</p>
    
                        </div>
                    </div>
                ))}
            </div>
        </div>

        
    )
}