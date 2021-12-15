<template>
  <div>
    <div class="row justify-content-center">
      <div class="col-lg-10">
        <div class="card">
          <div class="card-body">
            <h4>Request a Ride</h4>
            <form id="review-form" @submit.prevent="submitRide">
              <div class="mb-3">
                <label for="rating-input" class="form-label">Drop-off</label
                ><input
                  type="text"
                  class="form-control"
                  id="rating-input"
                  required=""
                  min="1"
                  max="10"
                  v-model="LocationTo"
                />
              </div>
              <div class="mb-3">
                <label for="summary-input" class="form-label">Pick-up</label
                ><input
                  type="text"
                  row="3"
                  class="form-control"
                  id="summary-input"
                  required=""
                  v-model="LocationFrom"
                />
              </div>
              <button type="submit" class="btn btn-primary">
                Submit Request</button
              ><button
                v-on:click="cancelRide"
                type="clear"
                class="btn btn-outline-danger"
              >
                Cancel
              </button>

              <p v-if="ErrorMessage" class="form-text text-danger">
                {{ ErrorMessage }}
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      LocationTo: null,
      LocationFrom: "",
      ErrorMessage: null,
    };
  },
  methods: {
    submitRide() {
      let myRide = {
        LocationTo: this.LocationTo,
        LocationFrom: this.LocationFrom,
        DriverFK: this.$route.params.pk,
      };

      axios
        .post("/rides", myRide, {
          headers: {
            Authorization: `Bearer ${this.$store.state.token}`,
          },
        })
        .then(() => {
          this.$router.replace("/account");
        })
        .catch(() => {
          this.ErrorMessage = "Unable to create a review, please try again";
        });
    },
    cancelRide() {
      this.$router.go(-1);
    },
  },
};
</script>

<style>
button {
  margin-right: 5px;
}
</style>
