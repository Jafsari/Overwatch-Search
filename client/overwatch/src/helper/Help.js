import React, { Component } from 'react';

export const check = () => {
if (localStorage.jwtToken !== undefined) {
    this.props.history.push('dashboard')
 }
}

export const clear = () => {
    this.setState({
        username:"",
        password:""
    });
}

 const playerinfo = {username: "Calvin", level: 902, portrait: "https://d1u1mce87gyfbn.cloudfront.net/game/unlocks/0x02500000000013FE.png",rank:4497,Title:'Grandmaster'}

 const Validation = () => {
 if (!validity.valid) {
    if (validity.valueMissing) {
      error.textContent = `${label} is a required field`; 
    } else if (validity.typeMismatch) {
      error.textContent = `${label} should be a valid email address`; 
    } else if (isPassword && validity.patternMismatch) {
      error.textContent = `${label} should be longer than 4 chars`; 
    } else if (isPasswordConfirm && validity.customError) {
      error.textContent = 'Passwords do not match';
    }
    return false;
  }
}