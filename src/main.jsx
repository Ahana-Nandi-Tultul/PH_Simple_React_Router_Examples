import React from 'react'
import App from './App.jsx'
import './index.css'
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './assets/components/About/About.jsx';
import Contact from './assets/components/Contact/Contact.jsx';
import Home from './assets/components/Home/Home.jsx';
import FirstPage from './assets/components/FirstPage/FirstPage.jsx';
import Friends from './assets/components/Friends/Friends.jsx';
import FriendDetails from './assets/components/FriendDetails/FriendDetails.jsx';
import Posts from './assets/components/Posts/Posts.jsx';
import PostDetails from './assets/components/PostDetails/PostDetails.jsx';

// const router =  createBrowserRouter([
//   {
//     path: '/',
//     element: <App></App>
//   },
//   {
//     path : '/about',
//     element: <About></About>
//   },
//   {
//     path: '/contact',
//     element: <Contact></Contact>
//   }
// ]);


const router = createBrowserRouter([
    {
      path: '/',
      element: <Home></Home>,
      children : [
        {
          path: '/',
          element: <FirstPage></FirstPage>
        },
        {
          path: 'friends',
          element: <Friends></Friends>,
          loader: () => fetch('https://jsonplaceholder.typicode.com/users')
        },
        {
          path:'friend/:friendId',
          element: <FriendDetails></FriendDetails>,
          loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
        },
        {
          path: 'posts',
          element: <Posts></Posts>,
          loader: () => fetch(`https://jsonplaceholder.typicode.com/posts`)
        },
        {
          path: 'post/:postId',
          element: <PostDetails></PostDetails>,
          loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
        },
        {
          path: 'about',
          element: <About></About>
        },
        {
          path: 'contact',
          element: <Contact></Contact>
        },
        {
          path: '*',
          element: <div>404</div>
        }
      ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
