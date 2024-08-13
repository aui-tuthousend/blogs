<script setup lang="ts">

import {ref, watchEffect} from "vue";
import ChooseSheet from "@/components/chooseSheet.vue";

  const data = ref([]);

  // watchEffect(async ()=> {
  //   let response = await fetch(`http://127.0.0.1:8000/api/getPeriode/Teknik%20Elektro`);
  //   data.value = await response.json();
  // })

</script>

<template>
  <choose-sheet/>
<!--  {{data}}-->
</template>

<style scoped>

</style>