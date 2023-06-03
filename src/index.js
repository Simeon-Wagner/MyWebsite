import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/mainpages/Home';
import Blog from './components/mainpages/Blog';
import Projects from './components/mainpages/Projects';
import Impressum from './components/mainpages/Impressum';
import {
    createBrowserRouter,
    RouterProvider,
    Route,
} from 'react-router-dom';


const router = createBrowserRouter([
    {
        path: "MyWebsite",
        element: <Home/>,
    },

    {
        path: "MyWebsite/blog",
        element: <Blog/>,
    },

    {
        path: "MyWebsite/projects",
        element: <Projects/>,
    },
    {
        path: "MyWebsite/impressum",
        element: <Impressum/>,
    }


])

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <RouterProvider router={router}/>
)