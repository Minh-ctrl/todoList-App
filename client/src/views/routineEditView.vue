<script setup>
    import {ref, computed, reactive} from 'vue';
    import axios from 'axios';
    async function fetchData(){
        try {
            const res = await axios.get('http://localhost:5000/getdata');
            todos.value= res.data;
            console.log(todos.value);
        } catch (e) {
            console.error(e);
        }
    } 
    const checked= (todo) =>{   
        todo.done = !todo.done; 
        counter.value = todos.value.filter((todo)=>{return todo.done === true}).length;
    };
    fetchData();
</script>

<template>
    
</template>

<style scoped>

</style>