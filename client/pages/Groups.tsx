import { Plus } from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";

export default function Groups() {
  return (
    <DashboardLayout pageTitle="تعریف گروه" breadcrumb="تعریف گروه">
      <div className="p-4 md:p-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 md:mb-8 gap-4">
          <h2 className="text-sm md:text-base font-bold text-app-text-primary">
            گروه های تعریف شده
          </h2>

          <button className="flex items-center gap-2 bg-app-teal text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-app-teal/90 active:bg-app-teal transition-colors flex-shrink-0">
            <Plus className="w-5 h-5" />
            <span>افزودن</span>
          </button>
        </div>

        <div className="overflow-x-auto rounded-lg border border-app-border">
          <table className="w-full">
            <thead>
              <tr className="bg-app-light border-b border-app-border">
                <th className="px-4 md:px-6 py-3 text-right text-xs md:text-sm font-medium text-app-text-secondary">
                  عنوان گروه
                </th>
                <th className="px-4 md:px-6 py-3 text-right text-xs md:text-sm font-medium text-app-text-secondary hidden sm:table-cell">
                  کد گروه
                </th>
                <th className="px-4 md:px-6 py-3 text-right text-xs md:text-sm font-medium text-app-text-secondary hidden lg:table-cell">
                  توضیحات
                </th>
                <th className="px-4 md:px-6 py-3 text-right text-xs md:text-sm font-medium text-app-text-secondary hidden md:table-cell">
                  وضعیت گروه
                </th>
                <th className="px-4 md:px-6 py-3 text-right text-xs md:text-sm font-medium text-app-text-secondary">
                  عملیات
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={5} className="p-0">
                  <EmptyState />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
}

function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-16 bg-app-light rounded-lg">
      <svg
        width="144"
        height="95"
        viewBox="0 0 144 95"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mb-4"
      >
        <path
          d="M109.695 0C110.188 0 110.664 0.182101 111.031 0.511345L120.516 9.02167C121.881 10.2468 121.015 12.5103 119.18 12.5103H64.7653C64.2151 12.5103 63.6893 12.2837 63.3115 11.8838L55.2712 3.3735C54.0662 2.09812 54.9704 0 56.725 0H109.695Z"
          fill="#91969F"
        />
        <path
          d="M106.49 0H56.084C53.8748 0 52.084 1.79086 52.084 4V54.406C52.084 56.6152 53.8748 58.406 56.084 58.406H106.49C108.699 58.406 110.49 56.6152 110.49 54.406V4C110.49 1.79086 108.699 0 106.49 0Z"
          fill="#B1B7C2"
        />
        <path
          d="M87.7244 0H37.3184C35.1092 0 33.3184 1.79086 33.3184 4V54.406C33.3184 56.6152 35.1092 58.406 37.3184 58.406H87.7244C89.9335 58.406 91.7244 56.6152 91.7244 54.406V4C91.7244 1.79086 89.9335 0 87.7244 0Z"
          fill="#D6D9DF"
        />
        <path
          d="M33.7308 0C33.4843 0 33.2465 0.0910504 33.063 0.255673L21.3485 10.766C20.6657 11.3785 21.099 12.5103 22.0163 12.5103H79.4742C79.7493 12.5103 80.0122 12.397 80.2011 12.1971L90.131 1.68675C90.7334 1.04906 90.2813 0 89.4041 0H33.7308Z"
          fill="#B1B7C2"
        />
        <path
          d="M63.3389 19.9537C68.7388 19.9537 72.4043 23.1734 72.4043 28.4636C72.4043 34.2031 68.3744 36.7303 62.9818 36.7303L62.8215 39.9501H58.8354L58.6313 33.5548H59.9576C64.5122 33.5548 68.0173 32.7443 68.0173 28.4636C68.0173 25.6122 66.283 23.8586 63.3826 23.8586C60.4823 23.8586 58.7115 25.4869 58.7115 28.3383H54.4047C54.361 23.4092 57.8662 19.9463 63.3462 19.9463L63.3389 19.9537ZM60.7592 48.9463C59.105 48.9463 57.8152 47.6422 57.8152 45.977C57.8152 44.3119 59.105 43.0004 60.7592 43.0004C62.4134 43.0004 63.6596 44.3045 63.6596 45.977C63.6596 47.6495 62.3697 48.9463 60.7592 48.9463Z"
          fill="#1DBF98"
        />
        <text
          fill="#4F545E"
          textAnchor="middle"
          x="72"
          y="85.9062"
          fontFamily="IRANYekanXFaNum"
          fontSize="14"
          fontWeight="500"
        >
          هنوز گروهی تعریف نشده
        </text>
      </svg>
      <p className="text-sm text-app-text-secondary">
        هنوز گروهی تعریف نشده است
      </p>
    </div>
  );
}
