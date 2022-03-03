<template>
  <div id="top-container">
    <ul id="book-list">
      <li class="book-list-item" v-for="(book) in book_list" :key="book.index">
        <p v-html="book.link" class="book-size"></p>
      </li>
    </ul>
  </div>
</template>

<script>
import bookList from '@/data/book_link_list.json'

export default {
  name: 'Top',
  data: function () {
    return {
      book_list: bookList,
      book_list_row_count: 0
    }
  },
  methods: {
    bookListCounter (index) {
      this.book_list_row_count = Math.floor(index / 8)
      return this.book_list_row_count
    }
  }
}
</script>

<style scoped>
#top-container {
  background-color: #fff;
}

#book-list {
  display: grid;
  /* grid-template-columns: 1.2fr 1.2fr 1.2fr 1.2fr 1.2fr 1.3fr 1.2fr 1.2fr;
  grid-template-rows: 20vw 20.5vw 19vw 19.5vw 19.5vw 19vw 19vw 19.5vw 20vw 19.5vw 19vw 17.5vw 20vw; */
  grid-template-columns: 1.3fr 1.2fr 1fr 1fr 1.5fr 1.5fr 1fr 1.2fr;
  grid-template-rows: 23vw 23vw 22vw 22.5vw 22vw 22vw 22vw 22vw 22vw 22vw 22vw 22.5vw;
}

@media (max-width: 480px) {
  #book-list {
    /* grid-template-columns: 1.2fr 1.2fr 1.2fr 1.3fr;
    grid-template-rows: 42.5vw 38vw 38vw 38vw 39vw 39vw 39vw 38.5vw 37.5vw 39vw 37.5vw 39vw 38.5vw 39vw 37vw 36vw 39.5vw 37.5vw 37.5vw 37.5vw 37.5vw 39vw 38vw 38vw 39vw; */
    grid-template-columns: 1fr 1.4fr 1.2fr 1.3fr;
    grid-template-rows: 45.5vw 42.5vw 40.5vw 44vw 41vw 41vw 41vw 42vw 45vw 39.5vw 40vw 40vw 41vw 41vw 41vw 42vw 42vw 46vw 38vw 42vw 41vw 41vw 42vw 41vw 42vw;
  }
}

/* size1 */
.book-size >>> img {
  width: 100%;
}

.book-size >>> a {
  width: 100%;
}

.book-size {
  width: 100%;
}
</style>