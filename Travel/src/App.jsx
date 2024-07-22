
import './App.css'
import Component from './Component'
import datas from './data'
function App() {
  const data = datas.map((data)=>{
    return(
      <Component
      key={data.id}
      image={data.image}
      title={data.title}
      location={data.location}
      Googlelink={data.googlelink}
      Google={data.google}
      startdate={data.startdate}
      enddate={data.enddate}
      description={data.description}
      />
    )
  })

  return (
    <>
      <section className='w-[550px] flex flex-col justify-center'>
      <nav className='bg-[#F55A5A] flex items-center flex-row w-[550px] h-[55px] justify-center gap-1 font-medium'>
       <img src="/Fill 213.svg" alt=""className='size-5' />
       <p className='text-white'>my travel journal.</p>
      </nav>
     {data}
      </section> 
    </>
  )
}

export default App
