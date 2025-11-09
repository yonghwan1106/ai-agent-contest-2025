'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  icon?: ReactNode;
}

export default function PageHeader({ title, subtitle, icon }: PageHeaderProps) {
  return (
    <div className="relative bg-gradient-to-br from-indigo-50 via-white to-pink-50 py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {icon && (
            <div className="flex justify-center mb-4">
              {icon}
            </div>
          )}
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-text">{title}</span>
          </h1>
          {subtitle && (
            <p className="text-xl text-gray-600">{subtitle}</p>
          )}
        </motion.div>
      </div>
    </div>
  );
}
