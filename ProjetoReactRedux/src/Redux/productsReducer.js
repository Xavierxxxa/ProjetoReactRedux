import allProducts from './allProducts';

const initialState = [...allProducts]

export default (state = initialState, action)=>{
    return state;
}

