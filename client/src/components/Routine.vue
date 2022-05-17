<script setup>
    import {ref, computed, reactive} from 'vue';
    import axios from 'axios';
    const todos = ref([]);
    let counter = ref(0);
    async function fetchRoutine(){
        try {
            const res = await axios.get('http://localhost:5000/getroutine');
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
    fetchRoutine();
</script>
<template>
    <div class="flex flex-col flex-nowrap">
        <div class="flex flex-row flex-nowrap">
            <h1 class="text-4xl font-semibold text-cyan-400">ROUTINE</h1>
            <div class="bubble w-10 h-6 rounded-full bg-black flex flex-row flex-nowrap justify-center">
                <div class="text-zinc-100">{{`${counter}/${todos.length}`}}</div>
            </div>
        </div>
        <div>
            <div v-for="todo in todos" :key="todo">
                <input @click="checked(todo)" type="checkbox" class="m-2">
                <label>{{todo.inputData.routine_name}}</label>
                <label class="rounded-full" v-if="todo.due">[bell symbol] {{todo.due}}</label>
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>