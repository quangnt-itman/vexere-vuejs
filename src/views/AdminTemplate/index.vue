<template>
  <NavbarAdmin />
  <router-view />
</template>

<script>
import NavbarAdmin from "./../../components/NavbarAdmin";
export default {
  components: {
    NavbarAdmin,
  },
};
</script>

<style>
</style>