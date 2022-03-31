import React from "react";

const StoreContext = React.createContext(null)

/*export const Provider = (props) => {   //точная копия похожей по смыслу context в react-redux
    return <StoreContext.Provider value={props.store}>
        {props.children}
    </StoreContext.Provider>
}*/
export default StoreContext