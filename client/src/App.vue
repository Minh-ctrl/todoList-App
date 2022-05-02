<script setup>
</script>

<template>
  <header>
    <div>
      <router-view></router-view>
      <router-link to="/">Home</router-link>
      <br>
      <router-link to="/edit">Edit</router-link>
    </div>
  </header>
</template>
<style>
a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}
</style>
