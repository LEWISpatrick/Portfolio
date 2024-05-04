import { Separator } from "@radix-ui/react-separator"
import Link from "next/link"
import { Avatar } from "@mui/material"

export const BusinessWorked = () => {
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
    const Business_worked = [
        {
            logo: '/apple.jpeg',
            name: 'Apple',
            link: 'https://www.apple.com/',
            jobTitle: 'I HAVE NEVER WORKED HERE ITS JUST AN EXAMPLE',
            salary: '$40K/Year',
            
        },
        {
            logo: '/google.webp',
            name: 'Google',
            link: 'https://www.google.com/',
            jobTitle: 'I HAVE NEVER WORKED HERE ITS JUST AN EXAMPLE',
            salary: '$100K/Year',
            
        },
        {
            logo: 'microsoft.jpeg',
            name: 'Microsoft',
            link: 'https://www.microsoft.com/',
            jobTitle: 'I HAVE NEVER WORKED HERE ITS JUST AN EXAMPLE',
            salary: '$200K/Year',
            
        },
        {
            logo: 'openAi.png',
            name: 'openAi',
            link: 'https://openai.com/',
            jobTitle: 'I HAVE NEVER WORKED HERE ITS JUST AN EXAMPLE',
            salary: '$500K/Year',
            
        },


    ]
    const business_Started = () => [
        {
            logo: '/BusinessBrander.png',
            name: 'BusinessBrander',
            link: 'http://businessbrander.online/',
            grossProfit: '72.250$USD',
            
        },
    ]
    return (
        // business i worked with
        <div className="text-center">
            {/*business i worked with */}
            <h1 className="pb-4 font-bold tracking-tight text text-5xl
            lg:text-6xl">Business ive Worked With</h1>
            <div className="flex items-center justify-center">
                <Separator className="mt-3 bg-slate-100/20 h-0.5 w-40"/>
            </div>
            <div className="flex items-center justify-center mx-auto sm:space-x-4 lg:space-x-8">
                {Business_worked.map((Business, index) => (
                    <div key={index} className="mt-10 flex "> 
                        <div className="flex flex-col items-center">
                            <Link href={Business.link}/>
                                <Avatar sx={styleForLogo} src={Business.logo} alt={Business.name}  /> 
                            <h1 className="font-semibold text-xl mt-4">
                                {Business.name}
                            </h1>

                            <p className="text-xl mt-2">{Business.jobTitle}</p>
                            <p className="text-xl mt-2">{Business.salary}</p>
                        </div>
                    </div>
                ))}
            </div>

        </div>

        
    )
}