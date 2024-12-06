import React from 'react';
import { Mail, Phone, Building2 } from 'lucide-react';
import type { Teacher } from '../../types/campus';

interface TeacherCardProps {
  teacher: Teacher;
}

export function TeacherCard({ teacher }: TeacherCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-semibold text-gray-800 mb-3">{teacher.name}</h3>
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-gray-600">
          <Building2 className="h-4 w-4" />
          <span>Office: {teacher.office}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-600">
          <Mail className="h-4 w-4" />
          <a href={`mailto:${teacher.email}`} className="hover:text-blue-600">
            {teacher.email}
          </a>
        </div>
        <div className="flex items-center gap-2 text-gray-600">
          <Phone className="h-4 w-4" />
          <span>WeChat: {teacher.wechat}</span>
        </div>
        <div className="mt-2 inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
          {teacher.subject}
        </div>
      </div>
    </div>
  );
}