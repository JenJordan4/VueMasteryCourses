var app = new Vue({
  el:  '#app',
  data: {
    product: 'Socks',
    description: 'These warm and wooly socks will keep your feet comfy!',
    image: './socks_green.jpg',
    inStock: true,
    details: ["80% cotton", "20% polyester", "Gender-neutral"],
    variants: [
      {
        variantId: 2234,
        variantColor: 'green',
        variantImage: './socks_green.jpg'
      },
      {
        variantId: 2235,
        variantColor: 'blue',
        variantImage: './socks_blue.jpg'
      }
    ],
    cart: 0
  },
  methods: {
    addToCart: function () {
      this.cart += 1
    },
    updateProduct: function (variantImage) {
      this.image = variantImage
    }
  }
})