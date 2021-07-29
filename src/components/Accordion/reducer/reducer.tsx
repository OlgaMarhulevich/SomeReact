export type StateType = {
    collapsed: boolean
}

type ActionType = {
    type: string
}

export const TOGGLE_COLLAPSED = "TOGGLE_COLLAPSED"

export const reducer = (state: StateType, action: ActionType): StateType => {
    if (action.type === TOGGLE_COLLAPSED) {
        return { collapsed: !state.collapsed }
    }
    throw new Error('error type of action')
}

