<template>
  <div
    class="q-pa-md bg-white shadow-6 round-corners"
    style="max-width: 600px; height: 400px; min-width: 300px"
  >
    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-col-gutter-md column items-center justify-evenly"
    >
      <q-input
        class="q-mt-xl"
        filled
        v-model="name"
        label="Your name *"
        hint="Name and surname"
        lazy-rules
        :rules="[(val: string | any[]) => (val && val.length > 0) || 'Please type something']"
      />

      <q-input
        filled
        type="number"
        v-model="age"
        label="Your age *"
        lazy-rules
        :rules="[
            (val: string | null) => (val !== null && val !== '') || 'Please type your age',
            (val: number) => (val > 0 && val < 100) || 'Please type a real age',
          ]"
      />

      <div>
        <q-btn label="Log in" type="submit" color="primary" />
        <q-btn
          label="Sign in"
          type="Sign in"
          color="primary"
          flat
          class="q-ml-sm"
        />
      </div>
    </q-form>
  </div>
</template>

<script lang="ts">
import { useQuasar } from 'quasar';
import { ref } from 'vue';
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'LoginForm',

  setup() {
    const $q = useQuasar();
    const name = ref(null);
    const age = ref(null);
    const accept = ref(false);

    return {
      name,
      age,
      accept,

      onSubmit() {
        if (accept.value !== true) {
          $q.notify({
            color: 'purple-3',
            textColor: 'white',
            icon: 'warning',
            message: 'You need to accept the license and terms first',
          });
        } else {
          $q.notify({
            color: 'green-4',
            textColor: 'white',
            icon: 'cloud_done',
            message: 'Submitted',
          });
        }
      },

      onReset() {
        name.value = null;
        age.value = null;
        accept.value = false;
      },
    };
  },
});
</script>
