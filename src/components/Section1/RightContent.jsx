import RightCard from "./RightCard"

const RightContent = (props) => {
  console.log(props)
  return (
    <div id='right' className='h-full flex p-6 w-2/3 gap-1.5 overflow-x-auto flex-nowrap'>
       {props.users.map(function(ele , idx){
        return <RightCard key={idx} id={idx} intro={ele.intro} color={ele.color} img={ele.img} tag={ele.tag}/>
       })}
    </div>
  )
}

export default RightContent
 