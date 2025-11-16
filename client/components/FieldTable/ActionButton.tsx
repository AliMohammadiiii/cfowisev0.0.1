import { Edit2, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

type ActionButtonProps = {
  variant: "edit" | "add";
  onClick?: () => void;
  className?: string;
};

export function ActionButton({ variant, onClick, className }: ActionButtonProps) {
  const isEdit = variant === "edit";
  const Icon = isEdit ? Edit2 : Plus;
  
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex items-center justify-center w-8 h-8 rounded-lg transition-colors",
        isEdit
          ? "bg-[#FD7E14] hover:bg-[#FD7E14]/90 active:bg-[#FD7E14]/80"
          : "bg-app-teal hover:bg-app-teal/90 active:bg-app-teal/80",
        className
      )}
      aria-label={isEdit ? "ویرایش" : "افزودن"}
    >
      <Icon className="w-4 h-4 text-white" />
    </button>
  );
}
