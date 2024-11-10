import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await fetch(
      "https://67264846302d03037e6d0712.mockapi.io/bike"
    );
    const data = await response.json();

    return data;
  }
);

export const addProductAsync = createAsyncThunk(
  "products/addProduct",
  async (newProduct) => {
    const response = await fetch(
      "https://67264846302d03037e6d0712.mockapi.io/bike",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProduct),
      }
    );
    const data = await response.json();

    return data;
  }
);

export const updateProductAsync = createAsyncThunk(
  "products/updateProduct",
  async (updatedProduct) => {
    const response = await fetch(
      `https://67264846302d03037e6d0712.mockapi.io/bike/${updatedProduct.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedProduct),
      }
    );
    const data = await response.json();

    return data;
  }
);

export const deleteProductAsync = createAsyncThunk(
  "products/deleteProduct",
  async (productId) => {
    await fetch(
      `https://67264846302d03037e6d0712.mockapi.io/bike/${productId}`,
      {
        method: "DELETE",
      }
    );
    return productId;
  }
);

const initialState = {
  products: [],
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })

      .addCase(addProductAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.products.push(action.payload);
      })

      .addCase(updateProductAsync.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.products.findIndex(
          (product) => product.id === action.payload.id
        );
        if (index !== -1) {
          state.products[index] = action.payload;
        }
      })

      .addCase(deleteProductAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.products = state.products.filter(
          (product) => product.id !== action.payload
        );
      });
  },
});

export const { addProduct, updateProduct, deleteProduct } =
  productSlice.actions;

export default productSlice.reducer;
