import { Plus } from "lucide-react";
import { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { FieldTable, type FieldData } from "@/components/FieldTable";
import {
  AddReportTitleModal,
  type ReportTitleFormData,
} from "@/components/AddReportTitleModal";

const groupOptions = [
  { value: "investment", label: "گروه سرمایه‌گذاری" },
  { value: "commercial", label: "گروه تجاری" },
  { value: "financial", label: "گروه مالی" },
  { value: "service", label: "گروه خدماتی" },
];

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
    groups: "گروه نرم افزاری",
    fields: "ـــ",
    titleStatus: "inactive",
  },
];

export default function Groups() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);

  const handleEdit = (id: string) => {
    setEditingId(id);
    setIsModalOpen(true);
  };

  const handleAddField = (id: string) => {
    console.log("Add field clicked for:", id);
  };

  const handleAdd = () => {
    setEditingId(null);
    setIsModalOpen(true);
  };

  const handleModalSubmit = (data: ReportTitleFormData) => {
    console.log("Form submitted:", data);
    setIsModalOpen(false);
    setEditingId(null);
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

      <AddReportTitleModal
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
        onSubmit={handleModalSubmit}
        groupOptions={groupOptions}
        initialData={
          editingId
            ? {
                title: "فروش و درآمد",
                groups: ["financial", "service"],
                description:
                  "این عنوان مربوط به گروه های مالی خدماتی میباشد",
                isActive: true,
              }
            : undefined
        }
      />
    </DashboardLayout>
  );
}
