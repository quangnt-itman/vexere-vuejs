<template>
  <div class="container">
    <template v-if="loading">
      <Loader />
    </template>
    <div class="row" v-else>
      <div class="col-md-12">
        <p>{{ data._id }}</p>
        <p>{{ data.name }}</p>
        <p>{{ data.province }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import Loader from "./../../../components/Loader";
export default {
  components: {
    Loader,
  },
  created() {
    const id = this.$route.params.id;
    this.$store.dispatch("fetchDetailStation", id);
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
