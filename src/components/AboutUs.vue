<template>
  <div id="contents">
    <h2 id="title">ABOUT US</h2>
    <div id="message-area">
      <p id="message1">昨今、電子書籍で本を購入することが多くなり、目的なくふと立ち寄った本屋で表紙を見て運命的な出会いをすることもめっきりと減ってしまいました。</p>
      <p id="message2">そんな偶然の出会いを時代に逆らうことなく、ネット上に再現したのがBOOK.tileになります。</p>
      <p id="message3">素敵な本たちとの偶然の出会いがあることを祈っています。</p>

      <h3>Amazonアソシエイトプログラムについて</h3>
      <p>Amazon.co.jpを宣伝しリンクすることによってサイトが紹介料を獲得できる手段を提供することを目的に設定されたアフィリエイトプログラムである、Amazonアソシエイト・プログラムの参加者です。</p>
    </div>
    <router-link to="/"><p id="back_button">topへもどる</p></router-link>
  </div>
</template>

<style scoped>
#contents {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top:100px;
}
#title {
  font-size: 300%;
}

#message-area {
  width: 30%;
}

@media (max-width: 480px) {
  #contents {
    padding-top:100px;
  }
  #message-area {
    width: 70%;
  }
}

#message1, #message2, #message3{
  margin-bottom: 30px;
}
</style>