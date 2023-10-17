<template>
  <div class="resume-info">
    <h2 class="resume-info__name">Алымкулов Алмамбет Бакирович</h2>
    <h3 class="resume-info__spec">Фронтенд-разработчик</h3>

    <div class="resume-info__actions">
      <div class="resume-info__actions-item">
        <a href="https://t.me/Almambet_A">Написать мне в телеграм</a>
      </div>
      <div class="resume-info__actions-item">
        <a href="https://github.com/A-A-21">Посмотреть мой гитхаб</a>
      </div>
    </div>

    <div class="resume-info__stack">
      <div class="resume-info__stack-item" v-for="item in stack">{{ item }}</div>
    </div>

    <div class="resume-info__exp">
      <div class="resume-info__exp-item">
        <div class="resume-info__company">Открытая школа</div>
        <div class="resume-info__position">Фуллстек разработчик</div>
        <div class="resume-info__description">Внесение существенных изменений в дизайн механик в уроках, повысив их
          эффективность и привлекательность.
          Осуществление полного редизайн некоторых базовых страниц, на подобие страниц авторизации, регистрации и т.д..
          Разработка API на серверной стороне для загрузки уроков, с возможностью группировки по различным параметрам и
          использованием фильтров.
          Оптимизация значительной части существующих API, устраняя устаревший код и повышая их вычислительную
          производительность.
          Внедрение документации на Swagger для документирования и описания API.
          Участие в ежедневном код-ревью коллег, предоставляя обратную связь и содействуя повышению качества кода.
          Ниже прилагаю стек использованных текхнологий: Vue2/Vue3/React/TypeScript/NodeJs/MongoDB
        </div>
      </div>
      <div class="resume-info__exp-item">
        <div class="resume-info__company">Beб смарт</div>
        <div class="resume-info__position">Фронтенд-разработчик</div>
        <div class="resume-info__description">Разработка лендингов с использованием современных технологий и лучших
          практик веб-разработки.
          Оптимизиция производительности и загрузки лендингов, улучшение пользовательского опыта и ускорение времени
          загрузки страниц.
          Реализация адаптивного дизайна и кросс-браузерной совместимости для лендингов, обеспечение их корректного
          отображения на различных устройствах и в разных браузерах.
          Оптимизация SEO-параметров лендингов, включая мета-теги, заголовки и описания, для повышения видимости и
          привлечения органического трафика.
          Ниже прилагаю основной стек использованных текхнологий: Vue/React/Nuxt/Next
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
const stack = ['JavaScript', 'HTML', 'CSS', 'Vue', 'Vuex', 'React', 'Redux', 'TypeScript', 'NodeJS', 'Express', 'REST API', 'MongDB', 'Postgres', 'GIT']
</script>

<style lang="css" scoped>
.resume-info {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
}

.resume-info__actions {
  display: flex;
  flex-direction: column;
  gap: 20px;
  text-decoration: none;
}

.resume-info__actions-item {
  border: 1px solid olivedrab;
  border-radius: 8px;
  background: aquamarine;
  padding: 4px;

  &:hover {
    background: aqua;
  }

  a {
    text-decoration: none;
    color: black;
    width: 100%;
    height: 100%;
  }
}

.resume-info__stack {
  display: flex;
  gap: 5px;
  flex-wrap: wrap;
}

.resume-info__stack-item {
  border: 1px solid grey;
  border-radius: 4px;
  padding: 4px;
  background: azure;


}

.resume-info__exp {
  display: flex;
  flex-direction: column;
}

.resume-info__exp-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.resume-info__description {
  width: 80%;
  height: 200px
}


</style>
