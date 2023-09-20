import { createSlice, createAsyncThunk,createAction } from '@reduxjs/toolkit';
import {NOTIFICATION} from "../../config/constants/api"
import { Get } from '../../config/api/get';

const initialState = {
  count: 0,
  loading: false,
  error: null,
  latestNotifications: [],
};

export const addLatestNotification = createAction('notifications/addLatestNotification');

export const fetchNotifications = createAsyncThunk(
    'notifications/fetchNotifications',
    async (token, thunkAPI) => {
      if (!token) {
        return;
      }
  
      try {
        const response = await Get(NOTIFICATION.getUnreadNotifications, token);
        console.log("response>>ss>>>>", response);
  
        if (response?.status) {
          const latestNotifications = response?.data?.notifications;
          return {
            count: response?.data?.totalUnreadCount,
            latestNotifications,
          };
        } else {
          console.log("response", response);
          return {
            count: 0,
            latestNotifications: [],
          };
        }
      } catch (error) {
        throw error;
      }
    }
  );

const notificationsSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    incrementCount: (state) => {
      state.count += 1;
    },
    decrementCount: (state) => {
      state.count -= 1;
    },
    resetCount: (state) => {
      state.count = 0;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNotifications.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchNotifications.fulfilled, (state, action) => {
        state.loading = false;
        state.count = action.payload.count;
        state.latestNotifications = action.payload.latestNotifications;
      })
      .addCase(fetchNotifications.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.count = 0;
        state.latestNotifications = [];
      });

      builder.addCase(addLatestNotification, (state, action) => {
          state.latestNotifications.pop(); // Remove the oldest notification
          state.latestNotifications.unshift(action.payload); // Add the new one
        
      });
  },
});

export const { incrementCount, decrementCount, resetCount } = notificationsSlice.actions;

export default notificationsSlice.reducer;