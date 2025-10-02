import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getData,
  createData,
  updateData,
  deleteData,
} from "../../service/api/userService";

export const fetchUsers = createAsyncThunk("data/fetchUsers", async () => {
  const users = await getData();
  return users;
});

export const createUser = createAsyncThunk(
  "data/createUser",
  async (newUser) => {
    const user = await createData(newUser);
    return user;
  }
);

export const editUser = createAsyncThunk(
  "data/editUser",
  async ({ id, updatedUser }) => {
    const user = await updateData(id, updatedUser);
    return user;
  }
);

export const removeUser = createAsyncThunk("data/removeUser", async (id) => {
  await deleteData(id);
  return id;
});

const dataSlice = createSlice({
  name: "data",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    // GET
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });

    // CREATE
    builder.addCase(createUser.fulfilled, (state, action) => {
      state.items.push(action.payload);
    });

    // UPDATE
    builder.addCase(editUser.fulfilled, (state, action) => {
      const index = state.items.findIndex((u) => u.id === action.payload.id);
      if (index !== -1) {
        state.items[index] = action.payload;
      }
    });

    // DELETE
    builder.addCase(removeUser.fulfilled, (state, action) => {
      state.items = state.items.filter((u) => u.id !== action.payload);
    });
  },
});

export default dataSlice.reducer;
