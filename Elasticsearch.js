// #Access First name 

const dummyApiMet = async (event) => {
  try {
    const dummyQuery = {
      query: {
        match: {
          "author.first_name": "Prem"
        }
      }
    };

    const response = await mySupplyProxy.search({
      index: INDICES.DUMMYAPI,
      body: dummyQuery,
      _source: ['author.first_name'],
    });

    return toResponseMapper(response);
  } catch (error) {
    console.error('Error while getting the first name from dummyApi:', error);
    throw error;
  }
};

// #Access Last name 
const dummyApiMet = async (event) => {
  try {
    const dummyQuery = {
      query: {
        match: {
          "author.last_name": "Raj"
        }
      }
    };

    const response = await mySupplyProxy.search({
      index: INDICES.DUMMYAPI,
      body: dummyQuery,
      _source: ['author.last_name'],
    });

    return toResponseMapper(response);
  } catch (error) {
    console.error('Error while getting the first name from dummyApi:', error);
    throw error;
  }
};
// #Access unique email 

const dummyApiMet = async (event) => {
  try {
    const dummyQuery = {
      query: {
        wildcard: {
          "author.email": "*Prem*"
        }
      }
    };

    const response = await mySupplyProxy.search({
      index: INDICES.DUMMYAPI,
      body: dummyQuery,
      _source: ['author.email'],
    });

    return toResponseMapper(response);
  } catch (error) {
    console.error('Error while getting the email containing "Prem" from dummyApi:', error);
    throw error;
  }
};

// # GET unique product_id 

const dummyApiMet = async (event) => {
  try {
    const dummyQuery = {
      query: {
        term: {
          "product_id": 774199
        }
      }
    };

    const response = await mySupplyProxy.search({
      index: INDICES.DUMMYAPI,
      body: dummyQuery,
      _source: ['product_id'],
    });

    return toResponseMapper(response);
  } catch (error) {
    console.error('Error while getting the product_id containing "774199" from dummyApi:', error);
    throw error;
  }
};

// ElasticQueries =>

// #create new indices 

// PUT /dummy_api
// {
//   "mappings": {
//     "properties": {
//       "rating": { "type": "float" },
//       "content": { "type": "text" },
//       "product_id": { "type": "integer" },
//       "author": {
//         "properties": {
//           "first_name": { "type": "text" },
//           "last_name": { "type": "text" },
//           "email": { "type": "keyword" }
//         }
//       }
//     }
//   }
// }

// #push data in indices 

// PUT /dummy_api/_create/1
// {
//   "rating": 5.0,
//   "content": "Just an dummy content" ,
//   "product_id": 774177,
//   "author": {
//     "first_name": "Prem",
//     "last_name": "Raj",
//     "email": "PremRaj123@example.com"
//   }
// }

// GET /dummy_api/_doc/_search
// {
//   "_source": ["author.first_name"],
//   "query": {
//     "match": {
//       "author.first_name": "Prem"
//     }
//   }
// }
