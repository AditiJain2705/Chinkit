import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Fetch products from an API
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await fetch("/api/products"); // Replace with your API endpoint
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }
    return await response.json();
  }
);
const dummyData = [
  {
    title: "Dairy, Bread & Eggs",
    route:'dbe',
    productData: [
      {
        id: 1,
        name: "Amul Gold Full Cream Fresh Milk",
        size: "500 ml",
        price: 33,
        time: "30 MINS",
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/1c0db977-31ab-4d8e-abf3-d42e4a4b4632.jpg?ts=1706182142",
      },

      {
        id: 2,
        name: "Amul Masti Curd",
        size: "1 kg",
        price: 75,
        time: "30 MINS",
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/c2b22cd4-b144-4266-901a-ff4ae82aa912.jpg?ts=1726473621",
      },
      {
        id: 3,
        name: "Amul Masti Curd",
        size: "200 g",
        price: 23,
        time: "30 MINS",
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/73bcc2db-0799-4014-ab75-029bfcdb8375.jpg?ts=1726473603  ",
      },
      {
        id: 4,
        name: "Amul Salted Butter",
        size: "100 g",
        price: 60,
        time: "30 MINS",
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/0be0d49a-4dae-408a-8786-afae1dd05cb1.jpg?ts=1707312314",
      },
      {
        id: 5,
        name: "Super Crustless White Bread",
        size: "300 g",
        price: 50,
        time: "30 MINS",
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/503609a.jpg",
      },
      {
        id: 6,
        name: "Pure Eggs Special",
        size: "6 pieces",
        price: 55,
        time: "30 MINS",
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/05aeaeb4-4749-4808-9386-6dccb8f17035.jpg?ts=1739355232",
      },

      {
        id: 7,
        name: "Amul Masti Curd",
        size: "1 kg",
        price: 75,
        time: "30 MINS",
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/c2b22cd4-b144-4266-901a-ff4ae82aa912.jpg?ts=1726473621",
      },
      {
        id: 8,
        name: "Amul Masti Curd",
        size: "200 g",
        price: 23,
        time: "30 MINS",
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/73bcc2db-0799-4014-ab75-029bfcdb8375.jpg?ts=1726473603  ",
      },
      {
        id: 9,
        name: "Amul Salted Butter",
        size: "100 g",
        price: 60,
        time: "30 MINS",
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/0be0d49a-4dae-408a-8786-afae1dd05cb1.jpg?ts=1707312314",
      },
      {
        id: 10,
        name: "Super Crustless White Bread",
        size: "300 g",
        price: 50,
        time: "30 MINS",
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/503609a.jpg",
      },
      {
        id: 11,
        name: "Pure Eggs Special",
        size: "6 pieces",
        price: 55,
        time: "30 MINS",
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/05aeaeb4-4749-4808-9386-6dccb8f17035.jpg?ts=1739355232",
      },
      {
        id: 12,
        name: "Amul Gold Full Cream Fresh Milk",
        size: "500 ml",
        price: 33,
        time: "30 MINS",
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/1c0db977-31ab-4d8e-abf3-d42e4a4b4632.jpg?ts=1706182142",
      },
    ],
  },
  {
    title: "Rolling paper & tobacco",
    route:'rpt',
    productData: [
      {
        id: 13,
        name: "Cheetos Cheez Puffs",
        size: "28 g",
        price: 10,
        time: "10 MINS",
        image:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/de6faf0d-7cd2-4c79-b850-1ab4968df46c.jpg?ts=1708590985"
      },

      {
        id: 14,
        name: "Cheez-It Snack",
        size: "42 g",
        price: 75,
        time: "30 MINS",
        image:'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/e9c7dfcb-3e42-4a3e-b13d-9b31476cde4c.jpg'
      },
      {
        id:15,
        name: "Beanly Dark Chocolate Spread with Breadsticks",
        size: "52 g",
        price: 150,
        time: "10 MINS",
        image:'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/bb141b2d-4fd6-4e64-af0c-185464e52abb.jpg?ts=1737021197'
      },
      {
        id:16,
        name: "Cheez-It White Cheddar Cheese Crackers Snack",
        size: "29 g",
        price: 154,
        time: "10 MINS",
        image:'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/52c85487-3399-4731-8385-ce3a52f681bf.jpg?ts=1721899356'
      },
      {
        id: 17,
        name: "Beanly Dark Chocolate Spread with Breadsticks",
        size: "52 g",
        price: 150,
        time: "10 MINS",
        image:'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/bb141b2d-4fd6-4e64-af0c-185464e52abb.jpg?ts=1737021197'
      },
      {
        id: 18,
        name: "Cheetos Cheez Puffs",
        size: "28 g",
        price: 10,
        time: "10 MINS",
        image:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/de6faf0d-7cd2-4c79-b850-1ab4968df46c.jpg?ts=1708590985"
      },

      {
        id: 19,
        name: "Cheez-It Snack",
        size: "42 g",
        price: 75,
        time: "30 MINS",
        image:'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/e9c7dfcb-3e42-4a3e-b13d-9b31476cde4c.jpg'
      },
      {
        id: 20,
        name: "Cheetos Cheez Puffs",
        size: "28 g",
        price: 10,
        time: "10 MINS",
        image:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/de6faf0d-7cd2-4c79-b850-1ab4968df46c.jpg?ts=1708590985"
      },

      {
        id: 21,
        name: "Cheez-It Snack",
        size: "42 g",
        price: 75,
        time: "30 MINS",
        image:'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/e9c7dfcb-3e42-4a3e-b13d-9b31476cde4c.jpg'
      },
      {
        id:22,
        name: "Beanly Dark Chocolate Spread with Breadsticks",
        size: "52 g",
        price: 150,
        time: "10 MINS",
        image:'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/bb141b2d-4fd6-4e64-af0c-185464e52abb.jpg?ts=1737021197'
      },
      {
        id:23,
        name: "Cheez-It White Cheddar Cheese Crackers Snack",
        size: "29 g",
        price: 154,
        time: "10 MINS",
        image:'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/52c85487-3399-4731-8385-ce3a52f681bf.jpg?ts=1721899356'
      },
      {
        id: 24,
        name: "Beanly Dark Chocolate Spread with Breadsticks",
        size: "52 g",
        price: 150,
        time: "10 MINS",
        image:'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/bb141b2d-4fd6-4e64-af0c-185464e52abb.jpg?ts=1737021197'
      },
    ],
  },
];
const categories = [
  {
    id: 25,
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-12/paan-corner_web.png",
    link: "/paan-corner",
    name: "Paan corner",
  },
  {
    id: 26,
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-2_10.png",
    link: "/dairy-bread-eggs",
    name: "Dairy bread eggs",
  },
  {
    id: 27,
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-3_9.png",
    link: "/fruits-vegetables",
    name: "Fruit vegetables",
  },
  {
    id: 28,
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-4_9.png",
    link: "/cold-drink",
    name: "Cold drink",
  },
  {
    id: 29,
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-5_4.png",
    link: "/snacks",
    name: "Snacks",
  },
  {
    id: 30,
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-6_5.png",
    link: "/instant-food",
    name: "Instant food",
  },
  {
    id: 31,
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-7_3.png",
    link: "/sweet-tooth",
    name: "Chocolate",

  },
  {
    id: 32,
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-8_4.png",
    link: "/bakery",
    name:' Bakery'
  },
  {
    id: 33,
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-9_3.png",
    link: "/tea-coffee",
    name:'Tea Coffee'
  },
  {
    id: 34,
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-10.png",
    link: "/aata-dal",
    name: "Atta dal",
  },
  {
    id: 35,
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-12/paan-corner_web.png",
    link: "/paan-corner",
    name: "Paan corner",
  },
  {
    id: 36,
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-2_10.png",
    link: "/dairy-bread-eggs",
    name: "dairy-bread-eggs",
  },
  {
    id: 37,
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-3_9.png",
    link: "/fruits-vegetables",
    name: "fruits-vegetables",
  },
  {
    id: 38,
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-4_9.png",
    link: "/cold-drink",
    name: "cold-drink",
  },
  {
    id: 39,
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-5_4.png",
    link: "/snacks",
    name: "snacks",
  },
  {
    id: 40,
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-6_5.png",
    link: "/instant-food",
    name: "instant-food",
  },
  {
    id: 41,
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-7_3.png",
    link: "/sweet-tooth",
    name: "sweet-tooth",
  },
  {
    id: 42,
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-8_4.png",
    link: "/bakery",
    name: "bakery",
  },
  {
    id: 43,
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-9_3.png",
    link: "/tea-coffee",
    name: "Tea-coffee",
  },
];
const shopByStore = [
  { link: "/", name: "Pet Store", image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/layout-engine/2024-05/pet-store-new-icon-1.png" },
  { link: "/", name: "Electronic Store", image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/layout-engine/2023-07/electrics-store.png" },
  { link: "/", name: "Stationaery Store", image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/layout-engine/2023-07/stationery-store.png" },
  { link: "/", name: "Kids Store", image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/layout-engine/2023-07/kid-store_0.png " },
];
const hotDeal = [
  {
    id:54,
    name: "Amul Gold Fresh Milk",
    size: "500 ml",
    price: 33,
    time: "30 MINS",
    discount: "33% OFF",
    image:
    "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/1c0db977-31ab-4d8e-abf3-d42e4a4b4632.jpg?ts=1706182142",
  },

  {
    id:55,
    name: "Amul Masti Curd",
    size: "1 kg",
    price: 75,
    time: "30 MINS",
    discount: "50% OFF",
    image:
    "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/73bcc2db-0799-4014-ab75-029bfcdb8375.jpg?ts=1726473603  ",
  },
  {
    id:56,
    name: "Amul Salted Butter",
    size: "100 g",
    price: 60,
    time: "30 MINS",
    discount: "20% OFF",
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/0be0d49a-4dae-408a-8786-afae1dd05cb1.jpg?ts=1707312314",
  },
];
const cookingIdeas = [
  { link: "/", name: "Lauki Sabzi", image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/assets/search/usecase/lauki_sabzi_01.png" },
  { link: "/", name: "Aloo Beans Sabji", image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/assets/search/usecase/aloo_beans_sabzi_01.png" },
  { link: "/", name: "Matar Dal", image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/assets/search/usecase/matar_dal_curry_01.png" },
];
const haveYouTriedData = [
  { link: "/", name: "Surface Cleaners", image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/layout-engine/2024-07/1718624426915-Surface-Cleaners-Fresheners.png" },
  { link: "/", name: "Cleaning Tools", image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/layout-engine/2024-07/1718624437262-Cleaning-Tools-Accessories.png" },
  { link: "/", name: "Trash Disposal", image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/layout-engine/2024-07/1718624445022-Trash-Disposal.png" },
  { link: "/", name: "Cleaning Gadgets", image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/layout-engine/2024-07/1718624452674-Smart-Cleaning-Gadgets.png" },
];
export const fetchCategories = createAsyncThunk(
  "products/fetchCategories",
  async () => {
    const response = await fetch("/api/categories"); // Replace with your API endpoint
    if (!response.ok) {
      throw new Error("Failed to fetch categories");
    }
    return await response.json();
  }
);
export const fetchShopByStore = createAsyncThunk(
  "products/fetchShopByStore",
  async () => {
    const response = await fetch("/api/shopByStore"); // Replace with your API endpoint
    if (!response.ok) {
      throw new Error("Failed to fetch shop by store");
    }
    return await response.json();
  }
);
export const fetchHotDeal = createAsyncThunk(
  "products/fetchHotDeal",
  async () => {
    const response = await fetch("/api/hotDeal"); // Replace with your API endpoint
    if (!response.ok) {
      throw new Error("Failed to fetch categories");
    }
    return await response.json();
  }
);
export const fetchCookingIdeas = createAsyncThunk(
  "products/fetchCookingIdeas",
  async () => {
    const response = await fetch("/api/cookingIdeas"); // Replace with your API endpoint
    if (!response.ok) {
      throw new Error("Failed to fetch CookingIdeas");
    }
    return await response.json();
  }
);
export const fetchHaveYouTriedData = createAsyncThunk(
  "products/fetchHaveYouTriedData",
  async () => {
    const response = await fetch("/api/haveYouTriedData"); // Replace with your API endpoint
    if (!response.ok) {
      throw new Error("Failed to fetch  have you tried data");
    }
    return await response.json();
  }
);
const productSlice = createSlice({
  name: "products",
  initialState: {
    products: dummyData,
    categories: categories,
    status: "succeeded", // Idle state for products
    categoriesStatus: "succeeded", // Idle state for categories
    error: null,
    shopByStore: shopByStore,
    hotDeal: hotDeal,
    categoriesError: null,
    cookingIdeas: cookingIdeas,
    haveYouTriedData: haveYouTriedData,
  },
  reducers: {
    // Reducers for manual updates can go here (optional)
  },
  extraReducers: (builder) => {
    // Fetch Products
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });

    // Fetch Categories
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.categoriesStatus = "loading";
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.categoriesStatus = "succeeded";
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.categoriesStatus = "failed";
        state.categoriesError = action.error.message;
      });
    builder
      .addCase(fetchShopByStore.pending, (state) => {
        state.shopByStore = "loading";
      })
      .addCase(fetchShopByStore.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.shopByStore = action.payload;
      })
      .addCase(fetchShopByStore.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
    builder
      .addCase(fetchHotDeal.pending, (state) => {
        state.shopByStore = "loading";
      })
      .addCase(fetchHotDeal.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.shopByStore = action.payload;
      })
      .addCase(fetchHotDeal.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
    builder
      .addCase(fetchCookingIdeas.pending, (state) => {
        state.shopByStore = "loading";
      })
      .addCase(fetchCookingIdeas.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.shopByStore = action.payload;
      })
      .addCase(fetchCookingIdeas.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
    builder
      .addCase(fetchHaveYouTriedData.pending, (state) => {
        state.shopByStore = "loading";
      })
      .addCase(fetchHaveYouTriedData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.shopByStore = action.payload;
      })
      .addCase(fetchHaveYouTriedData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default productSlice.reducer;
