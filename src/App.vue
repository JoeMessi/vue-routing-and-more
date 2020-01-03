<template>
  <div id="app">
    <div></div>

    <div id="middle-col">
      <Nav />
      <router-view></router-view>
    </div>

    <div></div>
  </div>
</template>

<script>
import Nav from './components/Nav';

export default {
  name: 'app',
  components: {
    Nav
  }
}
</script>

<style>

 body {
   font-family: 'roboto', sans-serif;
   margin-top: 0;
 }

 #app {
   display: grid;
   grid-template-columns: 20% 60% 20%;
   background: rgb(250,235,215);
   background: linear-gradient(125deg, rgba(250,235,215,1) 4%, rgba(220,245,197,1) 80%);
 }

 div#middle-col {
   display: flex;
   justify-content: center;
   flex-direction: column;
   border: 1px solid #0000001c;
   border-top: none;
   background: white;
 }

 /* Medium devices (tablets, less than 992px) */
 @media (max-width: 991px) {
   #app {
     grid-template-columns: 15% 70% 15%;
   }
 }

/* Small devices (landscape phones, less than 768px) */
@media (max-width: 767px) {
  #app {
    grid-template-columns: 10% 80% 10%;
  }
}

/* Extra small devices (portrait phones, less than 576px) */
@media (max-width: 575px) {
  #app {
    grid-template-columns: 1fr;
  }
}

</style>
