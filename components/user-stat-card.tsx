import React from "react";
import { Users } from "lucide-react";

const UserStatsCard = () => {
  return (
    <>
      <div className="max-w-sm bg-white rounded-md px-3 py-3 shadow-md border">
        <div className="flex items-center gap-4">
          <div className="bg-red-50 p-2 rounded-lg">
            <Users className="w-5 h-5 text-red-500" />
          </div>
          <div>
            <p className="text-gray-600 text-xs m-0 leading-5">
              Total Pengguna
            </p>
            <h2 className="text-md font-semibold">472,322</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserStatsCard;
