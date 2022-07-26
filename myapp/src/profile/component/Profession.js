import React, { Component } from 'react';
import PropTypes from 'prop-types';

    class Profession extends Component {
        render() { 
  return (
  
    
  
  <div className="card-img-overlay">
    
    <h5 className="card-title"><b>Profession</b></h5>
    <p className="card-text">I am currently a student at GO My Code Academy,Electronics Engineer is looking for a new opportunity as a software Developper
    .</p>    
  </div>

    
  );
}}

Profession.propTypes = {
  
  firstName: PropTypes.string,
}
export default Profession;
