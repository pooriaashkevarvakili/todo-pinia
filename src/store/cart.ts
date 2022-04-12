import { defineStore } from "pinia"

export const cartCounter=defineStore({
    id:'cart',
    state:()=>{
        return{
         firstCard:[
             {
                 name:'pooria',
                 price:5
             },
             {
                 name:'mohamad',
                 price:10
             },
             {
                 name:'ali',
                 price:12
             }
         ]   
        }
    },
    getters:{

    },
    actions:{

    }
})