import * as React from "react";
import { X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { LabeledInput } from "@/components/ui/labeled-input";
import { LabeledTextarea } from "@/components/ui/labeled-textarea";
import {
  MultiSelectDropdown,
  type SelectOption,
} from "@/components/ui/multi-select-dropdown";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";

export type ReportTitleFormData = {
  title: string;
  groups: string[];
  description: string;
  isActive: boolean;
};

export interface AddReportTitleModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: (data: ReportTitleFormData) => void;
  initialData?: ReportTitleFormData;
  groupOptions: SelectOption[];
}

export function AddReportTitleModal({
  open,
  onOpenChange,
  onSubmit,
  initialData,
  groupOptions,
}: AddReportTitleModalProps) {
  const [formData, setFormData] = React.useState<ReportTitleFormData>(
    initialData || {
      title: "",
      groups: [],
      description: "",
      isActive: false,
    }
  );

  React.useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const isFormValid =
    formData.title.trim() !== "" && formData.groups.length > 0;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[551px] p-4 gap-0 rounded-xl [&>button]:hidden">
        <button
          onClick={() => onOpenChange(false)}
          className="absolute left-4 top-4 w-10 h-10 flex items-center justify-center rounded-xl bg-app-light hover:bg-app-light/80 transition-colors z-10"
          aria-label="بستن"
        >
          <X className="w-5 h-5 text-app-text-primary" />
        </button>

        <DialogHeader className="mb-6">
          <DialogTitle className="text-base font-bold text-app-text-primary text-right pr-0">
            افزودن عنوان گزارش
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <LabeledInput
            label="عنوان گزارش"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
            showClearButton={formData.title !== ""}
            onClear={() => setFormData({ ...formData, title: "" })}
            placeholder="عنوان را وارد کنید"
          />

          <MultiSelectDropdown
            label="گروه گزارش"
            options={groupOptions}
            value={formData.groups}
            onChange={(groups) => setFormData({ ...formData, groups })}
            placeholder="گروه را انتخاب کنید"
          />

          <LabeledTextarea
            label="توضیحات"
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            placeholder="توضیحات را وارد کنید"
          />

          <div className="flex items-center justify-end gap-2 py-3">
            <span className="text-sm font-medium text-app-text-primary">
              فعالسازی
            </span>
            <Switch
              checked={formData.isActive}
              onCheckedChange={(checked) =>
                setFormData({ ...formData, isActive: checked })
              }
              className={cn(
                "w-12 h-[26px] data-[state=unchecked]:bg-[#B1B7C2] data-[state=checked]:bg-app-teal"
              )}
            />
          </div>

          <button
            type="submit"
            disabled={!isFormValid}
            className={cn(
              "w-full h-12 rounded-xl text-sm font-bold transition-colors",
              isFormValid
                ? "bg-app-teal text-white hover:bg-app-teal/90 active:bg-app-teal/80"
                : "bg-[#B1B7C2] text-app-text-tertiary cursor-not-allowed"
            )}
          >
            ثبت
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
