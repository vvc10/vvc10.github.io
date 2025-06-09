import { Star } from 'lucide-react'
import React from 'react'

const Testinomials = () => {
    return (
        <div>
            <div className="max-w-6xl bg- n bg-gradient-to-br from-[#7c4cff] to-[#9872ff] text-white shadow-md border-t-[2px] border-t-white/30 hover:brightness-110  px-3 py-3 rounded-lg mx-auto flex items-center justify-between">
                <div className="flex items-center space-x-3">
                    <div className="flex -space-x-2">
                        <img src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=50" alt="Customer" className="w-8 h-8 rounded-full border-2 border-white" />
                        <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=50" alt="Customer" className="w-8 h-8 rounded-full border-2 border-white" />
                        <img src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=50" alt="Customer" className="w-8 h-8 rounded-full border-2 border-white" />
                    </div>
                    <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-gray-200 text-gray-200" />
                        ))}
                    </div>
                    <span className="text-sm font-medium">40+ Happy Customers</span>
                </div>
                <button className="bg-white text-purple-600 px-4 py-2 rounded-full text-sm hover:bg-gray-100 transition-colors">
                    <a href="#contact">Become One of Them</a>
                </button>
            </div>


        </div>
    )
}

export default Testinomials
