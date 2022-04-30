import React from 'react';

const Blogs = () => {
    return (
        <div className='text-center'>
           <h2>Difference between javascript and node js???</h2>
           <p>Javascript is a programming language that is used for writing scripts on the website.NodeJS is a Javascript runtime environment. Javascript can only be run in the browsers.We can run Javascript outside the browser with the help of NodeJS.	It is basically used on the client-side.It is mostly used on the server-side.Javascript is used in frontend development.Nodejs is used in server-side development.It is the upgraded version of ECMA script that uses Chromes V8 engine written in C++.Nodejs is written in C, C++ and Javascript.</p>
           <h2>When should you use nodejs and mongodb???</h2>
           <p>Mongodb use to stor data. nodejs use to send data from client side to database and database to client side. MongoDB represents the data as a collection of documents rather than tables related by foreign keys. This makes it possible for the varied types of data dealt over the internet to be stored decently and accessed in the web applications using Node. js.</p>
           <h2>Difference between SQL and NoSQL database???</h2>
           <p>SQL relational database management system.NoSQL Non-relational or distributed database system.SQL databases have fixed or static or predefined schema.NoSQL have dynamic schema.SQL databases are best suited for complex queries and vertically Scalable.NoSQL databases are not so good for complex queries and horizontally scalable</p>
           <h2>What is the purpose of jwt and how does it work???</h2>
           <p>JWT or Json Web Token is an open standard used to share security information between two parties a client and a server.JWT contains encoded JSON objects, including a set of claims.JWT can be used as an access token to prevent unwanted access to a protected resource.To authenticate a user, a client application must send a JSON Web Token (JWT) in the authorization header of the HTTP request to backend API.  </p>
        </div>
    );
};

export default Blogs;