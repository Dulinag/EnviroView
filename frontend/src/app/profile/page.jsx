// pages/profile/[userId].js


"use client"

import React, { useEffect, useState } from 'react';
import ProfilePage from "../components/ProfilePage"
// import { useRouter } from 'next/router';
// import axios from 'axios';

const Profile = () => {
//   const router = useRouter();
//   const { userId } = router.query;

  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);

//   useEffect(() => {
    // const fetchData = async () => {
    //   try {
    //     // Fetch user data
    //     const userResponse = await axios.get(`API_ENDPOINT_HERE/users/${userId}`);
    //     setUser(userResponse.data);

    //     // Fetch user's posts
    //     const postsResponse = await axios.get(`API_ENDPOINT_HERE/posts?userId=${userId}`);
    //     setPosts(postsResponse.data);
    //   } catch (error) {
    //     console.error('Error fetching data:', error);
    //   }
    // };

//     if (userId) {
//       fetchData();
//     }
//   }, [userId]);

//   if (!user) {
//     return <div>Loading...</div>;
//   }

  return (
    // <div className="p-8">
    //   <div>
    //     <img src={user.avatar} alt={`${user.name}'s Avatar`} />
    //     <h2>{user.name}</h2>
    //     <p>Email: {user.email}</p>
    //   </div>

    //   <div>
    //     <h3>Posts</h3>
    //     <ul>
    //       {posts.map((post) => (
    //         <li key={post.id}>
    //           <p>{post.title}</p>
    //           <p>{post.description}</p>
    //           {/* Add more post details as needed */}
    //         </li>
    //       ))}
    //     </ul>
    //   </div>
    // </div>

<>   





<ProfilePage/>


</>



  );
};

export default Profile;
