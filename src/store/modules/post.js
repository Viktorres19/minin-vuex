export default {
  state: {
    posts: []
  },
  // мутейшени синхронні, завжди перший параметр - це стейт, другий параметр - це те що ми в нього будемо передавати
  mutations: {
    updatePosts(state, posts) {
      state.posts = posts
    }
  },
  // екшени асинхронні, ми з екшена викликаємо м'ютейшен і м'ютейшеном змінюємо стейт
  actions: {
    async fetchPosts(context) {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=3')
      const posts = await res.json()

      context.commit('updatePosts', posts)
    }
  },
  getters: {
    // гетер буде щось забирати зі стейта і повертати дані
    allPosts(state) {
      return state.posts
    }
  }
}