import profileReducer from './profile_reducer'
import React from 'react'



test('new post should be added', () => {
    let initialState = {
        postsData: [
            { id: 1, post: 'hello_1' },
            { id: 2, post: 'hello_2' },
            { id: 3, post: 'hello_3' },
        ],
    }
    let addPostAC = {
        type: 'ADD-POST',
        text: 'test finish done',
    }
    let newState = profileReducer(initialState, addPostAC);
    expect(newState.postsData.length).toBe(4);
    expect(newState.postsData[3].post).toBe('test finish done');
});

