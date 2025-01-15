import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export default function ProjectCard({ title, content, icon, image, link }) {
  return (
    <div className="relative h-[280px] w-full bg-transparent p-3 rounded-[20px] border transition-shadow duration-300 group overflow-hidden">
      <Image
        src={image || "/placeholder.svg"}
        alt={title}
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 w-full h-full z-[-1] transition-transform duration-300 group-hover:scale-110"
      />
      <div className="relative z-10 h-full flex flex-col justify-end">
        <Link href={link}>
          <h3 className="font-medium text-sm w-fit rounded-full px-3 py-1.5 bg-background/80 backdrop-blur-sm mb-0 flex items-center">
            <span className="mr-2">{icon}</span>
            {title}
            <ArrowUpRight className="ml-2 w-4 h-4" />
          </h3>
        </Link>
      </div>
    </div>
  )
}

