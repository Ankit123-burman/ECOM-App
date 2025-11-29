import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// ================================
//  LocalStorage Helpers
// ================================
const loadCartFromStorage = () => {
  const storedCart = localStorage.getItem("cart");
  return storedCart ? JSON.parse(storedCart) : { products: [] };
};

const saveCartToStorage = (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

// ================================
//  FETCH CART
// ================================
export const fetchCart = createAsyncThunk(
  "cart/fetchCart",
  async ({ userId, guestId }, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/cart`,
        { params: { userId, guestId } }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data || "Fetch cart failed");
    }
  }
);

// ================================
//  ADD TO CART
// ================================
export const addCart = createAsyncThunk(
  "cart/addToCart",
  async (
    { productId, quantity, size, color, guestId, userId },
    { rejectWithValue }
  ) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/cart`,
        { productId, quantity, size, color, guestId, userId }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data || "Add to cart failed");
    }
  }
);

// ================================
//  UPDATE CART QUANTITY
// ================================
export const updateCartQuantity = createAsyncThunk(
  "cart/updateQuantity",
  async ({ cartItemId, quantity }, { rejectWithValue }) => {
    try {
      const response = await axios.put(
        `${import.meta.env.VITE_BACKEND_URL}/api/cart/${cartItemId}`,
        { quantity }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error?.response?.data || "Update cart quantity failed"
      );
    }
  }
);

// ================================
//  REMOVE FROM CART
// ================================
export const removeFromcart = createAsyncThunk(
  "cart/removeFromcart",
  async ({ cartItemId }, { rejectWithValue }) => {
    try {
      const response = await axios.delete(
        `${import.meta.env.VITE_BACKEND_URL}/api/cart/${cartItemId}`
      );
      return response.data; // updated cart
    } catch (error) {
      return rejectWithValue(
        error?.response?.data || "Remove from cart failed"
      );
    }
  }
);

// ================================
//  MERGE GUEST CART → USER CART
// ================================
export const mergeCart = createAsyncThunk(
  "cart/mergeCart",
  async ({ guestId, userId }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/cart/merge`,
        { guestId, userId },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("userToken")}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data || "Merge cart failed");
    }
  }
);

// ================================
//  SLICE
// ================================
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: loadCartFromStorage(), // { products: [] }
    status: "idle",
    error: null,
  },

  reducers: {
    clearCart: (state) => {
      state.cart = { products: [] };
      localStorage.removeItem("cart");
    },
  },

  extraReducers: (builder) => {
    builder
      // ================================
      // FETCH CART
      // ================================
      .addCase(fetchCart.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.cart = action.payload;
        saveCartToStorage(action.payload);
      })
      .addCase(fetchCart.rejected, (state, action) => {
        state.status = "failed";
        state.error =
          action.payload || action.error.message || "Failed to fetch cart";
      })

      // ================================
      // ADD TO CART
      // ================================
      .addCase(addCart.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(addCart.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.cart = action.payload;
        saveCartToStorage(action.payload);
      })
      .addCase(addCart.rejected, (state, action) => {
        state.status = "failed";
        state.error =
          action.payload || "Failed to add to cart";
      })

      // ================================
      // UPDATE QUANTITY
      // ================================
      .addCase(updateCartQuantity.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(updateCartQuantity.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.cart = action.payload;
        saveCartToStorage(action.payload);
      })
      .addCase(updateCartQuantity.rejected, (state, action) => {
        state.status = "failed";
        state.error =
          action.payload || "Failed to update quantity";
      })

      // ================================
      // REMOVE FROM CART
      // ================================
      .addCase(removeFromcart.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(removeFromcart.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.cart = action.payload;
        saveCartToStorage(action.payload);
      })
      .addCase(removeFromcart.rejected, (state, action) => {
        state.status = "failed";
        state.error =
          action.payload || "Failed to remove item";
      })

      // ================================
      // MERGE CART
      // ================================
      .addCase(mergeCart.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(mergeCart.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.cart = action.payload;
        saveCartToStorage(action.payload);
      })
      .addCase(mergeCart.rejected, (state, action) => {
        state.status = "failed";
        state.error =
          action.payload || "Failed to merge guest cart";
      });
  },
});

export const { clearCart } = cartSlice.actions;
export default cartSlice.reducer;
