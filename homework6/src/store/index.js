import { createStore } from 'vuex'
import { vuexfireMutations } from "vuexfire";
import VuexPersist from 'vuex-persist'

const vuexLocal = new VuexPersist({
  storage: window.localStorage
})


export default createStore({
  state: {
    user: {
      id: null,
      name: null,
      email: null,
      cart: [],
      orders: [],
    },
    items: [
      {
        productName: "Телефоны",
        coverText: "мобильный телефон, предназначенный для работы в сетях сотовой связи; использует приёмопередатчик радиодиапазона и традиционную телефонную коммутацию для осуществления телефонной связи на территории зоны покрытия сотовой сети.",
        coverImage: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=376&q=80',
        products: [
          {
            id: 1, name: "Meizu", description: ["Модель: 2019 г., сентябрь",
              "Операционная система Android 10, EMUI 10",
              "Процессор HiSilicon Kirin 990",
              "Аккумулятор Li-Pol 4200 мАч, быстрая зарядка: SuperCharge 40 Вт",
              "Вес 196 г.",
              "Размеры 160,8 х 76,1 х 8,4 мм"], price: 200, inStock: 3, image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
          },
          {
            id: 2, name: "Apple", description: ["Модель: 2019 г., август",
              "Операционная система Android 9.0 (Pie)",
              "Процессор Exynos 9825",
              "Аккумулятор Li-Ion 4300 мАч",
              "Вес 196 г.",
              "Размеры 77.2 × 162.3 × 7.9 мм"], price: 200, inStock: 3, image: "https://images.unsplash.com/photo-1572038455931-2f4fd9bca74d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
          },
          {
            id: 3, name: "Xaomi", description: ["Модель: 2020 г., август",
              "Операционная система Android 9.0 (Pie)",
              "Процессор Exynos 9825",
              "Аккумулятор Li-Ion 4300 мАч",
              "Вес 195 г.",
              "Размеры 77.2 × 162.3 × 7.9 мм"], price: 200, inStock: 1, image: "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=376&q=80"
          }
        ]
      },
      {
        productName: "Планшеты",
        coverText: "Планшетный компьютер, или электронный планшет — собирательное понятие, включающее различные типы электронных устройств с сенсорным экраном, позволяющим управлять компьютерными программами, через прикосновение пальцами к объектам программы на экране.",
        coverImage: 'https://images.unsplash.com/photo-1590103514924-009a76183beb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
        products: [
          {
            id: 4, name: "Lenovo", description: ["Дисплей	12.5 дюйма, 1920х1080, IPS",
              "Размеры	291х193x8 мм ",
              "Вес	0.79/1.27 кг",
              "Операционная система	Windows 10 64bit",
              "Процессор	Intel Core M3-6Y30, 2 ядра, 0.9-2.2 ГГц (Skylake, 14 нм)",
              "ОЗУ	4 ГБ LPDDR3 1600 МГц",
              "Графика	Intel HD Graphics 515",
              "Накопитель	SSD 128 ГБ (M.2)"], price: 200, inStock: 3, image: "https://static.eldorado.ru/photos/71/715/283/81/new_71528381_l_1574070679.jpeg"
          },
          { id: 5,name: "Samsung", description: ["Дисплей	SuperAMOLED, 10,5 дюйма, 2560x1600 287 ppi",
            "Корпус	размеры 244.5x159.5x5.7 мм, вес 420 г",
            "Процессор	Qualcomm Snapdragon 855 (7 нм), 1x2.84 ГГц Kryo 485, 3x2.42 ГГц Kryo 485, 4x1.78 ГГц Kryo 485, графика Adreno 640",
            "Оперативная память	6 ГБ",
            "Флеш-память	128 ГБ + MicroSD",
            "Камера	13 МП, f/2.0, 1/3.4', 1.0µm, AF + 5 МП, f/2.2, (сверхширокоугольная), 1.12µm, фронтальная камера 8 МП, f/2.0"], price: 200, inStock: 3, image: "https://avatars.mds.yandex.net/get-mpic/1363071/img_id3680721020434383801.jpeg/orig" 
          },
          { id: 6,name: "Noname", description: ["Дисплей	SuperAMOLED, 10,5 дюйма, 2560x1600 287 ppi",
            "Корпус	размеры 244.5x159.5x5.7 мм, вес 420 г",
            "Процессор	Qualcomm Snapdragon 855 (7 нм), 1x2.84 ГГц Kryo 485, 3x2.42 ГГц Kryo 485, 4x1.78 ГГц Kryo 485, графика Adreno 640",
            "Оперативная память	6 ГБ",
            "Флеш-память	128 ГБ + MicroSD",
            "Камера	13 МП, f/2.0, 1/3.4', 1.0µm, AF + 5 МП, f/2.2, (сверхширокоугольная), 1.12µm, фронтальная камера 8 МП, f/2.0"], price: 230, inStock: 1, image: "https://images.unsplash.com/photo-1590103514924-009a76183beb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" 
          },
        ]
      },

    ],
  },
  getters: {
    items: (state) => state.items,
    cart: (state) => state.user.cart,
    user: (state) => state.user,
  },
  mutations: {
    ...vuexfireMutations,
    SET_USER_DATA: (state, payload) => {
      state.user.id = payload.id;
      state.user.name = payload.name;
      state.user.email = payload.email
      state.user.orders = payload.orders
    },
    ADD_Item(state, product) {
      state.user.cart.push(product);
      state.items.find(d => d.products.find(a => a.id == product.id)).products.find(a => a.id == product.id).inStock--;
    },
    REMOVE_Item(state, product) {
      state.user.cart.splice(product[1], 1);
      //state.user.cart = state.user.cart.filter(a => a.id !== product[product[1]]);     
      state.items.find(d => d.products.find(a => a.id == product[0].id)).products.find(a => a.id == product[0].id).inStock++;
    },
    CLEAR_DATA: (state) => {
      state.user.id = null;
      state.user.name = null;
      state.user.email = null;
      state.user.cart = [];
    },
    CLEAR_CART: (state) => {
      state.user.cart = [];
    }
  },
  actions: {
    setUserData(context, userdata) {
      context.commit('SET_USER_DATA', userdata)
    },
    addItem(context, product) {
      context.commit("ADD_Item", product);
    },
    removeItem(context, product) {
      context.commit("REMOVE_Item", product);
    },
    clearData(context, userData) {
      context.commit('CLEAR_DATA', userData)
    },
    clearCart(context, data) {
      context.commit('CLEAR_CART', data)
    }
  },
  modules: {
  },
  plugins: [vuexLocal.plugin]
})
