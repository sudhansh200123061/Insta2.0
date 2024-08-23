import React, { useEffect, useState } from 'react'
import Post from "./Post"
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { db } from '../firebase';

function Posts() {
    const [posts, setposts] = useState([]);

    useEffect(()=>
        onSnapshot(query(collection(db, 'posts'), orderBy('timestamp', 'desc')), (snapshot) =>{
            setposts(snapshot.docs);
        })
    ,[db]
    );


  return (
    <div>
        {posts.map((post) => (
            <Post key={post.id}
                id = {post.id}
                username={post.data().username}
                userImage={post.data().profileImg}
                img={post.data().image}
                caption={post.data().caption}
            />
        ))}

    </div>
  )
}

export default Posts;