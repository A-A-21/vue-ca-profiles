<template>
  <div class="user-login">
    <v-sheet width="300" class="mx-auto">
      <v-form @submit.prevent="submitForm">
        <v-text-field
            v-model="inputValue.login"
            label="login"
            :rules="loginRules"
        ></v-text-field>

        <v-text-field
            v-model="inputValue.password"
            label="password"
            :rules="passwordRules"
            type="password"
        ></v-text-field>

        <v-alert v-if="error" type="error">{{ error }}</v-alert>

        <v-btn type="submit" block class="mt-2">Submit</v-btn>
      </v-form>
    </v-sheet>
  </div>
</template>

<script setup>
import {reactive, ref} from "vue";
import dataUsers from '../../db/database.json'
import {useRouter} from "vue-router";

const router = useRouter();
const inputValue = reactive({login: "", password: ""});
const error = ref('');


const loginRules = [
  (value) => {
    if (value?.length > 3) return true;
    return "First name must be at least 3 characters.";
  },
];

const passwordRules = [
  (value) => {
    if (value.length >= 8 && /\d/.test(value)) {
      return true; // Валидация прошла успешно
    } else {
      return "Password must be at least 8 characters long and contain at least one digit.";
    }
  },
];

const authorization = async (userValue) => {
  let errorMsg = '';
  const [currentUser] = dataUsers.filter(user => user.login === userValue.login);
  if (currentUser) {
    if (currentUser.password === userValue.password) {
      localStorage.setItem('auth', userValue.login);
      return {status: true};
    }
    errorMsg = 'Not valid password'
    return {status: false, msg: errorMsg};
  }
  errorMsg = 'Not found user';
  return {status: false, msg: errorMsg};
}

const submitForm = async () => {
  const {msg} = await authorization(inputValue);
  if (msg) {
    error.value = msg;
  } else {
    await router.push('/public');
  }
};
</script>

<style lang="scss" scoped></style>
