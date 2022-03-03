<template>
  <div id="top-container">
    <ul id="book-list">
      <li class="book-list-item" v-for="(book, index) in book_list" :key="book.index">
        <p v-html="book.link" v-bind:class="classBookSize(index)"></p>
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
      book_list_row_count: 0,
      book_list_column_count: 8
    }
  },
  methods: {
    classBookSize: function (index)  {
      let bookListRow = this.bookListRowCounter(index)
      if (bookListRow === 0) {
        if (index == this.book_list_column_count * bookListRow + 0) {
          return 'book-size0-1'
        } else if (index == this.book_list_column_count * bookListRow + 1) {
          return 'book-size0-2'
        } else if (index == this.book_list_column_count * bookListRow + 2) {
          return 'book-size0-3'
        } else if (index == this.book_list_column_count * bookListRow + 3) {
          return 'book-size0-4'
        } else if (index == this.book_list_column_count * bookListRow + 4) {
          return 'book-size0-5'
        } else if (index == this.book_list_column_count * bookListRow + 5) {
          return 'book-size0-6'
        } else if (index == this.book_list_column_count * bookListRow + 6) {
          return 'book-size0-7'
        } else {
          return 'book-size0-8'
        }
      } else if (bookListRow % 2 === 0) {
        if (index == this.book_list_column_count * bookListRow + 0) {
          return 'book-size1-1'
        } else if (index == this.book_list_column_count * bookListRow + 1) {
          return 'book-size1-2'
        } else if (index == this.book_list_column_count * bookListRow + 2) {
          return 'book-size1-3'
        } else if (index == this.book_list_column_count * bookListRow + 3) {
          return 'book-size1-4'
        } else if (index == this.book_list_column_count * bookListRow + 4) {
          return 'book-size1-5'
        } else if (index == this.book_list_column_count * bookListRow + 5) {
          return 'book-size1-6'
        } else if (index == this.book_list_column_count * bookListRow + 6) {
          return 'book-size1-7'
        } else {
          return 'book-size1-8'
        }
      } else {
        if (index == this.book_list_column_count * bookListRow + 0) {
          return 'book-size2-1'
        } else if (index == this.book_list_column_count * bookListRow + 1) {
          return 'book-size2-2'
        } else if (index == this.book_list_column_count * bookListRow + 2) {
          return 'book-size2-3'
        } else if (index == this.book_list_column_count * bookListRow + 3) {
          return 'book-size2-4'
        } else if (index == this.book_list_column_count * bookListRow + 4) {
          return 'book-size2-5'
        } else if (index == this.book_list_column_count * bookListRow + 5) {
          return 'book-size2-6'
        } else if (index == this.book_list_column_count * bookListRow + 6) {
          return 'book-size2-7'
        } else {
          return 'book-size2-8'
        }
      }
    },
    bookListRowCounter (index) {
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
  grid-template-columns: 1.3fr 1.2fr 1.1fr 1.1fr 1.3fr 1.4fr 1fr 1.3fr;
  grid-template-rows: 23vw 23vw 16.3vw 22.5vw 15.6vw 22vw 15.8vw 22vw 16.1vw 22vw 15.8vw 22.5vw 12.3vw;
}


@media (max-width: 480px) {
  #book-list {
    grid-template-columns: 1fr 1.4fr 1.2fr 1.3fr;
    grid-template-rows: 40vw 40vw 40vw 40vw 40vw 20vw 40vw 40vw 40vw 20vw 40vw 40vw 40vw 20vw 40vw 40vw 40vw 20vw 40vw 40vw 40vw 20vw 40vw 40vw 40vw 20vw;
  }
}

/* size1 */
.book-size0-1 >>> img {
  width: 100%;
}

.book-size0-1 >>> a {
  width: 100%;
}

.book-size0-1 {
  width: 100%;
}

/* size2 */
.book-size0-2 >>> img {
  width: 100%;
}

.book-size0-2 >>> a {
  width: 100%;
}

.book-size0-2 {
  width: 100%;
}

/* size3 */
.book-size0-3 >>> img {
  width: 100%;
}

.book-size0-3 >>> a {
  width: 100%;
}

.book-size0-3 {
  width: 100%;
}

/* size4 */

.book-size0-4 >>> img {
  width: 100%;
}

.book-size0-4 >>> a {
  width: 100%;
}

.book-size0-4 {
  width: 100%;
}

/* size5 */
.book-size0-5 >>> img {
  width: 100%;
}

.book-size0-5 >>> a {
  width: 100%;
}

.book-size0-5 {
  width: 100%;
}

/* size6 */
.book-size0-6>>> img {
  width: 100%;
}

.book-size0-6 >>> a {
  width: 100%;
}

.book-size0-6 {
  width: 100%;
}

/* size7 */
.book-size0-7>>> img {
  width: 100%;
}

.book-size0-7 >>> a {
  width: 100%;
}

.book-size0-7 {
  width: 100%;
}

/* size8 */
.book-size0-8>>> img {
  width: 100%;
}

.book-size0-8 >>> a {
  width: 100%;
}

.book-size0-8 {
  width: 100%;
}

/* size1 */
.book-size1-1 >>> img {
  width: 100%;
}

.book-size1-1 >>> a {
  width: 100%;
}

.book-size1-1 {
  width: 100%;
  position: relative;
  top: -6.8vw;
}

/* size2 */
.book-size1-2 >>> img {
  width: 100%;
}

