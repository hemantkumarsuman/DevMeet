import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addFeed } from '../utils/feedSlice'

const Feed = () => {

  const feed = useSelector(store=>store.feed);
  const dispatch = useDispatch();

  const getFeed = async ()=>{
    if(feed) return;

    const res = await axios.get('https://dummyjson.com/users');
    console.log(res.data.users);
    
    dispatch(addFeed(res.data.users));
  }

  useEffect(()=>{
    getFeed();
  },[])

  return (
    <div>Feed</div>
  )
}

export default Feed