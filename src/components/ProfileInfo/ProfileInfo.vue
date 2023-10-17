<template>
  <div class="profile-info">
    <div class="profile-info__img"><img :src="user.picture.large" alt="img"/></div>
    <div class="profile-info__description">
      <div class="profile-info__name">{{ user.name.first }} {{ user.name.last }}</div>
      <div class="profile-info__birth">Birth date: {{ birthDate }}</div>
      <div class="profile-info__phone">Phone: {{ user.phone }}</div>
      <div class="profile-info__phone">Email: {{ user.email }}</div>
      <div class="profile-info__location">Location: {{ user.location.country }}, {{ user.location.city }}</div>
    </div>
  </div>
</template>

<script setup>


const props = defineProps({
  user: {
    type: Object,
    required: true,
  }
})
const birthDate = new Date(props.user.dob.date).toLocaleDateString()

</script>

<style lang="css" scoped>
.profile-info {
  display: flex;
  width: 480px;
  height: 130px;
  border: 1px solid darkolivegreen;
  border-radius: 4px;
  background: beige;
  gap: 10px;
}
</style>
