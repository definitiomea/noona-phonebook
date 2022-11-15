let initialState = {
    contactList: []
};

function reducer(state = initialState, action) {
    /* 구조 분해 문법으로 작성을 줄이기 */
    const { type, payload } = action;

    switch(type) {
        case "ADD_CONTACT":
            return {
                ...state,
                contactList: [
                    ...state.contactList,
                    {name: payload.name,
                    phoneNumber: payload.phoneNumber}
                ]
            };
        case "SEARCH":
            return {
                ...state,
                contactList: [
                    ...state.contactList.filter((list) => payload.word === list.name)
                ]
            }
        default:
            return {...state};
    }
};

export default reducer;