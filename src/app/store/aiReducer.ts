import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AIState } from "../types/AIState";

// Define the initial state
const initialState: AIState = {
  insightSummary: {
    total_queries: 1500,
    successful_queries: 1350,
    failed_queries: 150,
    average_response_time: 0.45,
  },
  categoryDistribution: {
    small_talk: 300,
    technical_support: 450,
    sales_inquiries: 350,
    customer_service: 400,
  },
  responseTimes: {
    day_wise: [
      { date: "2023-05-01", average_time: 0.4 },
      { date: "2023-05-02", average_time: 0.42 },
      { date: "2023-05-03", average_time: 0.35 },
      { date: "2023-05-04", average_time: 0.5 },
      { date: "2023-05-05", average_time: 0.47 },
    ],
    week_wise: [
      { week: "18", average_time: 0.45 },
      { week: "19", average_time: 0.43 },
      { week: "20", average_time: 0.5 },
      { week: "21", average_time: 0.46 },
      { week: "22", average_time: 0.41 },
    ],
  },
  userSatisfaction: {
    ratings: [
      { rating: 1, count: 15 },
      { rating: 2, count: 35 },
      { rating: 3, count: 200 },
      { rating: 4, count: 500 },
      { rating: 5, count: 600 },
    ],
  },
  usageStatistics: {
    by_platform: {
      iOS: 600,
      Android: 700,
      Web: 200,
    },
    by_country: {
      USA: 800,
      India: 250,
      Germany: 150,
      Japan: 100,
      Brazil: 200,
    },
  },
};

// Create a slice for AI data
const aiSlice = createSlice({
  name: "aiData",
  initialState,
  reducers: {
    setInsightSummary(state, action: PayloadAction<AIState["insightSummary"]>) {
      state.insightSummary = action.payload;
    },
    setCategoryDistribution(
      state,
      action: PayloadAction<AIState["categoryDistribution"]>
    ) {
      state.categoryDistribution = action.payload;
    },
    setResponseTimes(state, action: PayloadAction<AIState["responseTimes"]>) {
      state.responseTimes = action.payload;
    },
    setUserSatisfaction(
      state,
      action: PayloadAction<AIState["userSatisfaction"]>
    ) {
      state.userSatisfaction = action.payload;
    },
    setUsageStatistics(
      state,
      action: PayloadAction<AIState["usageStatistics"]>
    ) {
      state.usageStatistics = action.payload;
    },
  },
});

// Extract action creators and reducer from the slice
export const {
  setInsightSummary,
  setCategoryDistribution,
  setResponseTimes,
  setUserSatisfaction,
  setUsageStatistics,
} = aiSlice.actions;
export default aiSlice.reducer;
