import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const redditBaseUrl = 'https://www.reddit.com';

export const loadContent = createAsyncThunk(
  'content/loadContent',
  async (urlEnd = '/r/all.json') => {
    const response = await fetch(`${redditBaseUrl}${urlEnd}`);
    const json = await response.json();
    return json;
  });

export const ContentSlice = createSlice({
  name: 'content',
  initialState: {
    isLoadingContent: true,
    failedToLoadContent: false,
    content: {

    }

  },
  extraReducers: (builder) => {
    builder.addCase(loadContent.pending, (state, action) => {
      state.isLoadingContent = true;
      state.failedToLoadContent = false;
    })
    builder.addCase(loadContent.fulfilled, (state, action) => {
      state.content = action.payload.data.children;
      state.isLoadingContent = false;
      state.failedToLoadContent = false;
    })
    builder.addCase(loadContent.rejected, (state, action) => {
      state.isLoadingContent = false;
      state.failedToLoadContent = true;
    })
  }
})

export const selectContent = (state) => state.content.content;
export const isLoadingContent = (state) => state.content.isLoadingContent;

export default ContentSlice.reducer;