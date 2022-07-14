



export const updateObjectInArray = (item,itemPropName, objPropName, newObjProps) => {

    return item.users.map(u => {
        if (u[objPropName] === itemPropName) {
            return {...u, ...newObjProps}
        }
        return u;
    })
}

