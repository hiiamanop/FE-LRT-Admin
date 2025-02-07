import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import UserStatsCard from "@/components/user-stat-card";
import { ComponentBarChart } from "@/components/bar-chart";
import { ComponentPieChart } from "@/components/pie-chart";
import FeedbackStatsCard from "./feedback-stat-card";
import PointStatsCard from "./point-stat-card";
import ArticleStatsCard from "./article-stat-card";
import { RecentFeedbackTable } from "./recent-feedback-table";

const DashboardStats = () => {
  return (
    <div className="container gap-4 px-4">
      <div className="grid my-4 grid-cols-1 md:grid-cols-6 gap-4 statistik">
        {/* Mobile: Carousel */}
        <div className="md:hidden col-span-1">
          <Carousel>
            <CarouselContent>
              <CarouselItem>
                <UserStatsCard />
              </CarouselItem>
              <CarouselItem>
                <UserStatsCard />
              </CarouselItem>
              <CarouselItem>
                <UserStatsCard />
              </CarouselItem>
              <CarouselItem>
                <UserStatsCard />
              </CarouselItem>
            </CarouselContent>
          </Carousel>
        </div>

        {/* Desktop: Grid */}
        <div className="hidden md:block md:col-span-1">
          <UserStatsCard />
        </div>
        <div className="hidden md:block md:col-span-1">
          <FeedbackStatsCard />
        </div>
        <div className="hidden md:block md:col-span-1">
          <PointStatsCard />
        </div>
        <div className="hidden md:block md:col-span-1">
          <ArticleStatsCard />
        </div>

        <div className=" col-span-1 md:col-span-2 md:row-span-2">
          <ComponentPieChart />
        </div>
        <div className=" col-span-1 md:col-span-4">
          <ComponentBarChart />
        </div>
      </div>
      <div className="grid my-4 grid-cols-1 md:grid-cols-6 gap-4 statistik">
        <div className="bg-white px-4 py-4 rounded-lg border shadow-md col-span-1 md:col-span-4">
          <RecentFeedbackTable />
        </div>
        <div className="col-span-1 md:col-span-2 md:row-span-2">
          <ComponentPieChart />
        </div>
      </div>
    </div>
  );
};

export default DashboardStats;
