import React from 'react'

export default (props) =>{
    return(
        <div>
            <h1> This is Header</h1> 
                {props.children}
            <h1>This is footer</h1>
        </div>
    )
}