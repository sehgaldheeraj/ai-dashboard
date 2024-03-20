import { AIState } from "../types/AIState"; // Assuming AIState type is defined in types.ts

// Mock API function to fetch AI data
export const fetchAIInfo = (): Promise<AIState> => {
  // Simulate fetching data asynchronously
  return new Promise((resolve) => {
    setTimeout(() => {
      // Mock AI data
      const data: AIState = {
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
      // Resolve the Promise with the mock AI data
      console.log(data);
      resolve(data);
    }, 1000); // Simulate a delay of 1 second (1000 milliseconds)
  });
};
