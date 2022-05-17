<script setup>
    import { ref } from 'vue';
    import { inject } from 'vue';
    const axios = inject('$axios');
    const today = ref();
    async function fetchToday(){
        try {
            const res = await axios.get('http://localhost:5000/gettoday');
            today.value= res.data;
            console.log(today.value);
        } catch (e) {
            console.error(e);
        }
    } 
    // const checked= (todo) =>{   
    //     todo.done = !todo.done; 
    //     counter.value = todos.value.filter((todo)=>{return todo.done === true}).length;
    // };
    fetchToday();
</script>

<template>
     <div class="flex flex-col flex-nowrap">
        <div class="flex flex-row flex-nowrap">
            <h1 class="text-4xl font-semibold text-cyan-400">TODAY</h1>
            <div class="bubble w-10 h-6 rounded-full bg-black flex flex-row flex-nowrap justify-center">
                <!-- <div class="text-zinc-100">{{`${counter}/${todos.length}`}}</div> -->
            </div>
        </div>
        <div>
            <div v-for="today in today" :key="today" >
                <div v-if="today.inputData.done">
                    <input @click="checked(todo)" type="checkbox" class="m-2">
                    <label class="rounded-full">[bell symbol] {{today.inputData.activity}}</label>
                </div>
                <br>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>