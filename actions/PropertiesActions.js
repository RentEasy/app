import {PROPERTIES_FETCH, PROPERTIES_FETCH_SUCCESS} from './types';

export const propertiesFetch = () => {
  return (dispatch) => {
    dispatch({type: PROPERTIES_FETCH});

    let unsubscribe = () => {
    };

    const properties = [
      {
        id: "1",
        address: "5626 Arlington Park Dr. Dallas, Tx 75235",
        shortAddress: "5626 Arlington Park Dr",
        image: require("../assets/images/properties/ialicante-mediterranean-homes-475777-unsplash.jpg")
      },
      {
        id: "2",
        address: "405 S Bock St. Broken Bow, OK 74728",
        shortAddress: "405 S Bock St",
        image: require("../assets/images/properties/jesse-roberts-146556-unsplash.jpg")
      },
      {
        id: "3",
        address: "1234 Fake St. Garland, Tx 75043",
        shortAddress: "1234 Fake St",
        image: require("../assets/images/properties/scott-webb-167099-unsplash.jpg")
      }
    ];

    dispatch({
      type: PROPERTIES_FETCH_SUCCESS,
      payload: {properties, unsubscribe}
    });
  }

};