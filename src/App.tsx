import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAIInfo } from "./app/api/fetchAIInfo";
import {
  setInsightSummary,
  setCategoryDistribution,
  setResponseTimes,
  setUserSatisfaction,
  setUsageStatistics,
} from "./app/store/actions";
import { RootState } from "./app/store/index";
import CategoryDistributionChart from "./app/components/CategoryDistributionChart";
import ResponseTimesChart from "./app/components/ResponseTimesChart";
import UserSatisfactionChart from "./app/components/UserSatisfactionChart";
import UsageStatisticsChart from "./app/components/userStatisticsChart";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "./index.scss";

const App: React.FC = () => {
  const dispatch = useDispatch();
  const categoryDistribution = useSelector(
    (state: RootState) => state.ai.categoryDistribution
  );
  const responseTimesData = useSelector(
    (state: RootState) => state.ai.responseTimes
  );
  const userSatisfactionData = useSelector(
    (state: RootState) => state.ai.userSatisfaction.ratings
  );
  const userStatisticsData = useSelector(
    (state: RootState) => state.ai.usageStatistics
  );
  const insightsSummaryData = useSelector(
    (state: RootState) => state.ai.insightSummary
  );
  useEffect(() => {
    // Fetch AI data when the component mounts
    fetchAIInfo()
      .then((data) => {
        // Dispatch actions to set AI data in Redux store
        dispatch(setInsightSummary(data.insightSummary));
        dispatch(setCategoryDistribution(data.categoryDistribution));
        dispatch(setResponseTimes(data.responseTimes));
        dispatch(setUserSatisfaction(data.userSatisfaction));
        dispatch(setUsageStatistics(data.usageStatistics));
      })
      .catch((error) => {
        console.error("Error fetching AI data:", error);
      });
  }, [dispatch]); // Dispatch function is a dependency of useEffect
  console.log(userSatisfactionData);
  const userStatisticsArray = [
    ...Object.entries(userStatisticsData.by_platform).map(
      ([platform, value]) => ({ category: platform, value })
    ),
    ...Object.entries(userStatisticsData.by_country).map(
      ([country, value]) => ({ category: country, value })
    ),
  ];
  return (
    <div className="main">
      <h1 style={{ textAlign: "center" }}>AI Insights Dashboard</h1>
      <div className="summary">
        <h2 style={{ textAlign: "center" }}>Insights Summary</h2>
        <div
          style={{
            display: "flex",
            flexWrap: "nowrap",
            justifyContent: "space-around",
          }}
        >
          <p>Total queries: {insightsSummaryData?.total_queries}</p>
          <p>Successful queries: {insightsSummaryData?.successful_queries}</p>
          <p>Failed queries: {insightsSummaryData?.failed_queries}</p>
          <p>
            Average Response Time: {insightsSummaryData?.average_response_time}
          </p>
        </div>
      </div>
      <p style={{ textAlign: "end" }}>swipe charts for more...</p>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation
        scrollbar={{ draggable: true }}
      >
        <SwiperSlide>
          <div>
            <h2 style={{ textAlign: "center" }}>Category Distribution</h2>
            <CategoryDistributionChart
              categoryDistribution={categoryDistribution}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <h2 style={{ textAlign: "center" }}>Response Times</h2>
            <ResponseTimesChart
              dayData={responseTimesData.day_wise}
              weekData={responseTimesData.week_wise}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <h2 style={{ textAlign: "center" }}>User Satisfaction</h2>
            <UserSatisfactionChart data={userSatisfactionData} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <h2 style={{ textAlign: "center" }}>Usage Statistics</h2>
            <UsageStatisticsChart data={userStatisticsArray} />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default App;
