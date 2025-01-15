import { Badge } from "../../components/ui/badge"
import { Pin } from 'lucide-react'

export default function BlogPost() {
  return (
    <article className="border rounded-lg p-6">
      <div className="flex items-center gap-2 mb-4">
        <Pin className="w-4 h-4 text-gray-500" />
        <span className="text-sm text-gray-500">Pinned Cheep</span>
      </div>
      
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-full bg-gray-200" />
        <div>
          <div className="flex items-center gap-2">
            <span className="font-semibold">Username</span>
            <Badge variant="secondary">✨</Badge>
          </div>
          <span className="text-sm text-gray-500">20 Jan 2023</span>
        </div>
      </div>

      <Badge className="mb-4 bg-gray-100 text-gray-600 hover:bg-gray-200">
        ✨ Feelin' fresh
      </Badge>

      <h2 className="text-xl font-bold mb-2">Hello World!</h2>
      <p className="text-gray-600">
        This is my site where I try and post about what I'm up to and how to do
        things with code. You can follow along with RSS by hitting the "Follow"
        button up above. Or if you're only interested in stuff I wrote about, check
        out /writing.
      </p>
    </article>
  )
}

