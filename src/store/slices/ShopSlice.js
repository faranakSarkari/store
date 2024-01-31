import { createSlice } from "@reduxjs/toolkit";
const initialState={
    name:[],
    quantity:[],
    totalQuantity:null,
    price:[]
}

const shopSlice=createSlice({
    name:"shop",
    initialState,
    reducers:{
       order(state,action){
        if(state.name.includes(action.payload.name)){
            const index = state.name.indexOf(action.payload.name)
            state.name= [...state.name];
            state.quantity[index]=state.quantity[index]+action.payload.num;
            state.price[index]=state.price[index]
        }
        else{ state.name= [...state.name,action.payload.name];
            state.quantity.push(action.payload.num);
            state.price.push(action.payload.price)
        }
        state.totalQuantity=state.totalQuantity+action.payload.num
        },
        RemoveOne(state,action){
            const index = state.name.indexOf(action.payload.name)
            if(state.quantity[index]==1){
                // state.name=state.name.filter(e=>e!==action.payload.name)
                // state.quantity=state.quantity.filter(e=>e!==action.payload.quantity)
                // state.price=state.price.filter(e=>e!==action.payload.price)
                state.name.splice(index, 1); // Remove the name from the array
                state.quantity.splice(index, 1); // Remove the quantity from the array
                state.price.splice(index, 1)
            }
            else{ state.quantity[index]=state.quantity[index]-1;
                state.totalQuantity=state.totalQuantity-1
            }
        },
        RemoveItem(state,action){
            const index = state.name.indexOf(action.payload.name)
            state.name.splice(index, 1); // Remove the name from the array
            state.totalQuantity=state.totalQuantity-Number(state.quantity[index]) 
            state.quantity.splice(index, 1); // Remove the quantity from the array
            state.price.splice(index, 1)
          
         
        },
        RemoveAll(state){
            state.name= [] 
            state.quantity= [] 
            state.price= [] 
            state.totalQuantity=0
        }
    }
})
export const {order,RemoveOne,RemoveItem,RemoveAll}=shopSlice.actions
export default shopSlice.reducer