import React, { useState, useEffect } from 'react';
import Dropdown from './Dropdown';
import { useDropdownContext } from './DropdownProvider';

const DropdownSelector = () => {
  const {
    category,
    setCategory,
    type,
    setType,
    brand,
    setBrand,
    model,
    setModel,
    customers,
    setCustomers,
  } = useDropdownContext();


  const [apiData, setApiData] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/data');
        const data = await response.json();
        setApiData(data);
      } catch (error) {
        console.error('Error data:', error);
      }
    };

    fetchData();
  }, []);

  const handleCategoryChange = (selectedCategory) => {
    setCategory(selectedCategory);
    setCustomers('');
    setType('');
    setBrand('');
    setModel('');
  };
  const handleCustomerChange = (selectedCustomer) => {
    setCustomers(selectedCustomer);
    setType('');
    setBrand('');
    setModel('');
  };
  const handleTypeChange = (selectedType) => {
    setType(selectedType);
    setBrand('');
    setModel('');
  };

  const handleBrandChange = (selectedBrand) => {
    setBrand(selectedBrand);
    setModel('');
  };

  const handleModelChange = (selectedModel) => {
    setModel(selectedModel);
  };

  return (
    <div>


      <Dropdown
        options={apiData.categories }
        state={category}
        setState={handleCategoryChange}
        placeholder="Select Category"
      />
      {category === 'OSD' && (
        <>
          <Dropdown
            options={apiData.customer}
            state={customers}
            setState={handleCustomerChange}
            placeholder="Customer"
          />
          <Dropdown
            options={apiData.osdTypes}
            state={type}
            setState={handleTypeChange}
            placeholder="Product Family"
          />
          <Dropdown
            options={apiData.osdSite}
            state={brand}
            setState={handleBrandChange}
            placeholder="Site"
          />
          <Dropdown
            options={apiData.osdModels}
            state={model}
            setState={handleModelChange}
            placeholder="Select Model"
          />

        </>
      )}
      {category === 'Bio' && (
        <>
          <Dropdown
            options={apiData.customer}
            state={customers}
            setState={handleCustomerChange}
            placeholder="Customer"
          />
          <Dropdown
            options={apiData.bioTypes}
            state={type}
            setState={handleTypeChange}
            placeholder="Product Family"
          />
          <Dropdown
            options={apiData.bioSite }
            state={brand}
            setState={handleBrandChange}
            placeholder="Site"
          />
          <Dropdown
            options={apiData.bioModels }
            state={model}
            setState={handleModelChange}
            placeholder="Select Model"
          />
        </>
      )}
      {category === 'Steriles' && (
        <>
          <Dropdown
            options={apiData.customer}
            state={customers}
            setState={handleCustomerChange}
            placeholder="Customer"
          />
          <Dropdown
            options={apiData.sterilesTypes }
            state={type}
            setState={handleTypeChange}
            placeholder="Product Family"
          />
          <Dropdown
            options={apiData.sterilesSite }
            state={brand}
            setState={handleBrandChange}
            placeholder="Site"
          />
          <Dropdown
            options={apiData.sterilesModels}
            state={model}
            setState={handleModelChange}
            placeholder="Select Model"
          />
        </>
      )}

    </div>
  );
};

export default DropdownSelector;
