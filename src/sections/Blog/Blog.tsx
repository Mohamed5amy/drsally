import { blogs } from "@/data/blogs"
import Image from "next/image"
import Similar from "./Similar"


const Blog = ({id} : {id : number}) => {

    const blog = blogs.find(blog => blog.id == id)
    
  return (
    <div className="py-16 px-0 lg:px-32">
        <h2 className="text-5xl text-[#1C2C2D] font-bold leading-[50px]">{blog?.title}</h2>
        {blog?.date && <p className="mt-4 mb-12"> {blog?.date} </p>}
        {blog?.image && <div className={`h-[${500}px] rounded-lg overflow-hidden mb-14`}>
            <Image src={blog?.image || ""} alt="Image title" className="w-full h-full object-cover" width={1500} height={550} />
        </div>}
        {/* Paragraphs */}
        <div className="flex flex-col gap-4">
        {blog?.paragraphs?.map((p , i) => {
            return (
                <div key={i}>
                    {p.title && <h3 className="text-[32px] font-bold mt-10 mb-4">{p.title}</h3>}
                    {p.description && <p className="text-xl text-secondaryText">{p.description}</p>}
                    {p.image && <div className="h-[500px] rounded-lg overflow-hidden mt-10">
                        <Image src={p.image} alt="Image title" className="w-full h-full object-cover" width={1500} height={550} />
                    </div>}
                    {p.link && <a href={p.link} target="_blank" className="underline transition-colors hover:text-secondary"> {p.link} </a> }
                </div>
            )
        })}
        </div>
        {/* Similar */}
        <Similar id={id} />
    </div>
  )
}

export default Blog