<template>
  <div id="header-container">
    <Header/>
  </div>
  <div id="container">
    <router-view/>
  </div>
  <div id="footer-container">
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

li {
  list-style: none;
}

a{
  color: #fff;
  text-decoration: none;
}

a:hover{
  color:#2c3e50;
}

body {
  position: relative;
  background: url('./assets/background.jpg') center;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  backdrop-filter: blur(200px);
}

#container {
  /* position: absolute;
  top: 65px;
  z-index: -50; */
  min-height: calc(100vh - 120px);
  padding-bottom: 50px;
}

#header-container {
  height: 50px;
  box-shadow: 0px 0px 5px 2px rgba(0,0,0,0.4);
  padding: 5px 5% 10px 5%;
  display: flex;
  justify-content: space-around;
  color: white;
  /* position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100; */
}

#footer-container {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  font-size: 70%;
  flex-direction: column;
  width: 100%;
}
</style>
