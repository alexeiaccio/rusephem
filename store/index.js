import Vuex from 'vuex'

const makeStore = () => {
  return new Vuex.Store({
    state: {
      posts: [],
      post: {}
    },
    mutations: {
      updatePosts (state, { posts }) {
        state.posts = posts
      },
      updatePost (state, { post }) {
        state.post = post
      }
    },
    actions: {
      getPostWithSlug ({commit, state}, slug) {
        let post = state.posts.find((post) => {
          return (post.slug === slug)
        })
        commit('updatePost', { post: post })
      },
      getPosts ({commit}) {
        commit('updatePosts', { posts: [
          {
            id: '2017-09-21-new',
            slug: 'new',
            title: 'New',
            created_at: '09/21/2017',
            meta: {
              id: 1,
              name: 'New',
              content: 'New'
            }
          }
        ]})
      }
    }
  })
}

export default makeStore
