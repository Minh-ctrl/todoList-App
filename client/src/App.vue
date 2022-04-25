<script setup>
  import BobbleComponent from './components/BobbleComponent.vue';
  let data = [{name:'Chat'}, {name: 'Camera'}, {name: 'Cleaning'}, {name: 'Mail'} , {name: "Study"}, {name:"Shopping"}, {name:"Pill"}];
</script>

<template>
  <div>
    <BobbleComponent :svg='data'/>
  </div>
</template>
<style>

</style>
