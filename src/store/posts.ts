import { defineStore } from "pinia";
import axios from "axios"
export const postCounter=defineStore('posts',{
    state: () => {
        return {
          posts: [],
        };
      },
    actions:{
    getPost(){
        axios.get('https://jsonplaceholder.typicode.com/posts').then(
            (res)=>{
              this.posts=res.data
            }
        
        ).then(err=>console.log(err))
    }
    }
})