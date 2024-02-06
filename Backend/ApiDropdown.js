const express = require('express');
const app = express();
const port = 3001;
const cors = require('cors')

app.use(cors());

const apiData = {
  categories : ['Steriles', 'OSD' , 'Bio'],
  customer : ['Pfizer Inc','Johnson & Johnson','Roche Holding AG','Novartis International AG','Merck & Co., Inc'],
  sterilesTypes : ['Injectables','Inhalation','Parenteral'],
  osdTypes : ['Tablets', 'Sub tablets', 'Chewable tablets' , 'Capsules'],
  bioTypes : ['Busn burner', 'Microscope','Brakers','Test tube'],
  sterilesSite :['Ferentino, Italy','Greenville, NC, USA','Monza, Italy','Swindon, United Kingdom of Great Britain and Northern Ireland (the)'],
  osdSite : ['Bourgoin', 'Cincinnati' , 'Toronto, Canada','Whitby, Canada'],
  bioSite : ['St Louis, MO, USA'],
  sterilesModels : ['Autoclaves', 'Isolators','Aseptic'],
  osdModels : ['ModelA', 'ModelB','ModelC','ModelD'],
  bioModels : ['ModelA', 'ModelB','ModelC','ModelD'],

};

app.get('/api/data', (req, res) => {
  res.json(apiData);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
