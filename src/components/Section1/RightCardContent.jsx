const RightCardContent = (props) => {
  return (
      <div className='absolute top-0 left-0 h-full w-full p-10 flex flex-col justify-between'>
        <h1 className='bg-white text-2xl font-bold rounded-full h-10 w-10 flex justify-center items-center'>{props.id+1}</h1>
        <div>
            <p className='text-xl leading-normal text-white mb-10'>{props.intro}</p>
            <div className='flex justify-between'>
                <button style={{backgroundColor: props.color }} className=' text-white font-semibold px-8  py-2 rounded-full'>{props.tag}</button>
                <button style={{backgroundColor: props.color }} className=' text-white font-bold px-4 py-3 rounded-full'><i className="ri-arrow-right-line"></i></button>
            </div>
        </div>
      </div>
  )
}
export default RightCardContent
