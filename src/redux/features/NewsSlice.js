import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    loading:false,
    category:null,
    articles:[],
    totalResults:0,
    page:1,
    search:null,
};

const NewsSlice = createSlice({
    name: "news",
    initialState,
    reducers: {
      SetLoading(state,action){
        state.loading = action.payload
      },
      setCategory(state,action){
        state.category = action.payload
      },
      AddArticles(state, action) {
        state.articles = [...state.articles, ...action.payload]
      },
      SetTotalResults(state,action){
        state.totalResults = action.payload
      },
      SetPage(state,action){
        state.page = action.payload
      },
      SetSearch(state,action){
        state.search = action.payload
      },
      ClearArticles(state,action){
        state.articles = action.payload
      },
    },
  });

  export const {
   AddArticles,
   SetLoading,
   SetTotalResults,
   SetPage,
   setCategory,
   SetSearch,
   ClearArticles,
  } = NewsSlice.actions;
  
  export const { reducer: newsReducer } = NewsSlice;

  export default NewsSlice.reducer