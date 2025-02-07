import React from "react";
import { Newspaper } from "lucide-react";

const ArticleStatsCard = () => {
  return (
    <>
      <div className="max-w-sm bg-white rounded-md px-3 py-3 shadow-md border">
        <div className="flex items-center gap-4">
          <div className="bg-red-50 p-2 rounded-lg">
            <Newspaper className="w-5 h-5 text-red-500" />
          </div>
          <div>
            <p className="text-gray-600 text-xs m-0 leading-5">Total Article</p>
            <h2 className="text-md font-semibold">534</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArticleStatsCard;
