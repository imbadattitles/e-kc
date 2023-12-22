<template>
  <div>
    <NuxtLayout>
      <Header />
      <main>
        <NuxtPage />
      </main>
      <Footer />
    </NuxtLayout>
  </div>
</template>
<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

@font-face {
  font-family: "Lato";
  src: local("Lato Regular"), local("Lato-Regular"),
    url("/fonts/latoregular.woff2") format("woff2"),
    url("/fonts/latoregular.woff") format("woff"),
    url("/fonts/latoregular.ttf") format("truetype");
  font-weight: 500;
  font-style: normal;
}
@font-face {
  font-family: "Lato";
  src: local("Lato Bold"), local("Lato-Bold"),
    url("/fonts/latobold.woff2") format("woff2"),
    url("/fonts/latobold.woff") format("woff"),
    url("/fonts/latobold.ttf") format("truetype");
  font-weight: 700;
  font-style: normal;
}
@font-face {
  font-family: "Lato";
  src: local("Lato Bold"), local("Lato-Bold"),
    url("/fonts/latomedium.woff2") format("woff2"),
    url("/fonts/latomedium.woff") format("woff"),
    url("/fonts/latomedium.ttf") format("truetype");
  font-weight: 600;
  font-style: normal;
}
@font-face {
  font-family: "Lato";
  src: local("Lato Light"), local("Lato-Light"),
    url("/fonts/latolight.woff2") format("woff2"),
    url("/fonts/latolight.woff") format("woff"),
    url("/fonts/latolight.ttf") format("truetype");
  font-weight: 400;
  font-style: normal;
}
.container {
  max-width: 1620px;
  padding: 0 10px;
  margin: auto;
}

.f32 {
  color: black;
  font-family: Lato;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%; /* 38.4px */
  letter-spacing: -0.32px;
}
:root {
  --grey: #939eaa;
  --blue: #005abc;
  --akcent: #1774d8;
  --green: #00af1c;
  --red: #f34439;
}
/* Скрываем крестик по умолчанию */
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
  appearance: none;
}

/* Добавляем свойство для кроссбраузерности */
input[type="search"]::-ms-clear {
  display: none;
}
</style>
