<script setup>
    import { ref } from 'vue';
    import { inject } from 'vue';
    const axios = inject('$axios');
    const username = ref('');
    const age= ref(0);
    const Fetchid = async () => {
        try {
            const res = await axios.get('http://localhost:5000/getuser');
            return res.data.length;
        } catch (e) {
            console.error(e);
        }
    }
    async function PostData(){
        let res = await axios.post("http://localhost:5000/adduser",{
            name: username.value,
            age: age.value,
            id : await Fetchid(),
        }).then((res)=>{console.log(res)});
        console.warn(res)
    };
</script>
<template>
    <div>
        <form @submit.prevent="PostData" method="post">
            <h1 class="text-green-400">User Name</h1>
            <input type="text" class="bg-green-200" v-model="username" alt="">
            <h1 class="text-green-400">Age</h1>
            <input type="number" class="bg-green-200" v-model="age" alt="">
            <br>
            <button type="submit" class=" bg-blue-600" @click.prevent="PostData">Post</button>
        </form>
    </div>
</template>

<style scoped>
</style>