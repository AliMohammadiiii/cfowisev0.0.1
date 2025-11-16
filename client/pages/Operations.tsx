import { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { LabeledInput } from "@/components/ui/labeled-input";
import { MultiSelectDropdown } from "@/components/ui/multi-select-dropdown";
import { Switch } from "@/components/ui/switch";
import { OrganizationTree, type TreeItemData } from "@/components/OrganizationTree";
import { Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

const groupOptions = [
  { value: "financial", label: "گروه مالی" },
  { value: "service", label: "گروه خدماتی" },
  { value: "commercial", label: "گروه تجاری" },
  { value: "investment", label: "گروه سرمایه‌گذاری" },
];

const organizationTreeData: TreeItemData[] = [
  {
    id: "1",
    name: "توسعه راهکارهای نوین اعتماد",
    level: 0,
    isExpanded: true,
    children: [
      {
        id: "1-1",
        name: "شرکت ۱",
        level: 1,
      },
      {
        id: "1-2",
        name: "شرکت ۲",
        level: 1,
      },
      {
        id: "1-3",
        name: "شرکت ۳",
        level: 1,
      },
      {
        id: "1-4",
        name: "شرکت ۴",
        level: 1,
        isExpanded: true,
        children: [
          {
            id: "1-4-1",
            name: "زیرشرکت ۱",
            level: 2,
            isExpanded: true,
            children: [
              { id: "1-4-1-1", name: "زیرشرکت ۱", level: 3 },
              { id: "1-4-1-2", name: "زیرشرکت ۲", level: 3 },
              { id: "1-4-1-3", name: "زیرشرکت ۳", level: 3 },
              { id: "1-4-1-4", name: "زیرشرکت ۴", level: 3 },
            ],
          },
          { id: "1-4-2", name: "زیرشرکت ۲", level: 2 },
          { id: "1-4-3", name: "زیرشرکت ۳", level: 2 },
          { id: "1-4-4", name: "زیرشرکت ۴", level: 2 },
        ],
      },
    ],
  },
];

export default function Operations() {
  const [activeTab, setActiveTab] = useState("organization");
  const [companyName, setCompanyName] = useState("توسعه راهکارهای نوین اعتماد");
  const [orgType, setOrgType] = useState("هلدینگ");
  const [registrationNumber, setRegistrationNumber] = useState("۱۲۳۴۵۶۷۸۹");
  const [selectedGroups, setSelectedGroups] = useState<string[]>(["financial"]);
  const [isActive, setIsActive] = useState(true);

  const handleAddOrganization = () => {
    console.log("Add organization");
  };

  const handleItemClick = (id: string) => {
    console.log("Selected organization:", id);
  };

  return (
    <DashboardLayout pageTitle="تعریف عملیاتی" breadcrumb="تعریف عملیاتی">
      <div className="p-4 md:p-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="w-full mb-4">
            <TabsTrigger value="users" className="flex-1">
              تعریف کاربران
            </TabsTrigger>
            <div className="w-px h-5 bg-app-border" />
            <TabsTrigger value="organization" className="flex-1">
              تعریف سازمان
            </TabsTrigger>
          </TabsList>

          <TabsContent value="organization" className="mt-0">
            <div className="grid grid-cols-1 lg:grid-cols-[432px_1fr] gap-4">
              {/* Left Column - Organization Info Form */}
              <div className="bg-white rounded-xl p-6 flex flex-col gap-5">
                <h3 className="text-base font-bold text-app-text-primary text-right">
                  اطلاعات سازمان
                </h3>

                <div className="flex flex-col gap-5">
                  <LabeledInput
                    label="نام شرکت"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    showClearButton={companyName !== ""}
                    onClear={() => setCompanyName("")}
                  />

                  <LabeledInput
                    label="نوع سازم��ن"
                    value={orgType}
                    onChange={(e) => setOrgType(e.target.value)}
                    showClearButton={orgType !== ""}
                    onClear={() => setOrgType("")}
                  />

                  <LabeledInput
                    label="شماره ثبت"
                    value={registrationNumber}
                    onChange={(e) => setRegistrationNumber(e.target.value)}
                    showClearButton={registrationNumber !== ""}
                    onClear={() => setRegistrationNumber("")}
                  />

                  <MultiSelectDropdown
                    label="گروه گزارش"
                    options={groupOptions}
                    value={selectedGroups}
                    onChange={setSelectedGroups}
                    placeholder="گروه را انتخاب کنید"
                  />

                  <input
                    type="text"
                    placeholder="نوع شخصیت حقوقی"
                    className="h-12 w-full rounded-lg border border-app-border bg-white px-3 text-sm text-app-text-tertiary outline-none focus:border-app-text-secondary transition-colors"
                  />

                  <input
                    type="text"
                    placeholder="شناسه ملی"
                    className="h-12 w-full rounded-lg border border-app-border bg-white px-3 text-sm text-app-text-tertiary outline-none focus:border-app-text-secondary transition-colors"
                  />

                  <input
                    type="text"
                    placeholder="کد اقتصادی"
                    className="h-12 w-full rounded-lg border border-app-border bg-white px-3 text-sm text-app-text-tertiary outline-none focus:border-app-text-secondary transition-colors"
                  />

                  <div className="relative h-12 w-full rounded-lg border border-app-border bg-white px-3 flex items-center">
                    <Calendar className="w-5 h-5 text-app-text-secondary" />
                    <input
                      type="text"
                      placeholder="تاریخ ثبت/تأسیس"
                      className="flex-1 mr-2 text-sm text-app-text-tertiary outline-none bg-transparent"
                    />
                  </div>

                  <input
                    type="text"
                    placeholder="زیرصنعت"
                    className="h-12 w-full rounded-lg border border-app-border bg-white px-3 text-sm text-app-text-tertiary outline-none focus:border-app-text-secondary transition-colors"
                  />

                  <input
                    type="text"
                    placeholder="صنعت"
                    className="h-12 w-full rounded-lg border border-app-border bg-white px-3 text-sm text-app-text-tertiary outline-none focus:border-app-text-secondary transition-colors"
                  />

                  <input
                    type="text"
                    placeholder="لینک وبسایت رسمی"
                    className="h-12 w-full rounded-lg border border-app-border bg-white px-3 text-sm text-app-text-tertiary outline-none focus:border-app-text-secondary transition-colors"
                  />

                  <input
                    type="text"
                    placeholder="هلدینگ بالاسری (در صورت وجود)"
                    className="h-12 w-full rounded-lg border border-app-border bg-white px-3 text-sm text-app-text-tertiary outline-none focus:border-app-text-secondary transition-colors"
                  />
                </div>

                <div className="flex items-center justify-end gap-2 py-2">
                  <span className="text-sm font-medium text-app-text-primary">
                    فعال‌سازی سازمان
                  </span>
                  <Switch
                    checked={isActive}
                    onCheckedChange={setIsActive}
                    className={cn(
                      "w-12 h-[26px] data-[state=unchecked]:bg-[#B1B7C2] data-[state=checked]:bg-app-teal"
                    )}
                  />
                </div>
              </div>

              {/* Right Column - Organization Tree */}
              <OrganizationTree
                data={organizationTreeData}
                onItemClick={handleItemClick}
                onAddOrganization={handleAddOrganization}
              />
            </div>
          </TabsContent>

          <TabsContent value="users">
            <div className="bg-white rounded-xl p-6">
              <p className="text-center text-app-text-secondary">
                صفحه تعریف کاربران
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}
