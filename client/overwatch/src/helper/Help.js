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
