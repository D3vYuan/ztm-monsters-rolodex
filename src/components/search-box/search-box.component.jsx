import React from "react";
import "./search-box.style.css"

export const SearchBox = ({ placeholder, handleChange }) => (
    <input
        className="search"
        type="search"
        placeholder={ placeholder }
        onChange={ handleChange }
        // onChange={e => {
        //   this.setState({ searchField: e.target.value }, 
        //     () => console.log(this.state));}
        // }>
        // onChange={e => {
        //     this.setState({ searchField: e.target.value });
        // }}>
    >
    </input>
);