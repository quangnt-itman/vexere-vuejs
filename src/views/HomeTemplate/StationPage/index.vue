<template>
  <div class="container">
    <template v-if="loading">
      <Loader />
    </template>
    <div class="row" v-else>
      <StationItem
        v-for="station in data"
        :key="station._id"
        :station="station"
      />
    </div>
  </div>
</template>

<script>
import StationItem from "./../../../components/StationItem";
import Loader from "./../../../components/Loader";
import * as types from "./../../../store/station/constant";
export default {
  components: {
    StationItem,
    Loader,
  },
  created() {
    this.$store.dispatch(types.A_FETCH_LIST_STATION);
  },
  computed: {
    loading() {
      return this.$store.state.station.loading;
    },
    data() {
      return this.$store.state.station.data;
    },
  },
};
</script>

<style></style>
