import React from 'react'
import PropTypes from 'prop-types';

const Button = ({color,text,show}) => {

  return (
    <button className="effect-btn-theme" style={{backgroundColor:color}} type='submit' onClick={show}>{text}</button>
  )
}

Button.defaultProps = {
    color: "steelblue",

}
Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onclick:PropTypes.func
}


export default Button