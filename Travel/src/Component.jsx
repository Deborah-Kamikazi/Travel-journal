// eslint-disable-next-line react/prop-types
function Component({image,title, location,Googlelink,Google, startdate,enddate,description}){
    return (
      <section className='px-10'>
         <div className='flex  mt-5' >
            <div className='size-96'> 
              <img src={image} alt="" className='object-cover' />
              </div>
            <div className='mt-4'>
                <div className='flex  '>
                  <img src={Google} alt=""  />
                  <p className=''>{location}</p>
                  <a href={Googlelink} className='underline text-[#918E9B]'>View on Google Map</a>
                </div>
                 <p className='text-3xl font-bold'>{title}</p>
                 <p className='font-semibold mt-5'>{`${startdate}-${enddate}`} </p>
                 <span className=' text-sm'>{description}</span>
            </div>
         </div>
      </section>

    )
}

export default Component;

