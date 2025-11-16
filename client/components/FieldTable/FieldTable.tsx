import { FieldTableRow, type FieldData } from "./FieldTableRow";

type FieldTableProps = {
  data: FieldData[];
  onEdit?: (id: string) => void;
  onAddField?: (id: string) => void;
};

export function FieldTable({ data, onEdit, onAddField }: FieldTableProps) {
  return (
    <div className="overflow-x-auto rounded-xl bg-white border border-app-border">
      <table className="w-full">
        <thead>
          <tr className="bg-app-light border-b border-app-border">
            <th className="px-4 py-3 text-center text-sm font-medium text-app-text-secondary min-w-[60px]">
              ویرایش
            </th>
            <th className="px-4 py-3 text-center text-sm font-medium text-app-text-secondary min-w-[82px]">
              تعریف فیلد
            </th>
            <th className="px-6 py-3 text-right text-sm font-medium text-app-text-secondary min-w-[126px]">
              وضعیت عنوان
            </th>
            <th className="px-6 py-3 text-right text-sm font-medium text-app-text-secondary">
              فیلدها
            </th>
            <th className="px-6 py-3 text-right text-sm font-medium text-app-text-secondary">
              گروه‌ها
            </th>
            <th className="px-6 py-3 text-right text-sm font-medium text-app-text-secondary min-w-[109px]">
              کد عنوان
            </th>
            <th className="px-6 py-3 text-right text-sm font-medium text-app-text-secondary min-w-[214px]">
              عنوان گزارش
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <FieldTableRow
              key={row.id}
              data={row}
              onEdit={onEdit}
              onAddField={onAddField}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
