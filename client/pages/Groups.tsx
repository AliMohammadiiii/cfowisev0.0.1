import { Plus } from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";
import { FieldTable, type FieldData } from "@/components/FieldTable";

const sampleData: FieldData[] = [
  {
    id: "1",
    reportTitle: "فروش و درآمد",
    titleCode: "۱۲۳۴۵۶۷",
    groups: "گروه مالی، گروه خدماتی",
    fields: "ـــ",
    titleStatus: "active",
  },
  {
    id: "2",
    reportTitle: "بهای تمام‌شده",
    titleCode: "۶۲۱۶۲۳۱",
    groups: "گر��ه نرم افزاری",
    fields: "ـــ",
    titleStatus: "inactive",
  },
];

export default function Groups() {
  const handleEdit = (id: string) => {
    console.log("Edit clicked for:", id);
  };

  const handleAddField = (id: string) => {
    console.log("Add field clicked for:", id);
  };

  const handleAdd = () => {
    console.log("Add new item");
  };

  return (
    <DashboardLayout pageTitle="تعریف گروه" breadcrumb="تعریف گروه">
      <div className="p-4 md:p-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 gap-4">
          <h2 className="text-base md:text-lg font-bold text-app-text-primary">
            عناوین تعریف شده
          </h2>

          <button
            onClick={handleAdd}
            className="flex items-center gap-1 bg-app-teal text-white px-4 py-2.5 rounded-lg text-sm font-bold hover:bg-app-teal/90 active:bg-app-teal transition-colors flex-shrink-0"
          >
            <Plus className="w-5 h-5" />
            <span>افزودن</span>
          </button>
        </div>

        <FieldTable
          data={sampleData}
          onEdit={handleEdit}
          onAddField={handleAddField}
        />
      </div>
    </DashboardLayout>
  );
}
