import { createStore } from 'vuex'

export default createStore({
  state: {
    user: {
      id: null,
      name: null,
      email: null,
      cart: [
        { id: 1, description: "", price: 200, inStock: 3, image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
      ]
    },
    items: [
      {
        productName: "Phone",
        coverImage: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=376&q=80',
        products: [
          { id: 1, description: "", price: 200, inStock: 3, image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
          { id: 2, description: "", price: 200, inStock: 3, image: "https://images.unsplash.com/photo-1572038455931-2f4fd9bca74d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" }
        ]
      },
      {
        productName: "Tablets",
        coverImage: 'https://images.unsplash.com/photo-1590103514924-009a76183beb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
        products: [
          { id: 1, description: "", price: 200, inStock: 3, image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
          { id: 2, description: "", price: 200, inStock: 3, image: "https://images.unsplash.com/photo-1572038455931-2f4fd9bca74d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" }
        ]
      },

    ],
  },
  getters: {
    items: (state) => state.items,
    cart: (state) => state.user.cart
  },
  mutations: {
    SET_USER_DATA: (state, payload) => {
      state.user.id = payload.id;
      state.user.name = payload.name;
      state.user.email = payload.email
  },
  },
  actions: {
    setUserData(context, userdata) {
      context.commit('SET_USER_DATA', userdata)
  },
  },
  modules: {
  }
})
