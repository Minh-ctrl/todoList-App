<script setup>
  import {ref, reactive} from 'vue';
  import BobbleComponent from './components/BobbleComponent.vue';
  import Today from './components/Today.vue'

  let svg = [{name:'Chat'}, {name: 'Camera'}, {name: 'Cleaning'}, {name: 'Mail'} , {name: "Study"}, {name:"Shopping"}, {name:"Pill"}];
  const  data= ref({today:{
    todo: [{
      action:'Talk to Mom',
      timer: 50,
      done: false,
      },{
        action:'Finish assignment',
        timer: 50,
        done: false,
      },
      {
        action:'Finish this project',
        done: false,
      }
      ]
  }});
</script>

<template>
  <div>
    <BobbleComponent :svg='svg'/>
    <Today :data="data"/>
  </div>
</template>
<style>

</style>
