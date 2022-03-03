<template>
  <div id="contents">
    <div class="search-container">
      <input class="search-form" type="text" placeholder="キーワードを入力" v-model="search_word">
      <input class="search-button" type="submit" value="検索">
    </div>
    <div class="category-container">
      <div class="category">a</div>
      <div class="category">b</div>
      <div class="category">c</div>
      <div class="category">d</div>
      <div class="category">e</div>
      <div class="category">f</div>
    </div>
  </div>
</template>

<style scoped>
#contents {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
  padding: 50px 10% 0 10%;
}
.search-container {
  background-color: #fff;
  box-sizing: border-box;
  border: 1px solid #999;
  padding: 3px 10px;
  border-radius: 20px;
  height: 30px;
  width: 20%;
}

.search-form{
  border: none;
  height: 100%;
  width: 90%;
}

.search-form:focus {
  outline: 0;
}

.search-button{
  cursor: pointer;
  font-family: FontAwesome;
  border: none;
  border-radius: 20px;
  background: #dd872580;
  color: #fff;
  font-weight: bold;
  outline : none;
  width: 10%;
  height: 100%;
}

@media (max-width: 480px) {
 .search-container {
   width: 70%;
 }

 .search-form {
   width: 80%;
 }

 .search-button {
   width: 20%;
 }
}

.category-container {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 50px;
}

.category {
  width: 30%;
  height: 30px;
  background-color: #fff;
  box-sizing: border-box;
  border-radius: 20px;
  margin-bottom: 30px;
}
</style>