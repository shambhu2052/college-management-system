import React from "react";
interface CardProps {
  title: string;
  icon: React.ReactNode;
  count: number;
}
export default function Card({ title, icon, count }: CardProps) {
  return (
    <div className="bg-gray-200 rounded-md py-6 px-4 border border-gray-300 space-y-5 w-[300px] h-[150px] shadow-lg transform transition hover:-translate-y-2 ease-in duration-200 ">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">{title}</h2>
        {icon}
      </div>
      <h1 className="text-3xl font-bold">{count}</h1>
    </div>
  );
}
