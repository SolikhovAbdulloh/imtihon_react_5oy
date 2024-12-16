import { createContext, useReducer } from "react";

const ShopAppContext = createContext({});

const Initilstate = {
  data: JSON.parse(localStorage.getItem("shop")) || [],
  liked: JSON.parse(localStorage.getItem("likes")) || [],
};
const ShopContext = ({ children }) => {
  const reducer = (state, { type, value }) => {
    switch (type) {
      case "add":
        {
          const exists = state.data.find((item) => item.id === value.id);
          console.log(exists);

          if (exists) {
            const updatedData = state.data.map((item) =>
              item.id === value.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            );
            localStorage.setItem("shop", JSON.stringify(updatedData));

            return { ...state, data: updatedData };
          } else {
            const newData = [...state.data, { ...value, quantity: 1 }];
            localStorage.setItem("shop", JSON.stringify(newData));
            return { ...state, data: newData };
          }
        }
        break;
      case "liked_add":
        {
          const exists = state.liked.find((item) => item.id === value.id);

          if (exists) {
            const updatedData = state.liked.map((item) =>
              item.id === value.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            );
            localStorage.setItem("likes", JSON.stringify(updatedData));

            return { ...state, liked: updatedData };
          } else {
            const newData = [...state.liked, { ...value, quantity: 1 }];
            localStorage.setItem("likes", JSON.stringify(newData));
            return { ...state, liked: newData };
          }
        }
        break;

      case "delete": {
        const filter = state.data.filter((item) => item.id !== value.id);
        localStorage.setItem("shop", JSON.stringify(filter));
        return { ...state, data: filter };
      }
      case "deleteItem": {
        console.log(value);
        const filter = state.filter((item) => item.id !== value.id);
        return { ...state,  filter };
      }
      case "Deleteliked": {
        const filter = state.liked.filter((item) => item.id !== value.id);
        localStorage.setItem("likes", JSON.stringify(filter));
        console.log(filter, state.liked);
        return { ...state, liked: filter };
      }

      case "increment": {
        const updatedData = state.data.map((item) =>
          item.id === value.id ? { ...item, quantity: item.quantity + 1 } : item
        );
        localStorage.setItem("shop", JSON.stringify(updatedData));
        return { ...state, data: updatedData };
      }

      case "decrement": {
        const updatedData = state.data.map((item) =>
          item.id === value.id
            ? { ...item, quantity: item.quantity > 0 ? item.quantity - 1 : 0 }
            : item
        );
        localStorage.setItem("shop", JSON.stringify(updatedData));
        return { ...state, data: updatedData };
      }

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, Initilstate);

  return (
    <ShopAppContext.Provider value={{ state, dispatch }}>
      {children}
    </ShopAppContext.Provider>
  );
};

export { ShopAppContext, ShopContext };
