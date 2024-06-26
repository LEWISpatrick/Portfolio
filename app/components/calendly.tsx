import { Separator } from "@radix-ui/react-separator"
import { InlineWidget } from "react-calendly"
import { useState } from 'react';
export const Calendly =() => {
    const [showWidget, setShowWidget] = useState(false);

    return (
        <div className="text-center" id='calendly'>
            <h1 className="pb-4 font-bold tracking-tight text-4xl">Ready to transform your Business? <br />
            Book a Free Coding Consultation Below!
            </h1>
              <div className="flex items-center justify-center">
                <Separator className="mt-3 bg-slate-100/20 h-0.5 w-40"/>
            </div>
            {!showWidget && (
                <button onClick={() => setShowWidget(true)} className="transition duration-150 ease-in-out font-medium rounded px-4 mt-10 py-2 text-black bg-white hover:bg-opacity-80">
                    Schedule Now
                </button>
            )}
            {showWidget && 
                <InlineWidget 
                    url="https://calendly.com/patricklewis2009/coding-consultation" 
                    styles={{height: '1000px', borderRadius: "5px"}}
                    
                />
            }
        </div>
          
    )
}