import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const redditBaseUrl = 'https://www.reddit.com';

export const loadContent = createAsyncThunk(
  'content/loadContent',
  async ({page, after}) => {
    let urlEnd = `/r/all/.json?count=25&page=${page}&after=${after}`;
    console.log(urlEnd);
    const response = await fetch(`${redditBaseUrl}${urlEnd}`);
    const json = await response.json();
    console.log(json);
    return json;
  });

export const ContentSlice = createSlice({
  name: 'content',
  initialState: {
    isLoadingContent: true,
    failedToLoadContent: false,
    page: 0,
    after: '',
    content: {

    }

  },
  reducers: {
    changePage: (state, action) => {
      state.page = state.page + action.payload;
    },
    changeAfter: (state, action) => {
      state.after = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(loadContent.pending, (state, action) => {
      state.isLoadingContent = true;
      state.failedToLoadContent = false;
    })
    builder.addCase(loadContent.fulfilled, (state, action) => {
      state.content = action.payload.data.children;
      state.after = action.payload.data.after;
      console.log(state.after);
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

export const { changePage, changeAfter } = ContentSlice.actions;

export default ContentSlice.reducer;