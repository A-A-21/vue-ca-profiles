<template>
  <div class="profile-list">
    <div v-if="pending" class="profile-list__loader">
      <span class="loader"></span>
    </div>
    <template v-else>
      <div class="profile-list__users">
        <ProfileInfo v-for="user in users" :user="user"/>
      </div>
      <button class="profile-list__btn" @click="addUsers">More</button>
    </template>
  </div>
</template>

<script setup>
import {onMounted, ref} from "vue";
import ProfileInfo from "../ProfileInfo/ProfileInfo.vue";

const users = ref([]);
const page = ref(1);
const pending = ref(true);

const fetchUsers = async () => {
  try {
    const response = await fetch(`https://randomuser.me/api/?page=${1}&results=10`);
    const {results} = await response.json();
    users.value = [...users.value, ...results];
    pending.value = false
  } catch (e) {
    console.log(e);
  }
}

const addUsers = async () => {
  try {
    pending.value = true;
    page.value += 1;
    await fetchUsers();
  } catch (e) {
    console.log(e);
  }
}

onMounted(() => {
  fetchUsers();
})
</script>

<style lang="css" scoped>
.loader {
  width: 48px;
  height: 48px;
  border: 5px solid sienna;
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.profile-list {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.profile-list__loader {
  padding-top: 100px;
}

.profile-list__btn {
  border: 1px solid black;
  background: aliceblue;
  border-radius: 8px;
  width: 100px;
  height: 30px;
  margin-bottom: 50px;

  &:hover {
    background: cornflowerblue;
  }
}

.profile-list__users {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  padding: 20px;
}
</style>
