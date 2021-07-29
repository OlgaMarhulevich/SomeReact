import {reducer, StateType, TOGGLE_COLLAPSED} from "./reducer";

test ('reducer should change collapsed value to the true', () => {

    const state: StateType = {
        collapsed: false
    }
    const newState = reducer(state, { type: TOGGLE_COLLAPSED })

    expect(newState).toEqual({ collapsed: true })
})

test ('reducer should change collapsed value to the false', () => {

    const state: StateType = {
        collapsed: true
    }
    const newState = reducer(state, { type: TOGGLE_COLLAPSED })

    expect(newState.collapsed).toBe(false)
})

test ('reducer should throw error', () => {

    const state: StateType = {
        collapsed: true
    }

    expect( () => {
        reducer(state, { type: 'something' })
    }).toThrowError()
})

