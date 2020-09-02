import React from 'react';


function Header({titulo}) {


    const edad = 18;
    return(
        <div>
            <h1 className='encabezado'>{titulo} {edad}
            </h1>
        </div>
    )
    
}
export default Header