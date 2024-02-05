import React, { createContext, useContext, useState } from 'react';

const DropdownContext = createContext();

const DropdownProvider = ({ children }) => {
  const [category, setCategory] = useState('');
  const [type, setType] = useState('');
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [customers , setCustomers] = useState('');

  const values = {
    category,
    setCategory,
    type,
    setType,
    brand,
    setBrand,
    model,
    setModel,
    customers,
    setCustomers
  };

  return (
    <DropdownContext.Provider value={values}>
      {children}
    </DropdownContext.Provider>
  );
};

export const useDropdownContext = () => useContext(DropdownContext);

export default DropdownProvider;
