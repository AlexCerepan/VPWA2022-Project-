<template>
  <q-page>
    <div class="row">
      <div class="col">
        <CirclesLogPage />
      </div>
    </div>
    <div class="row items-center justify-evenly">
      <LoginForm />
    </div>
    <div class="row">
      <div class="row"></div>
    </div>
  </q-page>
</template>

<script lang="ts">
import LoginForm from 'components/LoginForm.vue';
import { defineComponent } from 'vue';
import CirclesLogPage from 'src/assets/CirclesLogPage.vue';
export default defineComponent({
  name: 'LoginPage',
  components: { LoginForm, CirclesLogPage },
});
</script>
