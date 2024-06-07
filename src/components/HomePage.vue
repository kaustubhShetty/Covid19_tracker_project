<template>
    <div id="background app">
      <div class="modal-body row">
        <div class="col-md-6">
          <!--  first column here -->
          <Table/>
        </div>
        <div class="col-md-6">
          <!--  second column here -->
          <Chart/>
          <RangeFilter/>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import Table from "./Table.vue";
  import Chart from "./Chart.vue";
  import RangeFilter from "./RangeFilter.vue";
  
  export default {
    name: "HomePage",
    components: {
      Table,
      Chart,
      RangeFilter,
    },
  };
  </script>
  
  <style scoped>
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
  