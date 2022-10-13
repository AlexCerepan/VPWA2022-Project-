<template>
  <div class="q-pa-xl bg-white round-corners" style="min-width: 300px">
    <q-form
      class="q-col-gutter-md column items-center justify-evenly"
      @submit="onSingIn"
    >
      <q-input
        filled
        label="Your Email"
        hint="Email*"
        v-model="email"
        lazy-rules
        :rules="[
          (val) =>
            (val && val.length > 0 && val.indexOf('@') > -1) ||
            'Wrong email format',
        ]"
      />

      <q-input
        filled
        type="password"
        label="Your Password"
        hint="Password*"
        v-model="password"
      />

      <q-input
        filled
        type="password"
        label="Repeat Password"
        hint="Repeat Password"
        v-model="password_repeat"
        lazy-rules
        :rules="[
          (val) => (val && val == password) || 'Your passwords dont match',
        ]"
      />
      <div class="row">
        <q-toggle v-model="accept" label="" color="cyan-4" />

        <q-btn
          type="submit"
          label="Sing In"
          color="white"
          class="bg-purple-6 q-ml-md"
        />
      </div>
    </q-form>
  </div>
</template>
<script>
import { useQuasar } from 'quasar';
import { defineComponent } from 'vue';
import { ref } from 'vue';
import { Store } from '../stores/example-store';

export default defineComponent({
  name: 'SingIn',
  setup() {
    const $q = useQuasar();
    const store = Store();
    const email = ref(null);
    const password = ref(null);
    const password_repeat = ref(null);
    const accept = ref(false);

    const changeState = () => store.changeForm();

    return {
      email,
      password,
      password_repeat,
      accept,

      onSingIn() {
        if (accept.value !== true) {
          $q.notify({
            color: 'pink-12',
            textColor: 'white',
            icon: 'warning',
            message: 'You need to accept the license and terms first',
          });
        } else if (password.value !== password_repeat.value) {
          $q.notify({
            color: 'pink-12',
            textColor: 'white',
            icon: 'warning',
            message: 'Passwords are not matching',
          });
        } else {
          $q.notify({
            color: 'deep-purple-11',
            textColor: 'white',
            icon: 'cloud_done',
            message: 'Submitted',
          });
          changeState();
        }
      },
    };
  },
});
</script>
