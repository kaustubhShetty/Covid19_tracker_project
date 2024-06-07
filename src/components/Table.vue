<template>
  <div>
    <div class="container caard">
      <!-- style="cursor: pointer;" -->
      <table class="table table-striped table-rounded" > 
        <thead class="thead-dark">
          <tr>
            <th scope="col">State / Union Territory</th>
            <th scope="col">Confirmed</th>
            <th scope="col">Recovered</th>
          </tr>
        </thead>
        <tbody>
          <tr v-bind:key="ele.state" v-for="ele in newJsonListOfDictionaries">
            <td class="clickable-cell border px-4 py-2 text-blue-600 hover:text-blue-800" @click="getStateName(ele.state)"> {{ stateAcronymToFullName[ele.state] }} </td>
            <td class="border px-4 py-2">{{ ele.confirmed }}</td>
            <td class="border px-4 py-2">{{ ele.recovered }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { bus } from '../main';

export default {
  name: "Table",
  data() {
    return {
      originalJsonData: [],
      stateName:'mh',
      states: [
        "an",
        "ap",
        "ar",
        "as",
        "br",
        "ch",
        "ct",
        "dd",
        "dl",
        "dn",
        "ga",
        "gj",
        "hp",
        "hr",
        "jh",
        "jk",
        "ka",
        "kl",
        "la",
        "ld",
        "mh",
        "ml",
        "mn",
        "mp",
        "mz",
        "nl",
        "or",
        "pb",
        "py",
        "rj",
        "sk",
        "tg",
        "tn",
        "tr",
        "tt",
        "un",
        "up",
        "ut",
        "wb",
      ],
      totalConfirmedList: [],
      totalRecoveredList: [],
      states_daily_list: [],
      tempNumber: 0,
      sum: 0,
      newJsonListOfDictionaries: [],
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
        "mn": 'Manipur',
        "mp": 'Madhya Pradesh',
        "mz": 'Mizoram',
        "nl": 'Nagaland',
        "or": 'Odisha (formerly known as Orissa)',
        "pb": 'Punjab',
        "py": 'Puducherry (formerly known as Pondicherry)',
        "rj": 'Rajasthan',
        "sk": 'Sikkim',
        "tg": 'Telangana',
        "tn": 'Tamil Nadu',
        "tr": 'Tripura',
        "tt": 'All India Total',
        "un": 'Unknown',
        "up": 'Uttar Pradesh',
        "ut": 'Uttarakhand',
        "wb": 'West Bengal',
      },
    };
  },

  mounted() {
    axios
      .get("https://data.covid19india.org/states_daily.json")
      .then((response) => {
        this.originalJsonData = response.data;
        this.getTotalConfirmed();
        this.getTotalRecovered();
        this.createNewJsonListOfDictionaries();
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    async fetchData() {
      try {
        const response = await axios.get('https://data.covid19india.org/states_daily.json');
        this.covidData = response.data.statewise;
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },

    getTotalConfirmed() {
      this.states_daily_list = this.originalJsonData["states_daily"];
      for (let st of this.states) {
        this.sum = 0;
        for (let i = 0; i < this.states_daily_list.length; i = i + 3) {
          this.tempNumber = parseInt(this.states_daily_list[i][st]);
          this.sum = this.sum + this.tempNumber;
        }
        this.totalConfirmedList.push(this.sum);
      }
    },

    getTotalRecovered() {
      this.states_daily_list = this.originalJsonData["states_daily"];
      for (let st of this.states) {
        this.sum = 0;
        for (let i = 1; i < this.states_daily_list.length; i = i + 3) {
          this.tempNumber = parseInt(this.states_daily_list[i][st]);
          this.sum = this.sum + this.tempNumber;
        }
        this.totalRecoveredList.push(this.sum);
      }
    },

    createNewJsonListOfDictionaries() {
      for (let j = 0; j < this.states.length; j = j + 1) {
        this.newJsonListOfDictionaries.push({
          state: this.states[j],
          confirmed: this.totalConfirmedList[j],
          recovered: this.totalRecoveredList[j],
        });
      }
    },

    getStateName(stateName) {
      this.stateName = stateName;
      this.$store.state.stateName = this.stateName;
      bus.$emit('changeIt', this.stateName);
    }
  },
};
</script>

<style>

.clickable-cell:hover {
  color: #007bff; /* Change text color on hover */
  background-color: #f8f9fa; /* Change background color on hover */
  cursor: pointer;
  font-weight: 700;
  font-size: 20px;
}

.caard {
  background-color: #ffffff; /* White background for cards */
  border-radius: 15px; /* Rounded corners */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Light shadow */
  padding: 9px; /* Padding inside the card */
  /* margin: 10px; Margin outside the card */
}

.table-rounded {
  border-radius: 15px; /* Rounded corners for the table */
  overflow: hidden; /* This is to ensure the rounded corners are applied to the table content */
}

.table-rounded tbody tr:last-child td:first-child {
  border-bottom-left-radius: 8px; /* Bottom-left rounded corner */
}

.table-rounded tbody tr:last-child td:last-child {
  border-bottom-right-radius: 8px; /* Bottom-right rounded corner */
}

</style>