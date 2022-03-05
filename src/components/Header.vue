<template>
  <div id="header-left">
    <!-- <router-link to="/search">
      <img src="@/assets/search.png">
    </router-link> -->
  </div>
  <div id="header-center">
    <h1 id="app-name">Book. Title</h1>
    <!-- <div class="selected-category">今日のトピック</div> -->
  </div>
  <div id="header-right">
    <div ref="elRoot">
      <div class="hamburger_btn" v-on:click='ActiveMenu=!ActiveMenu'>
        <span class="line line_01" v-bind:class="{'btn_line01':ActiveMenu}"></span>
        <span class="line line_02" v-bind:class="{'btn_line02':ActiveMenu}"></span>
        <span class="line line_03" v-bind:class="{'btn_line03':ActiveMenu}"></span>
      </div>
      <transition name="menu">
        <div class="menu" v-show="ActiveMenu">
            <ul class="menu-list">
                <li class="menu-item" v-on:click='ActiveMenu=!ActiveMenu'><router-link to="/"><p>Top</p></router-link></li>
                <li class="menu-item" v-on:click='ActiveMenu=!ActiveMenu'><router-link to="/about_us"><p>ABOUT US</p></router-link></li>
                <!-- <li class="menu-item" v-on:click='ActiveMenu=!ActiveMenu'><router-link to="/search"><p>CATEGORY</p></router-link></li> -->
            </ul>
        </div>
      </transition>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ActiveMenu: false
    }
  },
  mounted () {
    window.addEventListener('click', this._onBlurHandler = (event) => {
      // targetがコンポーネントの中に含まれているものなら何もしない
      if (this.$refs.elRoot.contains(event.target)) {
        return;
      }
      this.$data.ActiveMenu = false;
    });
  },
  beforeUnmount () {
    window.removeEventListener('click', this._onBlurHandler);
  }
}
</script>

<style scoped>
#header-left {
  width: 100%;
  display: flex;
  justify-content: flex-start;
}
#header-center {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
#header-right {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}

#app-name {
  font-weight: bold;
  /* margin-bottom: 5px; */
  font-size: 2vw;
}

@media (max-width: 480px) {
  #app-name {
    font-size: 5vw;
  }
}

.selected-category {
  width: 90%;
  font-size: 5%;
  color: black;
  background-color: white;
  border-radius: 4em;
}

/*ボタン*/
.hamburger_btn {
  position: fixed; /*常に最上部に表示したいので固定*/
  top: 0;
  right: 0;
  width: 70px;
  height: 72px;
  cursor: pointer;
  z-index: 50;
}

.hamburger_btn .line {
  position: absolute;
  top: 0;
  left: 20px;
  width: 32px;
  height: 2px;
  background: #333333;
  text-align: center;
}

.hamburger_btn .line_01 {
  top: 16px;
  transition: 0.4s ease;
}
.hamburger_btn .line_02 {
  top: 26px;
  transition: 0.4s ease;
}
.hamburger_btn .line_03 {
  top: 36px;
  transition: 0.4s ease;
}


.btn_line01 {
  transform: translateY(10px) rotate(-45deg);
  transition: 0.4s ease;
}
.btn_line02 {
  transition: 0.4s ease;
  opacity: 0;
}
.btn_line03 {
  transform: translateY(-10px) rotate(45deg);
  transition: 0.4s ease;
}

/*サイドバー*/
.menu-enter-active, .menu-leave-active {
  transition: opacity 0.4s;
}
.menu-enter, .menu-leave-to {
  opacity: 0;
}
.menu-leave, .menu-enter-to{
  opacity: 1;
}

.menu {
  background-color: rgba(197, 197, 197, 0.8);
  z-index: 30;
  position: fixed;
  width: 30%;
  height: 100%;
  top: 0;
  right: 0;
}

@media (max-width: 480px) {
  .menu {
    width: 100%;
  }
}

.menu-list {
  margin-top: 15%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.menu li {
  list-style: none;
  line-height: 1;
  padding: 1rem;
}

.menu-item {
  color: rgb(66, 66, 66);
  text-decoration: none;
  font-size: 2.2rem;
  padding: 0 2rem;
  font-weight: bold;
}

</style>
