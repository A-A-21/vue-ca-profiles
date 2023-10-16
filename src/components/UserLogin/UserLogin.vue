<template>
  <div class="user-login">
    <v-sheet width="300" class="mx-auto">
      <v-form fast-fail @submit.prevent="submitForm">
        <v-text-field
          v-model="inputValue.firstName"
          label="First name"
          :rules="firstNameRules"
        ></v-text-field>

        <v-text-field
          v-model="inputValue.lastName"
          label="Last name"
          :rules="lastNameRules"
        ></v-text-field>

        <v-btn type="submit" class="mt-2">Submit</v-btn>
      </v-form>
    </v-sheet>
  </div>
</template>

<script setup>
import { reactive } from "vue";

const inputValue = reactive({ firstName: "", lastName: "" });

const firstNameRules = [
  (value) => {
    if (value?.length > 3) return true;
    return "First name must be at least 3 characters.";
  },
];
const lastNameRules = [
  (value) => {
    if (/[^0-9]/.test(value)) return true;
    return "Last name can not contain digits.";
  },
];

const submitForm = () => {
  alert("go");
};
</script>

<style lang="scss" scoped></style>
