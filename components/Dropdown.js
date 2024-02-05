import React from 'react';
import '../App.css';

const Dropdown = ({ options, state, setState, placeholder }) => (
    <>
    <select value={state} onChange={(e) => setState(e.target.value)}>
        <option value="">{placeholder}</option>
        {options.map((option) => (
            <option key={option} value={option}>
                {option}
            </option>
        ))}
    </select>
    </>
    
);

export default Dropdown;
