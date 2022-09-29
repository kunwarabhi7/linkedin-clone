import React,{useState,useEffect} from 'react'
import { FcBusinessman } from 'react-icons/fc'
import { BsImages } from 'react-icons/bs'
import { RiVideoChatFill } from 'react-icons/ri'
import { IoBagRemoveSharp } from 'react-icons/io5'
import { IoCalendarSharp } from 'react-icons/io5'
import FeedInput from './FeedInput'
import Posts from '../Posts/Posts'

const Feed = () => {
  const [input , setInput] = useState('')
    const[posts , setPosts] = useState([])

  

  const sendPostToServer = (e) => {
e.preventDefault()

}
  
  return (
    <div className=' basis-3/5 '>
      <div className='flex  border-4 h-44 p-4 m-8 bg-white'><FcBusinessman  className='ml-1 mr-[150px] mb-[10px] cursor-pointer w-20 h-20 rounded-full bg-orange-400'  />
    <form>
    <input value={input} onChange={e=>setInput(e.target.value)} className='rounded-full cursor-pointer outline hover:bg-gray-600 border-solid border-gray-300 w-[600px] p-8 h-4 -ml-10' placeholder='Post a picture from school or work' />
    <button onClick={sendPostToServer} className='hidden'>Send</button>
    </form>
      </div>
      <div className='flex flex-row justify-evenly mt-[-80px] cursor-pointer   '>
  <FeedInput title='Photo' color='blue' Icon={BsImages}/>
  <FeedInput title='Video' color='green' Icon={RiVideoChatFill}/>
  <FeedInput title='Job' color='purple' Icon={IoBagRemoveSharp}/>
  <FeedInput title='Write article' color='orange' Icon={IoCalendarSharp}/>
        </div>
        <div className='bg-white m-9 p-4  mb-[10px] border-r-[10px]'>
          {/*Posts Mapping  */}
          {posts.map(({id,data:{name,description,message,photoUrl}})=>(
            <Posts key={id} name={name} description={description} message={message} photoUrl={photoUrl} />
          ))}

        <Posts name="Abhishek Singh" description='This is sample post' message='your message goes here your message goes here your message goes here your message goes here your message goes here your message goes here your message goes here your message goes here your message goes here your message goes here your message goes here your message goes here your message goes here '/>
        </div>
    </div>
  )
}

export default Feed
