<template>
  <div id="app">
    <header>
      <nav>
        <router-link class="router-link" to="dashboard"> Dashboard </router-link>
        <router-link class="router-link" to="about"> About </router-link>
        <router-link class="router-link" to="notfound"> Not Found </router-link>
      </nav>
    </header>

    <main>
      <div class="container">
        <router-view />
      </div>

    </main>
  </div>
</template>

<script>

</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.router-link {
  padding: 5px;
}

.router-link:visited {
  color: #00f;
}

nav {
  margin-bottom: 15px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave {
  opacity: 1;
}
</style>