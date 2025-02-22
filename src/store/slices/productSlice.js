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
    productData: [
      {
        id: 1,
        name: "Amul Gold Full Cream Fresh Milk",
        size: "500 ml",
        price: 33,
        time: "30 MINS",
      },

      {
        id: 3,
        name: "Amul Masti Curd",
        size: "1 kg",
        price: 75,
        time: "30 MINS",
      },
      {
        id: 4,
        name: "Amul Masti Curd",
        size: "200 g",
        price: 23,
        time: "30 MINS",
      },
      {
        id: 5,
        name: "Amul Salted Butter",
        size: "100 g",
        price: 60,
        time: "30 MINS",
      },
      {
        id: 6,
        name: "Super Crustless White Bread",
        size: "300 g",
        price: 50,
        time: "30 MINS",
      },
      {
        id: 7,
        name: "Pure Eggs Special",
        size: "6 pieces",
        price: 55,
        time: "30 MINS",
      },

      {
        id: 9,
        name: "Amul Masti Curd",
        size: "1 kg",
        price: 75,
        time: "30 MINS",
      },
      {
        id: 10,
        name: "Amul Masti Curd",
        size: "200 g",
        price: 23,
        time: "30 MINS",
      },
      {
        id: 11,
        name: "Amul Salted Butter",
        size: "100 g",
        price: 60,
        time: "30 MINS",
      },
      {
        id: 12,
        name: "Super Crustless White Bread",
        size: "300 g",
        price: 50,
        time: "30 MINS",
      },
      {
        id: 13,
        name: "Pure Eggs Special",
        size: "6 pieces",
        price: 55,
        time: "30 MINS",
      },
      {
        id: 14,
        name: "Amul Gold Full Cream Fresh Milk",
        size: "500 ml",
        price: 33,
        time: "30 MINS",
      },
    ],
  },
  {
    title: "Rolling paper & tobacco",
    productData: [
      {
        id: 15,
        name: "Amul Gold Full Cream Fresh Milk",
        size: "500 ml",
        price: 33,
        time: "30 MINS",
      },

      {
        id: 17,
        name: "Amul Masti Curd",
        size: "1 kg",
        price: 75,
        time: "30 MINS",
      },
      { name: "Amul Masti Curd", size: "200 g", price: 23, time: "30 MINS" },
      { name: "Amul Salted Butter", size: "100 g", price: 60, time: "30 MINS" },
      {
        id: 18,
        name: "Super Crustless White Bread",
        size: "300 g",
        price: 50,
        time: "30 MINS",
      },
      {
        id: 19,
        name: "Pure Eggs Special",
        size: "6 pieces",
        price: 55,
        time: "30 MINS",
      },

      {
        id: 21,
        name: "Amul Masti Curd",
        size: "1 kg",
        price: 75,
        time: "30 MINS",
      },
      {
        id: 22,
        name: "Amul Masti Curd",
        size: "200 g",
        price: 23,
        time: "30 MINS",
      },
      {
        id: 23,
        name: "Amul Salted Butter",
        size: "100 g",
        price: 60,
        time: "30 MINS",
      },
      {
        id: 24,
        name: "Super Crustless White Bread",
        size: "300 g",
        price: 50,
        time: "30 MINS",
      },
      {
        id: 25,
        name: "Pure Eggs Special",
        size: "6 pieces",
        price: 55,
        time: "30 MINS",
      },
      {
        id: 26,
        name: "Amul Gold Full Cream Fresh Milk",
        size: "500 ml",
        price: 33,
        time: "30 MINS",
      },
    ],
  },
];
const categories = [
  {
    id: 1,
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-12/paan-corner_web.png",
    link: "/paan-corner",
    name: "Paan corner",
  },
  {
    id: 2,
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-2_10.png",
    link: "/dairy-bread-eggs",
    name: "Dairy bread eggs",
  },
  {
    id: 3,
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-3_9.png",
    link: "/fruits-vegetables",
    name: "Fruit vegetables",
  },
  {
    id: 4,
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-4_9.png",
    link: "/cold-drink",
    name: "Cold drink",
  },
  {
    id: 5,
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-5_4.png",
    link: "/snacks",
    name: "Snacks",
  },
  {
    id: 6,
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-6_5.png",
    link: "/instant-food",
    name: "Instant food",
  },
  {
    id: 7,
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-7_3.png",
    link: "/sweet-tooth",
  },
  {
    id: 8,
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-8_4.png",
    link: "/bakery",
  },
  {
    id: 9,
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-9_3.png",
    link: "/tea-coffee",
  },
  {
    id: 10,
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-10.png",
    link: "/aata-dal",
    name: "Atta dal",
  },
  {
    id: 11,
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-12/paan-corner_web.png",
    link: "/paan-corner",
    name: "Paan corner",
  },
  {
    id: 12,
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-2_10.png",
    link: "/dairy-bread-eggs",
    name: "dairy-bread-eggs",
  },
  {
    id: 13,
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-3_9.png",
    link: "/fruits-vegetables",
    name: "fruits-vegetables",
  },
  {
    id: 14,
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-4_9.png",
    link: "/cold-drink",
    name: "cold-drink",
  },
  {
    id: 15,
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-5_4.png",
    link: "/snacks",
    name: "snacks",
  },
  {
    id: 16,
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-6_5.png",
    link: "/instant-food",
    name: "instant-food",
  },
  {
    id: 17,
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-7_3.png",
    link: "/sweet-tooth",
    name: "sweet-tooth",
  },
  {
    id: 18,
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-8_4.png",
    link: "/bakery",
    name: "bakery",
  },
  {
    id: 19,
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-9_3.png",
    link: "/tea-coffee",
    name: "Tea-coffee",
  },
];
const shopByStore = [
  { link: "/", name: "Toy Store", image: "/path-to-image1.png" },
  { link: "/", name: "Pet Store", image: "/path-to-image2.png" },
  { link: "/", name: "Stationaery Store", image: "/path-to-image3.png" },
  { link: "/", name: "Kids Store", image: "/path-to-image4.png" },
];
const hotDeal = [
  {
    name: "Amul Gold Full Cream Fresh Milk",
    size: "500 ml",
    price: 33,
    time: "30 MINS",
    discount: "33% OFF",
  },
  {
    name: "Amul Milk",
    size: "500 ml",
    price: 60,
    time: "30 MINS",
    discount: "30% OFF",
  },
  {
    name: "Amul Masti Curd",
    size: "1 kg",
    price: 75,
    time: "30 MINS",
    discount: "50% OFF",
  },
];
const cookingIdeas = [
  { link: "/", name: "Palak Pakoda", image: "/path-to-image1.png" },
  { link: "/", name: "Payaz Pakoda", image: "/path-to-image2.png" },
  { link: "/", name: "Rava Dhokla", image: "/path-to-image3.png" },
];
const haveYouTriedData = [
  { link: "/", name: "Home Essentails", image: "/path-to-image1.png" },
  { link: "/", name: "Travel Essentails", image: "/path-to-image2.png" },
  { link: "/", name: "Fashion Basics", image: "/path-to-image3.png" },
  { link: "/", name: "Plant & More", image: "/path-to-image3.png" },
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
