<template>
  <div>
    <h1>Account</h1>
    <hr />
    <h3>{{ FirstName }}'s Rides</h3>
    <p v-if="accountError" class="text-danger">
      Cannot get your account information. Please try again later
    </p>

    <table v-if="ridersByUser" class="table">
      <thead>
        <th>DriverFK</th>
        <th>Location To</th>
        <th>Location From</th>
      </thead>
      <tbody>
        <tr v-for="thisRide in ridersByUser" :key="thisRide.DriverPK">
          <th>
            <router-link :to="`/drivers/${thisRide.DriverFK}`">{{
              thisRide.DriverFK
            }}</router-link>
          </th>
          <th>{{ thisRide.LocationTo }}</th>
          <th>{{ thisRide.LocationFrom }}</th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      ridersByUser: null,
      accountError: false,
    };
  },
  computed: {
    FirstName() {
      console.log("here is the store so far", this.$store.state);
      return this.$store.state.user.FirstName;
    },
  },
  created() {
    axios
      .get("/rides/me", {
        headers: {
          Authorization: `Bearer ${this.$store.state.token}`,
        },
      })
      .then((theResponse) => {
        console.log("here is the response", theResponse);
        this.ridersByUser = theResponse.data;
      })
      .catch(() => {});
  },
};
</script>

<style></style>
