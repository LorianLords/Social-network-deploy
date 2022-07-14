import {createSelector} from "reselect";

export const getUsers = (state) => {
    return state.usersPage.users;
}

export const getUsersSuperSelector = createSelector(getUsers, (users) => {      //реселектор (позволяет не перерисовывать рендер каждый раз как в селекторе со сложной логикой происходит создание какого то одиннакового массива при вызове. Делает он за счет связи с зависимостями и запоминании их значений )

    return users.filter(u=> true);

})
export const getPageSize = (state) => {
    return  state.usersPage.pageSize
}
export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount;
}
export const getPage = (state) => {
    return state.usersPage.page;
}
export const getIsFetching = (state) => {
    return state.usersPage.isFetching;
}

export const getFollowingInProgress = (state) => {
    return state.usersPage.followingInProgress;
}