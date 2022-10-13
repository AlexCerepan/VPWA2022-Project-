<template>
  <div
    class="q-pa-md bg-white shadow-6 round-corners"
    style="max-width: 600px; height: 400px; min-width: 300px"
  >
    <q-form
      @submit="onSubmit"
      class="q-col-gutter-md column items-center justify-evenly"
    >
      <q-input
        class="q-mt-xl"
        filled
        v-model="usrName"
        label="Your Email *"
        lazy-rules
        :rules="[(val: string | any[]) => (val && val.length > 0) || 'Please type your Email']"
      />

      <q-input
        filled
        type="password"
        v-model="password"
        label="Your  Password*"
        lazy-rules
        :rules="[
            (val: string | null) => (val !== null && val !== '') || 'Please type your Passowrd',
          ]"
      />

      <div>
        <q-btn
          label="Log in"
          type="submit"
          color="white"
          class="bg-purple-6"
          lazy-rules
        />
        <q-btn
          label="Sign in"
          type="Sign in"
          color="white"
          flat
          class="q-ml-sm bg-cyan-3"
          @click="store.changeForm()"
        />
      </div>
    </q-form>
  </div>
</template>

<script lang="ts">
import { useRouter } from 'vue-router';
import { useQuasar } from 'quasar';
import { ref } from 'vue';
import { defineComponent } from 'vue';
import { Store } from '../stores/example-store';
export default defineComponent({
  name: 'LoginForm',

  setup() {
    const $router = useRouter();
    const $q = useQuasar();
    const usrName = ref(null);
    const password = ref(null);
    const accept = ref(false);
    const store = Store();

    return {
      usrName,
      password,
      accept,
      store,

      onSubmit() {
        if (usrName.value !== 'Palala' && password.value !== 'admin01') {
          $q.notify({
            color: 'pink-12',
            textColor: 'white',
            icon: 'warning',
            message: 'You shall not pass',
          });
        } else {
          $router.push({ path: '/:name', params: { username: usrName.value } });
        }
      },
    };
  },
});
</script>
