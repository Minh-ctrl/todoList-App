<script setup>
    import { ref } from 'vue';
    import { inject } from 'vue';
    const activity = ref('')
    const axios = inject('$axios');
    const length = ref('');
    async function PostData(){
        let res = await axios.post("http://localhost:3000/data",{
            activity: 'test',
            legnth: 'test',
        })
        console.warn(res);
}
    
</script>
<template>
    <div>
        <form @submit.prevent="PostData" method="post">
            <input type="text" name="activity" class="bg-blue-200" v-model="activity"><br>
            <input type="text" name="length" class="bg-blue-200" v-model="length"><br>
            <button type="submit" class=" bg-blue-600" @click.prevent="PostData">Post</button>
        </form>
        <div> {{activity}} and {{length}}</div>
    </div>
</template>

<style scoped>
</style>