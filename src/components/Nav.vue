<template>
    <ul id="nav">
      <router-link to='/inline-editor'>Inline Editor</router-link>
      <router-link to='/order-form'>Order Form</router-link>
      <router-link to='/instant-search'>Instant Search</router-link>
      <router-link to='/switchable-grid'>Switchable Grid</router-link>
    </ul>
</template>


<script>

export default {
  name: 'Nav',
}
</script>



<style scoped>
  ul {
    list-style-type: none;
    padding: 0;
    display: flex;
    align-items: center;
    width: 100%;
    background: #5597b4;
    color: white;
    font-family: inherit;
    height: 3rem;
    margin-top: 0;
  }

  a {
    width: 100%;
    text-align: center;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    text-decoration: none;
    color: inherit;
  }

  .router-link-active, a:hover {
    background: #e35885;
  }

</style>
