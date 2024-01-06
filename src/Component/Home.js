import React from 'react';
import './Home.css';
const homeObj = {
    imageUrl : "https://crowdbotics.ghost.io/content/images/2019/07/react-router.jpg",
    info: "React Router is a crucial navigation library for React applications, designed to facilitate seamless and efficient routing within Single Page Applications (SPAs). Its primary purpose is to enhance user experiences by eliminating the need for page reloads, enabling the creation of dynamic, responsive, and organized navigation structures. React Router achieves this through a declarative approach, where developers use components like BrowserRouter, Route, and Link to define routes and manage the application's state. By providing a flexible and intuitive way to handle dynamic routing, URL parameters, and nested routes, React Router emerges as an indispensable tool for building sophisticated and user-friendly web applications with React."
}

const Home = ()=> {
    return (
        <div className='homePage'>
            <h5>Welcome to React Router concept</h5>
            <img 
            src={homeObj.imageUrl} 
            alt='ReactRouter'           
            />
            <article>
                <p>{homeObj.info}</p>
            </article>
        </div>
    )
}

export default Home;