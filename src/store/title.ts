import { defineStore } from "pinia";
import axios from "axios"
export const titleCounter=defineStore('card',{
    state: () => {
        return {
          posts: [],
        };
      },
    actions:{
    getPost(){
        axios.get('https://jsonplaceholder.typicode.com/posts').then(
            (res)=>console.log(res)
        
        ).then(err=>console.log(err))
    }
    }
})