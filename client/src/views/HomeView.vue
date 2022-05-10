<script setup>
  import {ref, reactive} from 'vue';
  import BobbleComponent from '../components/BobbleComponent.vue';
  import Today from '../components/Today.vue';
  import dayjs from 'dayjs';  
  
  let svg = [{name:'Chat'}, {name: 'Camera'}, {name: 'Cleaning'}, {name: 'Mail'} , {name: "Study"}, {name:"Shopping"}, {name:"Pill"}];
</script>
<template>
    <div class="Home">
        <BobbleComponent :svg='svg'/>
        <Today/>
    </div>
</template>