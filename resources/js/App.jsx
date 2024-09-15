// import React from 'react'
// import ReactDOM from 'react-dom/client';
// import 'bootstrap/dist/css/bootstrap.min.css'

// const App = () => {
//     return(
//         <div>
//             <h1>Hola Mundo</h1>
//             {/* <button className='btn btn-primary'>Boton</button> */}
//         </div>
//     )
// }

// export default App

// if (document.getElementById('root')) {
//     const Index = ReactDOM.createRoot(document.getElementById("root"));

//     Index.render(
//         <React.StrictMode>
//             <App/>
//         </React.StrictMode>
//     )
// }

import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios';  
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    const [message, setMessage] = useState('');  


    useEffect(() => {
        axios.get('/api/message')
            .then(response => {
                setMessage(response.data.message);  
            })
            .catch(error => {
                console.error('Error al obtener el mensaje:', error);
            });
    }, []);

    return (
        <div>
            <br></br><br></br><br></br><br></br>
            <center><h1>{message}</h1></center> 
        </div>
    );
};

export default App;

if (document.getElementById('root')) {
    const Index = ReactDOM.createRoot(document.getElementById("root"));
    Index.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
}
