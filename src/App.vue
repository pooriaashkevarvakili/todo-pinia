<script >
import {cartCounter} from "./store/cart.ts"
import {titleCounter} from "./store/title.ts"
export default{
  setup(){
const store=cartCounter()
const storeOne=titleCounter()
storeOne.getPost()
return{store,storeOne}
  }
}

// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
<div v-for="items in store.firstCard">
<span>{{items.name}}</span><span>{{items.price}}</span>
</div>
<div v-for="items in storeOne.posts">
<span>{{items.name}}</span><span>{{items.title}}</span>
</div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
