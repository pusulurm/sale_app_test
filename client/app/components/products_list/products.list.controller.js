class ProductsListController {
  constructor() {
    this.productsList = [
      {
        id: "1",
        type: "products",
        attributes: {
          name: "Awesome Rubber Car",
          sold_out: true,
          category: "tools",
          price: 3011,
          under_sale: true,
          sale_price: 1551,
          rating : 4
        },
      },
      {
        id: "2",
        type: "products",
        attributes: {
          name: "Durable Rubber Bag",
          sold_out: true,
          category: "tools",
          price: 1851,
          under_sale: false,
          sale_price: 1760,
          rating : 5
        },
      },
      {
        id: "3",
        type: "products",
        attributes: {
          name: "Fantastic Steel Computer",
          sold_out: false,
          category: "brushes",
          price: 3219,
          under_sale: false,
          sale_price: 1610,
          rating : 4
        },
      },
      {
        id: "4",
        type: "products",
        attributes: {
          name: "Rustic Copper Pants",
          sold_out: true,
          category: "markup",
          price: 2121,
          under_sale: false,
          sale_price: 1535,
          rating : 3
        },
      },
      {
        id: "5",
        type: "products",
        attributes: {
          name: "Synergistic Linen Lamp",
          sold_out: false,
          category: "markup",
          price: 5133,
          under_sale: true,
          sale_price: 2128,
          rating : 4
        },
      },
      {
        id: "6",
        type: "products",
        attributes: {
          name: "Intelligent Concrete Wallet",
          sold_out: false,
          category: "brushes",
          price: 577,
          under_sale: false,
          sale_price: 3,
          rating : 4
        },
      },
      {
        id: "7",
        type: "products",
        attributes: {
          name: "Enormous Aluminum Chair",
          sold_out: false,
          category: "markup",
          price: 2320,
          under_sale: true,
          sale_price: 117,
          rating : 3
        },
      },
      {
        id: "8",
        type: "products",
        attributes: {
          name: "Aerodynamic Paper Computer",
          sold_out: true,
          category: "brushes",
          price: 7995,
          under_sale: true,
          sale_price: 6381,
          rating : 4
        },
      },
      {
        id: "9",
        type: "products",
        attributes: {
          name: "Synergistic Bronze Shirt",
          sold_out: false,
          category: "tools",
          price: 6176,
          under_sale: true,
          sale_price: 160,
          rating : 2
        },
      }
    ];

    this.sortOptions = ["Top Rated", "Name", "Price High to Low", "Price Low to High"];
  }
}

export default ProductsListController;
