<template>
  <div>
    <h1>Drivers</h1>
    <hr />
    <table class="table">
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Id Number</th>
          <th>Vehicle</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="aDriver in theDrivers" :key="aDriver.DriverPK">
          <th>{{ aDriver.DriverFirstName }}</th>
          <th>{{ aDriver.DriverLastName }}</th>
          <th>{{ aDriver.DriverPK }}</th>
          <th>{{ aDriver.VehicleType }}</th>
          <th>
            <router-link :to="`/drivers/${aDriver.DriverPK}`"
              ><button class="btn btn-primary">Details</button></router-link
            >
          </th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  computed: {
    theDrivers() {
      return this.$store.state.drivers;
    },
  },
};
</script>

<style></style>
