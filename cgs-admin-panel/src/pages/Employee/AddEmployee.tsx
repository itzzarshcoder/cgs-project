"use client";
import React, { useEffect, useState } from "react";
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
import { Switch } from "@/components/ui/switch";

export default function AddEmployee() {
  const [roles, setRoles] = useState<string[]>([]);

  useEffect(() => {
    setRoles(["Admin", "Manager", "Staff"]);
  }, []);

  return (
    <AdminLayout title="Employee Information">
      <div className="max-w-6xl mx-auto bg-white rounded-xl border p-8">

        {/* Sub heading */}
        <h1 className="font-bold">Employee Information</h1>
        <p className="text-sm text-gray-500 mb-6">
          Update the employee information and save changes.
        </p>

        {/* FORM */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">

          {/* First Name */}
          <div>
            <Label>First Name</Label>
            <Input placeholder="Enter first name" />
          </div>

          {/* Last Name */}
          <div>
            <Label>Last Name</Label>
            <Input placeholder="Enter last name" />
          </div>

          {/* Email */}
          <div>
            <Label>Email</Label>
            <Input placeholder="Enter email address" />
          </div>

          {/* Phone */}
          <div>
            <Label>Phone</Label>
            <Input placeholder="Enter phone number" />
          </div>

          {/* Password */}
          <div>
            <Label>Password</Label>
            <Input type="password" placeholder="Enter password" />
            <p className="text-xs text-gray-400 mt-1">
              Password must be at least 8 characters
            </p>
          </div>

          {/* Role */}
          <div>
            <Label>Role</Label>
            <Select>
              <SelectTrigger className="border-orange-400 focus:ring-orange-400">
                <SelectValue placeholder="Select a role" />
              </SelectTrigger>
              <SelectContent>
                {roles.map((role) => (
                  <SelectItem key={role} value={role}>
                    {role}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Zone */}
          <div>
            <Label>Zone (Optional)</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select a zone (optional)" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="north">North</SelectItem>
                <SelectItem value="south">South</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Status Card */}
          <div className="border rounded-lg p-4 flex items-center justify-between">
            <div>
              <p className="font-medium">Status</p>
              <p className="text-sm text-gray-500">
                Set the employee's active status
              </p>
            </div>
            <Switch defaultChecked />
          </div>

          {/* Profile Picture */}
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 text-sm">
              No image
            </div>
            <Button variant="outline" size="sm">
              Change
            </Button>
          </div>
        </div>

        {/* FOOTER BUTTONS */}
        <div className="flex justify-end gap-4 mt-10">
          <Button variant="outline">Cancel</Button>
          <Button className="bg-[#E98C81] hover:bg-[#f7857b] text-white">
            Create Employee
          </Button>
        </div>
      </div>
    </AdminLayout>
  );
}
