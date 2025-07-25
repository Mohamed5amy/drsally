import Blog from '@/sections/Blog/Blog'

const page = async ({params} : {params : Promise<{id : number}>}) => {
  const {id} = await params
  return (
    <div className='container'>
      <Blog id={id} />
    </div>
  )
}

export default page