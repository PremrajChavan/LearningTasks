// import React from 'react';
// import Dropdown from './Dropdown';
// import { useDropdownContext } from './DropdownProvider';

// const DropdownSelector = () => {
//   const {
//     category,
//     setCategory,
//     type,
//     setType,
//     brand,
//     setBrand,
//     model,
//     setModel,
//     customers,
//     setCustomers,
//   } = useDropdownContext();

//   const categories = ['Steriles', 'OSD' , 'Bio'];
//   const customer =['Pfizer Inc','Johnson & Johnson','Roche Holding AG','Novartis International AG','Merck & Co., Inc']
//   const sterilesTypes = ['Injectables','Inhalation','Parenteral'];
//   const osdTypes = ['Tablets', 'Sub tablets', 'Chewable tablets' , 'Capsules'];
//   const bioTypes = ['Busn burner', 'Microscope','Brakers','Test tube'];
//   const sterilesSite =['Ferentino, Italy','Greenville, NC, USA','Monza, Italy','Swindon, United Kingdom of Great Britain and Northern Ireland (the)']
//   const osdSite = ['Bourgoin', 'Cincinnati' , 'Toronto, Canada','Whitby, Canada'];
//   const bioSite = ['St Louis, MO, USA'];
//   const sterilesModels = ['Autoclaves', 'Isolators','Aseptic'];
//   const osdModels = ['ModelA', 'ModelB','ModelC','ModelD'];
//   const bioModels = ['ModelA', 'ModelB','ModelC','ModelD'];

//   const handleCategoryChange = (selectedCategory) => {
//     setCategory(selectedCategory);
//     setCustomers('');
//     setType('');
//     setBrand('');
//     setModel('');
//   };
//   const handleCustomerChange = (selectedCustomer) => {
//     setCustomers(selectedCustomer);
//     setType('');
//     setBrand('');
//     setModel('');
//   };
//   const handleTypeChange = (selectedType) => {
//     setType(selectedType);
//     setBrand('');
//     setModel('');
//   };

//   const handleBrandChange = (selectedBrand) => {
//     setBrand(selectedBrand);
//     setModel('');
//   };

//   const handleModelChange = (selectedModel) => {
//     setModel(selectedModel);
//   };

//   return (
//     <div>
//       <Dropdown
//         options={categories}
//         state={category}
//         setState={handleCategoryChange}
//         placeholder="Select Category"
//       />
//       {category === 'OSD' && (
//         <>
//         <Dropdown
//             options={customer}
//             state={customers}
//             setState={handleCustomerChange}
//             placeholder="Customer"
//           />
//           <Dropdown
//             options={osdTypes}
//             state={type}
//             setState={handleTypeChange}
//             placeholder="Product Family"
//           />
//           <Dropdown
//             options={osdSite}
//             state={brand}
//             setState={handleBrandChange}
//             placeholder="Site"
//           />
//           <Dropdown
//             options={osdModels}
//             state={model}
//             setState={handleModelChange}
//             placeholder="Select Model"
//           />

//         </>
//       )}
//       {category === 'Bio' && (
//         <>
//          <Dropdown
//             options={customer}
//             state={model}
//             setState={handleCustomerChange}
//             placeholder="Customer"
//           />
//           <Dropdown
//             options={bioTypes}
//             state={type}
//             setState={handleTypeChange}
//             placeholder="Product Family"
//           />
//           <Dropdown
//             options={bioSite}
//             state={brand}
//             setState={handleBrandChange}
//             placeholder="Site"
//           />
//           <Dropdown
//             options={bioModels}
//             state={model}
//             setState={handleModelChange}
//             placeholder="Select Model"
//           />
//         </>
//       )}
//       {category === 'Steriles' && (
//         <>
//         <Dropdown
//             options={customer}
//             state={model}
//             setState={handleCustomerChange}
//             placeholder="Customer"
//           />
//           <Dropdown
//             options={sterilesTypes}
//             state={type}
//             setState={handleTypeChange}
//             placeholder="Product Family"
//           />
//           <Dropdown
//             options={sterilesSite}
//             state={brand}
//             setState={handleBrandChange}
//             placeholder="Site"
//           />
//           <Dropdown
//             options={sterilesModels}
//             state={model}
//             setState={handleModelChange}
//             placeholder="Select Model"
//           />
//         </>
//       )}
//     </div>
//   );
// };

// export default DropdownSelector;
