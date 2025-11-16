import { ActionButton } from "./ActionButton";
import { StatusBadge } from "./StatusBadge";

export type FieldData = {
  id: string;
  reportTitle: string;
  titleCode: string;
  groups: string;
  fields: string;
  titleStatus: "active" | "inactive";
};

type FieldTableRowProps = {
  data: FieldData;
  onEdit?: (id: string) => void;
  onAddField?: (id: string) => void;
};

export function FieldTableRow({ data, onEdit, onAddField }: FieldTableRowProps) {
  return (
    <tr className="border-b border-app-border bg-white hover:bg-gray-50/50 transition-colors">
      <td className="px-4 py-3 text-center">
        <div className="flex items-center justify-center gap-2">
          <ActionButton 
            variant="edit" 
            onClick={() => onEdit?.(data.id)}
          />
        </div>
      </td>
      <td className="px-4 py-3 text-center">
        <ActionButton 
          variant="add" 
          onClick={() => onAddField?.(data.id)}
        />
      </td>
      <td className="px-6 py-3 text-right">
        <StatusBadge status={data.titleStatus} />
      </td>
      <td className="px-6 py-3 text-right">
        <span className="text-sm font-medium text-app-text-secondary">
          {data.fields || "ـــ"}
        </span>
      </td>
      <td className="px-6 py-3 text-right">
        <span className="text-sm font-medium text-app-text-secondary">
          {data.groups}
        </span>
      </td>
      <td className="px-6 py-3 text-right">
        <span className="text-sm font-medium text-app-text-secondary">
          {data.titleCode}
        </span>
      </td>
      <td className="px-6 py-3 text-right">
        <span className="text-sm font-medium text-app-text-secondary">
          {data.reportTitle}
        </span>
      </td>
    </tr>
  );
}