.book-size1-2 >>> a {
  width: 100%;
}

.book-size1-2 {
  width: 100%;
  position: relative;
  top: -8.9vw;
}

/* size3 */
.book-size1-3 >>> img {
  width: 100%;
}

.book-size1-3 >>> a {
  width: 100%;
}

.book-size1-3 {
  width: 100%;
  position: relative;
  top: -12vw;
}

/* size4 */

.book-size1-4 >>> img {
  width: 100%;
}

.book-size1-4 >>> a {
  width: 100%;
}

.book-size1-4 {
  width: 100%;
  position: relative;
  top: -10vw;
}

/* size5 */
.book-size1-5 >>> img {
  width: 100%;
}

.book-size1-5 >>> a {
  width: 100%;
}

.book-size1-5 {
  width: 100%;
  position: relative;
  top: -6.8vw;
}

/* size6 */
.book-size1-6>>> img {
  width: 100%;
}

.book-size1-6 >>> a {
  width: 100%;
}

.book-size1-6 {
  width: 100%;
  position: relative;
  top: -2.6vw;
}

/* size7 */
.book-size1-7>>> img {
  width: 100%;
}

.book-size1-7 >>> a {
  width: 100%;
}

.book-size1-7 {
  width: 100%;
  position: relative;
  top: -14vw;
}

/* size8 */
.book-size1-8>>> img {
  width: 100%;
}

.book-size1-8 >>> a {
  width: 100%;
}

.book-size1-8 {
  width: 100%;
  position: relative;
  top: -6.8vw;
}


/* size2-1 */
.book-size2-1 >>> img {
  width: 100%;
}

.book-size2-1 >>> a {
  width: 100%;
}

.book-size2-1 {
  width: 100%;
  position: relative;
  top: -3.6vw;
}

/* size2-2 */
.book-size2-2 >>> img {
  width: 100%;
}

.book-size2-2 >>> a {
  width: 100%;
}

.book-size2-2 {
  width: 100%;
  position: relative;
  top: -3.3vw;
}

/* size2-3 */
.book-size2-3 >>> img {
  width: 100%;
}

.book-size2-3 >>> a {
  width: 100%;
}

.book-size2-3 {
  width: 100%;
  position: relative;
  top: -6.5vw;
}

/* size2-4 */

.book-size2-4 >>> img {
  width: 100%;
}

.book-size2-4 >>> a {
  width: 100%;
}

.book-size2-4 {
  width: 100%;
  position: relative;
  top: -4vw;
}

/* size2-5 */
.book-size2-5 >>> img {
  width: 100%;
}

.book-size2-5 >>> a {
  width: 100%;
}

.book-size2-5 {
  width: 100%;
  position: relative;
  top: -3.6vw;
}

/* size2-6 */
.book-size2-6>>> img {
  width: 100%;
}

.book-size2-6 >>> a {
  width: 100%;
}

.book-size2-6 {
  width: 100%;
  position: relative;
  top: -1.4vw;
}

/* size2-7 */
.book-size2-7>>> img {
  width: 100%;
}

.book-size2-7 >>> a {
  width: 100%;
}

.book-size2-7 {
  width: 100%;
  position: relative;
  top: -7.5vw;
}

/* size2-8 */
.book-size2-8>>> img {
  width: 100%;
}

.book-size2-8 >>> a {
  width: 100%;
}

.book-size2-8 {
  width: 100%;
  position: relative;
  top: -3.6vw;
}

.book-list-item {
  height: 30%;
}

@media (max-width: 480px) {
  .book-size0-5 {
    width: 100%;
    position: relative;
    top: -10.5vw;
  }
  .book-size0-6 {
    width: 100%;
    position: relative;
    top: 6vw;
  }
  .book-size0-7 {
    width: 100%;
    position: relative;
    top: -5vw;
  }
  .book-size0-8 {
    width: 100%;
    position: relative;
    top: -1vw;
  }
  
  .book-size1-1 {
    width: 100%;
    position: relative;
    top: -38vw;
  }
  .book-size1-2 {
    width: 100%;
    position: relative;
    top: 10vw;
  }
  .book-size1-3 {
    width: 100%;
    position: relative;
    top: -23vw;
  }
  .book-size1-4 {
    width: 100%;
    position: relative;
    top: -11vw;
  }
  .book-size1-5 {
    width: 100%;
    position: relative;
    top: -47vw;
  }
  .book-size1-6 {
    width: 100%;
    position: relative;
    top: -6vw;
  }
  .book-size1-7 {
    width: 100%;
    position: relative;
    top: 10vw;
  }
  .book-size1-8 {
    width: 100%;
    position: relative;
    top: -13vw;
  }

  .book-size2-1 {
    width: 100%;
    position: relative;
    top: -20vw;
  }
  .book-size2-2 {
    width: 100%;
    position: relative;
    top: 9vw;
  }
  .book-size2-3 {
    width: 100%;
    position: relative;
    top: -9vw;
  }
  .book-size2-4 {
    width: 100%;
    position: relative;
    top: 2vw;
  }
  .book-size2-5 {
    width: 100%;
    position: relative;
    top: -28vw;
  }
  .book-size2-6 {
    width: 100%;
    position: relative;
    top: 10vw;
  }
  .book-size2-7 {
    width: 100%;
    position: relative;
    top: -19vw;
  }
  .book-size2-8 {
    width: 100%;
    position: relative;
    top: -9vw;
  }
}
</style>
