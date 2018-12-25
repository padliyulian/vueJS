import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  strict: true,
  state: {
    products: [{
        name: 'nike air jordan 12',
        price: 3400000
      },
      {
        name: 'nike kyrie 4',
        price: 3100000
      },
      {
        name: 'nike lebron 19 gold',
        price: 3300000
      },
      {
        name: 'nike kobe',
        price: 3900000
      },
      {
        name: 'under armour curry 6',
        price: 3400000
      }
    ]
  },
  getters: {
    saleProduct: state => {
      let saleProducts = state.products.map(product => {
        return {
          name: `** ${product.name} **`,
          price: product.price / 2
        }
      });
      return saleProducts;
    }
  },
  mutations: {
    reducePrice: (state, payload) => {
      state.products.forEach(product => {
        product.price -= payload;
      });
    }
  },
  actions: {
    reducePrice: (context, payload) => {
      setTimeout(function () {
        context.commit('reducePrice', payload);
      }, 3000);
    }
  }
});
