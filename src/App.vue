<template id='background'>
  <div>
    <NavigationBar />
    <router-view/>

  </div>
</template>

<script>
import NavigationBar from "./components/NavigationBar.vue";

import './assets/tailwind.css';

export default {
  name: "App",
  components: {
    NavigationBar,
    
  },
};
</script>

<style>
body{ 
  /* background-color: #ffffff; */
  background-color: #d1d3d4; /* Light grey background */
  /* #e6f3f2 */

}
h1, h2, h3, h4, h5, h6 {
  color: #333; /* Darker color for headings */
}
.table th, .table td {
  font-size: 16px; /* Consistent font size */
}


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>