export interface AIState {
  insightSummary: InsightSummary | null;
  categoryDistribution: CategoryDistribution;
  responseTimes: ResponseTimes;
  userSatisfaction: UserSatisfaction;
  usageStatistics: UsageStatistics;
}

export interface InsightSummary {
  total_queries: number;
  successful_queries: number;
  failed_queries: number;
  average_response_time: number;
}

export interface CategoryDistribution {
  small_talk: number;
  technical_support: number;
  sales_inquiries: number;
  customer_service: number;
}

export interface ResponseTimes {
  day_wise: TimeDataPoint[];
  week_wise: WeekDataPoint[];
}

export interface TimeDataPoint {
  date: string;
  average_time: number;
}
export interface WeekDataPoint {
  week: string;
  average_time: number;
}

export interface UserSatisfaction {
  ratings: Rating[];
}

export interface Rating {
  rating: number;
  count: number;
}

export interface UsageStatistics {
  by_platform: PlatformUsage;
  by_country: CountryUsage;
}

export interface PlatformUsage {
  iOS: number;
  Android: number;
  Web: number;
}

export interface CountryUsage {
  USA: number;
  India: number;
  Germany: number;
  Japan: number;
  Brazil: number;
}
