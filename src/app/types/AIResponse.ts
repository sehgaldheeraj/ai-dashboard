interface AIResponse {
  insight_summary: {
    total_queries: number;
    successful_queries: number;
    failed_queries: number;
    average_response_time: number;
  } | null;
  category_distribution: {
    [category: string]: number;
  };
  response_times: {
    day_wise: {
      date: string;
      average_time: number;
    }[];
    week_wise: {
      week: string;
      average_time: number;
    }[];
  };
  user_satisfaction: {
    rating: number;
    count: number;
  }[];
  usage_statistics: {
    by_platform: {
      [platform: string]: number;
    };
    by_country: {
      [country: string]: number;
    };
  };
}

export default AIResponse;
