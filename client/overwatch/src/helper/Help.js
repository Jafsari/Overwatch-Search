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