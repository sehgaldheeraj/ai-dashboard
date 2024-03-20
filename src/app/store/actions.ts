import { AIState } from "../types/AIState";
// Define action types as constants
export const SET_INSIGHT_SUMMARY = "SET_INSIGHT_SUMMARY";
export const SET_CATEGORY_DISTRIBUTION = "SET_CATEGORY_DISTRIBUTION";
export const SET_RESPONSE_TIMES = "SET_RESPONSE_TIMES";
export const SET_USER_SATISFACTION = "SET_USER_SATISFACTION";
export const SET_USAGE_STATISTICS = "SET_USAGE_STATISTICS";

// Define action creators
export const setInsightSummary = (summary: AIState["insightSummary"]) => ({
  type: SET_INSIGHT_SUMMARY,
  payload: summary,
});

export const setCategoryDistribution = (
  distribution: AIState["categoryDistribution"]
) => ({
  type: SET_CATEGORY_DISTRIBUTION,
  payload: distribution,
});

export const setResponseTimes = (responseTimes: AIState["responseTimes"]) => ({
  type: SET_RESPONSE_TIMES,
  payload: responseTimes,
});

export const setUserSatisfaction = (
  satisfaction: AIState["userSatisfaction"]
) => ({
  type: SET_USER_SATISFACTION,
  payload: satisfaction,
});

export const setUsageStatistics = (statistics: AIState["usageStatistics"]) => ({
  type: SET_USAGE_STATISTICS,
  payload: statistics,
});
