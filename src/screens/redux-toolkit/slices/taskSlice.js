import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async thunks for fetching, adding, updating, and deleting tasks
export const fetchTasks = createAsyncThunk("tasks/fetchTasks", async () => {
  const response = await fetch(
    "https://67264846302d03037e6d0712.mockapi.io/redux"
  );
  return response.json();
});

export const addTask = createAsyncThunk("tasks/addTask", async (task) => {
  const response = await fetch(
    "https://67264846302d03037e6d0712.mockapi.io/redux",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    }
  );
  return response.json();
});

export const updateTask = createAsyncThunk("tasks/updateTask", async (task) => {
  const response = await fetch(
    `https://67264846302d03037e6d0712.mockapi.io/redux/${task.id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    }
  );
  return response.json();
});

export const deleteTask = createAsyncThunk(
  "tasks/deleteTask",
  async (taskId) => {
    await fetch(`https://67264846302d03037e6d0712.mockapi.io/redux/${taskId}`, {
      method: "DELETE",
    });
    return taskId;
  }
);

const taskSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.loading = false;
        state.tasks = action.payload;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addTask.fulfilled, (state, action) => {
        state.tasks.push(action.payload);
      })
      .addCase(updateTask.fulfilled, (state, action) => {
        const index = state.tasks.findIndex(
          (task) => task.id === action.payload.id
        );
        if (index !== -1) {
          state.tasks[index] = action.payload;
        }
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.tasks = state.tasks.filter((task) => task.id !== action.payload);
      });
  },
});

export default taskSlice.reducer;
