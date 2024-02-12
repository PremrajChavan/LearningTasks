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
