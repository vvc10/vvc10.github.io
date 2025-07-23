import { Star } from 'lucide-react'
import React from 'react'
import Button from '../ui/Button'

const Testinomials = () => {
    return (
        <div className='bg-zinc-950'>
            <div className="max-w-7xl bg-gradient-to-br from-zinc-950  to-zinc-900 text-white shadow-md border-t-[2px] border-t-zinc-500/30 hover:brightness-110  px-8 py-8 rounded-2xl mx-auto flex flex-col md:flex-row gap-10 md:gap-2 items-center justify-between">
                <div className="flex flex-col md:flex-row gap-5 md:gap-2 items-center space-x-3">
                    <div className="flex -space-x-2">
                        <img src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=50" alt="Customer" className="w-10 h-10 rounded-full border-2 border-zinc-600" />
                        <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=50" alt="Customer" className="w-10 h-10 rounded-full border-2 border-zinc-600" />
                        <img src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=50" alt="Customer" className="w-10 h-10 rounded-full border-2 border-zinc-600" />
                    </div>
                    <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-zinc-400 text-zinc-500" />
                        ))}
                    </div>
                    <span className="text-sm text-zinc-500 font-medium">40+ Happy Customers</span>
                </div>
                <Button
                    href="#contact"
                    className="px-8 py-3 rounded-full relative overflow-hidden bg-gradient-to-br from-zinc-100 to-zinc-700 text-zinc-900 shadow-md border-t-[2px] border-t-zinc-500 hover:brightness-110 transition-all duration-300 hover:shadow-lg"
                >
                    Be one of them
                </Button>
            </div>


        </div>
    )
}

export default Testinomials
