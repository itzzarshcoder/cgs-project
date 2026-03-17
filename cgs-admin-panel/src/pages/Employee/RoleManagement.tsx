"use client";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AdminLayout } from "@/components/AdminLayout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

const permissionsList = [
  { key: "dashboard", label: "Dashboard" },
  { key: "product", label: "Product Management" },
  { key: "order", label: "Order Management" },
  { key: "inventory", label: "Inventory Tracking" },
  { key: "customer", label: "Customer Relationship" },
  { key: "bill", label: "Bill Generation" },
  { key: "purchase", label: "Purchases" },
  { key: "ledger", label: "Ledger" },
  { key: "reports", label: "Reports" },
];

export default function AddRole() {
  const navigate = useNavigate();

  const [roleName, setRoleName] = useState("");
  const [status, setStatus] = useState("Active");
  const [permissions, setPermissions] = useState<string[]>([]);

  const togglePermission = (key: string) => {
    setPermissions((prev) =>
      prev.includes(key)
        ? prev.filter((p) => p !== key)
        : [...prev, key]
    );
  };

  const handleCreateRole = () => {
    const payload = {
      roleName,
      status,
      permissions,
    };

    console.log("ROLE CREATED:", payload);

    // 🔴 API: POST /roles
    navigate("/employees/add");
  };

  return (
    <AdminLayout title="Employee Management > Add Role">
      <div className="max-w-4xl bg-white p-6 rounded-lg space-y-6">

        {/* Role Name */}
        <div>
          <Label>Role Name</Label>
          <Input
            placeholder="Enter role name"
            value={roleName}
            onChange={(e) => setRoleName(e.target.value)}
          />
        </div>

        {/* Status */}
        <div>
          <Label>Status</Label>
          <Select value={status} onValueChange={setStatus}>
            <SelectTrigger className="w-48">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Active">Active</SelectItem>
              <SelectItem value="Inactive">Inactive</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Permissions */}
        <div>
          <Label>Permissions</Label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-3">
            {permissionsList.map((perm) => (
              <label
                key={perm.key}
                className="flex items-center gap-2 text-sm cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={permissions.includes(perm.key)}
                  onChange={() => togglePermission(perm.key)}
                />
                {perm.label}
              </label>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-end gap-3 pt-4">
          <Button variant="outline">Cancel</Button>
          <Button
            className="bg-[#E98C81] hover:bg-[#f7857b]"
            onClick={handleCreateRole}
          >
            Create Role
          </Button>
        </div>
      </div>
    </AdminLayout>
  );
}
