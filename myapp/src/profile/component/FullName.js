import React from 'react';
import PropTypes from 'prop-types';

const FullName = (props) => {
    console.log(props);
    
    const myStyle={
        textAlign:"center",
        textTransform: "uppercase",
      
    }
    return (
        <div style ={{color:"black",textAlign:"center"}}>
    <h1 style ={myStyle}>  {props.firstName} {props.lastName}</h1>

    {props.children}
        </div>

    );
};
FullName.propTypes = {
  
    firstName: PropTypes.string,
  }
export default FullName;