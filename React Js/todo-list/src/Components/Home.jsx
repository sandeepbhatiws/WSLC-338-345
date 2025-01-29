import React from 'react'
import LeftSide from './LeftSide'
import RightSide from './RightSide'

export default function Home() {
    return (
        // partial: index.partial.html
        <div class="bg-zinc-950 text-white min-h-screen">
            <div class="container mx-auto px-4 py-8 max-w-5xl">
                {/* <!-- Profile Section --> */}
                <div class="grid md:grid-cols-3 gap-6">
                    {/* <LeftSide/> */}

                    {/* <!-- Tasks Section --> */}
                    <RightSide/>
                </div>
            </div>

            
        </div>
    )
}
