// redux basic concepts: simple game

const initialWagonState = {
    supplies: 100,
    distance: 0,
    days: 0,
    cash: 200,
  };
  
  const reducer = (state = initialWagonState, action = {}) => {
    switch (action.type) {
      case "gather":
        return {
          ...state,
          supplies: state.supplies + 15,
          days: state.days + 1,
        };
  
      case "travel":
        if (state.supplies > 20 * action.payload) {
          return {
            ...state,
            supplies: state.supplies - 20 * action.payload,
            distance: state.distance + 10 * action.payload,
            days: state.days + action.payload,
          };
        } else {
          console.log("Too broke to travel!");
        }
  
      case "tippedWagon":
        return {
          ...state,
          supplies: state.supplies - 30,
          days: state.days + 1,
        };
  
      case "sell":
        if (state.supplies >= 20) {
          return {
            ...state,
            supplies: state.supplies - 20,
            cash: state.cash + 5,
          };
        } else {
          console.log("Too low on supplies to sell");
        }
  
      case "buy":
        if (action.payload <= state.cash) {
          return {
            ...state,
            supplies: state.supplies + 25,
            cash: state.cash - 15,
          };
        } else {
          console.log("Not enough cash");
        }
  
      case "theft":
        if (state.cash > 0) {
          console.log("You were robbed!");
          return {
            ...state,
            cash: Math.floor(state.cash / 2),
          };
        } else {
          console.log("Too broke to be robbed");
        }
  
      default:
        return state;
    }
  };
  
  let wagon = reducer();
  
  const oneDayTravelAction = {
    type: "travel",
    payload: 1,
  };
  
  wagon = reducer(wagon, oneDayTravelAction);
  console.log(wagon);
  
  const gatherAction = {
    type: "gather",
  };
  
  wagon = reducer(wagon, gatherAction);
  console.log(wagon);
  
  const tippedAction = {
    type: "tippedWagon",
  };
  
  wagon = reducer(wagon, tippedAction);
  console.log(wagon);
  
  const threeDayTravelAction = {
    type: "travel",
    payload: 3,
  };
  
  wagon = reducer(wagon, threeDayTravelAction);
  console.log(wagon);
  
  const sellAction = {
    type: "sell",
  };
  
  wagon = reducer(wagon, sellAction);
  console.log(wagon);
  
  const buyAction = {
    type: "buy",
    payload: 15,
  };
  
  wagon = reducer(wagon, buyAction);
  console.log(wagon);
  
  const theftAction = {
    type: "theft",
  };
  
  wagon = reducer(wagon, theftAction);
  console.log(wagon);
  wagon = reducer(wagon, theftAction);
  console.log(wagon);
  wagon = reducer(wagon, theftAction);
  console.log(wagon);
  wagon = reducer(wagon, theftAction);
  console.log(wagon);
  wagon = reducer(wagon, theftAction);
  console.log(wagon);
  wagon = reducer(wagon, theftAction);
  console.log(wagon);
  wagon = reducer(wagon, theftAction);
  console.log(wagon);
  wagon = reducer(wagon, theftAction);
  console.log(wagon);
  wagon = reducer(wagon, theftAction);
  console.log(wagon);
  
  wagon = reducer(wagon, threeDayTravelAction);
  console.log(wagon);
  