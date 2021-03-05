let data = {
    textColor: [255, 255, 255],
    backgroundColor: [0, 0, 0]
};
export let sliderReducer = (state = data, action) => {
    switch (action.type) {
        case "textColor": {
            let copy={...state,textColor:[...state.textColor]};
            copy.textColor[action.color]=action.number
            return {...copy}
        }
        case "backgroundColor": {
            let copy={...state,backgroundColor:[...state.backgroundColor]};
            copy.backgroundColor[action.color]=action.number
            return {...copy}
        }
        default :
            return state
    }
};
export let TextColorAC = (color, number) => ({
    type: "textColor",
    color,
    number
});
export let BackgroundColorAC = (color, number) => ({
    type: "backgroundColor",
    color,
    number
});


