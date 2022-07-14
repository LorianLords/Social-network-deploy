import {render, screen} from "@testing-library/react";
import App from "../App";
import profileReducer, {addPostActionCreator} from "./profile-reducer";

let state = {
    postData: [
        {id: 1, message: 'Hello! It\'s my first comment', likes: 30},
        {id: 2, message: 'Cool work i think', likes: 4},
        {id: 3, message: 'Man ua crazy B)', likes: 7},
        {id: 4, message: 'Yoo dude', likes: 0},
    ]
}



test('length of posts should be incremented', () => {

    // 1. test data
   let action = addPostActionCreator("it-kamasutra")


    // 2. action
    let newState = profileReducer(state, action)

    // 3. expectation
    expect(newState.postData.length).toBe(5)
    expect(newState.postData[4].message).toBe("it-kamasutra")
});

test('Message of new post should have our message', () => {

    // 1. test data
    let action = addPostActionCreator("it-kamasutra")


    // 2. action
    let newState = profileReducer(state, action)

    // 3. expectation
    expect(newState.postData[4].message).toBe("it-kamasutra")
});
