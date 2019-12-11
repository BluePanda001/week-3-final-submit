import React from '../../node_modules/@types/react'
//creating a higher order component to assign random colours to component text
const Rainbow =(WrappedComponent)=>{
    const colours=['red', 'pink','blue','yellow','purple'];
    const randomColour=colours[Math.floor(Math.random()*4)];
    const className=randomColour+'-text';

    return(props)=>{
        return(
            <div className={className}>
                <WrappedComponent {...props}/>
            </div>
        )
    }

}
export default Rainbow