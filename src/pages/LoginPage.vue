<template>
  <q-page class="row justify-evenly items-center overflow-hidden">
    <div class="col-4 gt-xs">
      <CirclesLogPage_left />
    </div>
    <div class="col-4">
      <div class="row justify-center">
        <template v-if="!store.change">
          <LoginForm />
        </template>
        <template v-else>
          <SingInForm />
        </template>
      </div>
    </div>
    <div class="col-4 gt-xs">
      <CirclesLogPage_right />
    </div>
  </q-page>
</template>

<!-- connect trough log in button to main layout  -->
<script lang="ts">
import LoginForm from 'components/LoginForm.vue';
import { defineComponent } from 'vue';
import { Store } from 'src/stores/example-store';

import CirclesLogPage_left from 'src/assets/CirclesLogPage_left.vue';
import CirclesLogPage_right from 'src/assets/CirclesLogPage_right.vue';
import SingInForm from 'components/SingInForm.vue';
export default defineComponent({
  name: 'LoginPage',
  components: {
    LoginForm,
    CirclesLogPage_left,
    CirclesLogPage_right,
    SingInForm,
  },

  setup() {
    const store = Store();

    return {
      store,
    };
  },
});
</script>
