import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  addToCart,
  deletItemsFromCart,
  fetchItemsByUserId,
  resetCart,
  updateCart,
} from "./cartAPI";

const initialState = {
  status: "idle",
  items: [],
  cartLoaded: false
};

export const addToCartAsync = createAsyncThunk(
  "cart/addToCart",
  async (item) => {
    const response = await addToCart(item);
    return response.data;
  }
);

export const fetchItemsByUserIdAsync = createAsyncThunk(
  "cart/fetchItemsByUserId",
  async () => {
    const response = await fetchItemsByUserId();
    return response.data;
  }
);
export const updateCartAsync = createAsyncThunk(
  "cart/updateCart",
  async (update) => {
    const response = await updateCart(update);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const deletItemsFromCartAsync = createAsyncThunk(
  "cart/deletItemsFromCart",
  async (update) => {
    const response = await deletItemsFromCart(update);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);
export const resetCartAsync = createAsyncThunk(
  "cart/resetCart",
  async () => {
    const response = await resetCart();
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);
export const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addToCartAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addToCartAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.items.push(action.payload);
      })
      .addCase(fetchItemsByUserIdAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchItemsByUserIdAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.items = action.payload;
        state.cartLoaded = true;
      })
      .addCase(fetchItemsByUserIdAsync.rejected, (state, action) => {
        state.status = 'idle';
        state.cartLoaded = true;
      })
      .addCase(updateCartAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateCartAsync.fulfilled, (state, action) => {
        state.status = "idle";
        const index = state.items.findIndex(
          (item) => item.id === action.payload.id
        );
        state.items[index] = action.payload;
      })
      .addCase(deletItemsFromCartAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deletItemsFromCartAsync.fulfilled, (state, action) => {
        state.status = "idle";
        const index = state.items.findIndex(
          (item) => item.id === action.payload.id
        );
        state.items.splice(index, 1);
      })
      .addCase(resetCartAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(resetCartAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.items = [];
      });
  },
});

export const { increment } = cartSlice.actions;

export const selectItems = (state) => state.cart.items;
export const selectCartStatus = (state) => state.cart.status;
export const selectCartLoaded = (state) => state.cart.cartLoaded;


export default cartSlice.reducer;
