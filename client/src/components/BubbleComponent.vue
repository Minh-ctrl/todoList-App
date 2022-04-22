<script setup>
import {ref, reactive} from 'vue';
import ShoppingCart from '../assets/ShoppingCart.vue';
import childComponent from './childComponent.vue';
import Mail from '../assets/Mail.vue'
const data= ref('this is parent');
</script>

<template>
    <div>
        <div>parent: {{data}}</div>
        <input type="text" v-model="data"/>
        <childComponent v-model="data"/>
    </div>
</template>    

<style scoped>

</style>