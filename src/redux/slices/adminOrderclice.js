import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Fetch all orders (Admin)
export const fetchAllorders = createAsyncThunk(
  "adminOrders/fetchAllOrders",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/admin/orders`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("UserToken")}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Update order delivery status (Admin)
export const updateOrderStatus = createAsyncThunk(
  "adminOrders/updateOrderStatus",
  async ({ id, status }, { rejectWithValue }) => {
    try {
      const response = await axios.patch(
        `${import.meta.env.VITE_BACKEND_URL}/api/admin/orders/${id}`,
        { status },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("UserToken")}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Delete an order (Admin)
export const deleteOrderStatus = createAsyncThunk(
  "adminOrders/deleteOrderStatus",
  async ({ id }, { rejectWithValue }) => {
    try {
      await axios.delete(
        `${import.meta.env.VITE_BACKEND_URL}/api/admin/orders/${id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("UserToken")}`,
          },
        }
      );
      return id; // return deleted order ID
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

const adminOrderSlice = createSlice({
  name: "adminOrders",
  initialState: {
    orders: [],
    totalOrder: 0,
    totalSales: 0,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder

      // Fetch all orders
      .addCase(fetchAllorders.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllorders.fulfilled, (state, action) => {
        state.loading = false;
        state.orders = action.payload;
        state.totalOrder = action.payload.length;

        state.totalSales = action.payload.reduce(
          (acc, order) => acc + (order.totalAmount || 0),
          0
        );
      })
      .addCase(fetchAllorders.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Update order
      .addCase(updateOrderStatus.fulfilled, (state, action) => {
        const updatedOrder = action.payload;
        const index = state.orders.findIndex(
          (order) => order._id === updatedOrder._id
        );

        if (index !== -1) {
          state.orders[index] = updatedOrder;
        }
      })

      // Delete order
      .addCase(deleteOrderStatus.fulfilled, (state, action) => {
        state.orders = state.orders.filter(
          (order) => order._id !== action.payload
        );
      });
  },
});

export default adminOrderSlice.reducer;
