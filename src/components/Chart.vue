<template >
  <div class="caard">
    <h1>State / UT: {{ stateAcronymToFullName[this.stateNewName] }}</h1>
    <line-chart :key="componentKey" v-if="loaded" :chartdata="chartdata" /> <!--creates a line chart-->
  </div>
</template>

<script>
import axios from "axios";
import LineChart from "./LineChart.vue";
import { bus } from "../main";

export default {
  components: { LineChart },
  created() {
    bus.$on("changeIt", (data) => {
      this.stateNewName = data;
      this.fullStateName = this.stateAcronymToFullName[data];
      console.log(this.stateNewName);
      this.getConfirmedCasesforSpecificState();
      this.getRecoveredCasesforSpecificState();
      this.chartdata = {
        type: "line",
        labels: this.dates,
        datasets: [
          {
            label: "Confirmed Cases",
            backgroundColor: "#00FF00",
            data: this.confirmed_cases_list,
          },
          {
            label: "Recovered Cases",
            backgroundColor: "#0000FF",
            data: this.recovered_cases_list,
          },
        ],
      };
      this.forceRerender();
    });
    bus.$on('UpdateNewDates', (data) => {
      this.fromDate = data[0];
      this.toDate = data[1];
      this.filteredResults();
      this.chartdata = {
        type: "line",
        labels: this.filteredDatesList,
        datasets: [
          {
            label: "Confirmed Cases",
            backgroundColor: "#00FF00",
            data: this.filteredConfirmedCasesList,
          },
          {
            label: "Recovered Cases",
            backgroundColor: "#0000FF",
            data: this.filteredRecoveredCasesList,
          },
        ],
      };
      this.forceRerender();
    });
  },
  name: "Chart",
  data: () => ({
    loaded: false,
    componentKey: 0,
    dates: [],
    filteredDatesList: [],
    filteredConfirmedCasesList: [],
    filteredRecoveredCasesList: [],
    stateNewName: "mh",
    fullStateName: "Maharashtra",
    states_daily_list: [],
    confirmed_cases_list: [],
    recovered_cases_list: [],
    chartData: null,
    fromDate: "",
    toDate: "",
    fromDateIndex: 0,
    toDateIndex: 0,
    stateAcronymToFullName: {
      'an': 'Andaman and Nicobar Islands',
      'ap': 'Andhra Pradesh',
      'ar': 'Arunachal Pradesh',
      'as': 'Assam',
      'br': 'Bihar',
      'ch': 'Chandigarh',
      'ct': 'Chhattisgarh',
      'dd': 'Daman and Diu',
      'dl': 'Delhi',
      'dn': 'Dadra and Nagar Haveli',
      'ga': 'Goa',
      'gj': 'Gujarat',
      'hp': 'Himachal Pradesh',
      'hr': 'Haryana',
      'jh': 'Jharkhand',
      'jk': 'Jammu and Kashmir',
      'ka': 'Karnataka',
      'kl': 'Kerala',
      'la': 'Ladakh',
      'ld': 'Lakshadweep',
      'mh': 'Maharashtra',
      'ml': 'Meghalaya',
      'mn': 'Manipur',
      'mp': 'Madhya Pradesh',
      'mz': 'Mizoram',
      'nl': 'Nagaland',
      'or': 'Odisha (formerly known as Orissa)',
      'pb': 'Punjab',
      'py': 'Puducherry (formerly known as Pondicherry)',
      'rj': 'Rajasthan',
      'sk': 'Sikkim',
      'tg': 'Telangana',
      'tn': 'Tamil Nadu',
      'tr': 'Tripura',
      'tt': 'All India Total',
      'un': 'Unknown',
      'up': 'Uttar Pradesh',
      'ut': 'Uttarakhand',
      'wb': 'West Bengal',
    },
  }),
  mounted() {
    this.loaded = false;
    try {
      axios
        .get("https://data.covid19india.org/states_daily.json")
        .then((response) => {
          this.originalJsonData = response.data;
          this.getDateYMD();
          this.getConfirmedCasesforSpecificState();
          this.getRecoveredCasesforSpecificState();
          this.chartdata = {
            type: "line",
            labels: this.dates,
            datasets: [
              {
                label: "Confirmed Cases",
                backgroundColor: "#00FF00",
                data: this.confirmed_cases_list,
              },
              {
                label: "Recovered Cases",
                backgroundColor: "#0000FF",
                data: this.recovered_cases_list,
              },
            ],
          };
          this.loaded = true;
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (e) {
      console.log(e);
    }
  },
  methods: {
    async fetchChartData() {
      try {
        const response = await axios.get('https://data.covid19india.org/states_daily.json');
        this.chartData = response.data.cases_time_series;
      } catch (error) {
        console.error('Error fetching chart data:', error);
      }
    },
    forceRerender() {
      this.componentKey += 1;
    },
    filteredResults() {
      for (let i = 0; i < this.dates.length; i++) {
        if (this.dates[i] === this.fromDate) {
          this.fromDateIndex = i;
        }
      }
      for (let i = 0; i < this.dates.length; i++) {
        if (this.dates[i] === this.toDate) {
          this.toDateIndex = i;
        }
      }
      this.filteredDatesList = [];
      this.filteredConfirmedCasesList = [];
      this.filteredRecoveredCasesList = [];
      for (let i = this.fromDateIndex; i <= this.toDateIndex; i++) {
        this.filteredDatesList.push(this.dates[i]);
        this.filteredConfirmedCasesList.push(this.confirmed_cases_list[i]);
        this.filteredRecoveredCasesList.push(this.recovered_cases_list[i]);
      }
    },
    getDateYMD() {
      this.states_daily_list = this.originalJsonData["states_daily"];
      for (let i = 0; i < this.states_daily_list.length; i = i + 3) {
        this.dates.push(this.states_daily_list[i]["dateymd"]);
      }
    },
    getConfirmedCasesforSpecificState() {
      this.confirmed_cases_list = [];
      for (let i = 0; i < this.states_daily_list.length; i = i + 3) {
        this.confirmed_cases_list.push(
          parseInt(this.states_daily_list[i][this.stateNewName])
        );
      }
    },
    getRecoveredCasesforSpecificState() {
      this.recovered_cases_list = [];
      for (let i = 1; i < this.states_daily_list.length; i = i + 3) {
        this.recovered_cases_list.push(
          parseInt(this.states_daily_list[i][this.stateNewName])
        );
      }
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}


</style>