<template>
  <div>
    <div class="card">
      <div class="card-body">
        <h2 class="text-primary">{{ drivers.DriverLastName }}</h2>
        <br />

        <p>
          First Name: <br /><strong>{{ drivers.DriverFirstName }}</strong>
        </p>
        <p>
          Last Name: <br /><strong>{{ drivers.DriverLastName }}</strong>
        </p>

        <p>
          Vehicle: <br /><strong>{{ drivers.VehicleType }}</strong>
        </p>
        <p>
          ID Number: <br /><strong>{{ drivers.DriverPK }}</strong>
        </p>
      </div>
    </div>
    <br />

    <router-link v-if="auth" :to="`/movies/${this.$route.params.pk}/reviews`"
      ><button class="btn btn-success">Call for a ride</button></router-link
    >
    <router-link v-else :to="`/login`"
      ><button class="btn btn-outline-success">
        Sign in to call for a ride
      </button></router-link
    >
  </div>
</template>

<script>
export default {
  computed: {
    drivers() {
      let allRides = this.$store.state.drivers;
      let thisRide = allRides.find((aDriver) => {
        return aDriver.DriverPK == this.$route.params.pk;
      });

      return thisRide;
    },
    auth() {
      return this.$store.state.token;
    },
  },
};
</script>

<style></style>
