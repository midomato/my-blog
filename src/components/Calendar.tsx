'use client';
import { useState } from 'react';

export const Calendar = () => {
  const today = new Date();
  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth()); // 0-indexed

  // 月移動ロジック
  const changeMonth = (offset: number) => {
    const newDate = new Date(viewYear, viewMonth + offset);
    setViewYear(newDate.getFullYear());
    setViewMonth(newDate.getMonth());
  };

  const firstDay = new Date(viewYear, viewMonth, 1);
  const lastDay = new Date(viewYear, viewMonth + 1, 0);
  const daysInMonth = lastDay.getDate();
  const startWeekDay = firstDay.getDay();

  const dates: (number | null)[] = [];
  for (let i = 0; i < startWeekDay; i++) dates.push(null);
  for (let i = 1; i <= daysInMonth; i++) dates.push(i);

  return (
    <div className="bg-gray-900 text-white p-4 rounded-md shadow-md w-full max-w-full mx-auto">
      {/* 月の表示と切り替えボタン */}
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={() => changeMonth(-1)}
          className="bg-gray-700 px-2 py-1 rounded hover:bg-gray-600"
        >
          ← 前の月
        </button>
        <h2 className="text-xl font-bold">
          {viewYear}年{viewMonth + 1}月
        </h2>
        <button
          onClick={() => changeMonth(1)}
          className="bg-gray-700 px-2 py-1 rounded hover:bg-gray-600"
        >
          次の月 →
        </button>
      </div>

      {/* 曜日ラベル */}
      <div className="grid grid-cols-7 gap-[2px] text-center text-xs font-semibold mb-2 w-[294px]">
        {['日','月','火','水','木','金','土'].map((d) => (
          <div key={d} style={{ width: "40px", height: "24px" }}>{d}</div>
        ))}
      </div>

      {/* 日付マス */}
      <div className="grid grid-cols-7 gap-[2px] text-center w-[294px]">
        {dates.map((date, idx) => {
          const isToday =
            viewYear === today.getFullYear() &&
            viewMonth === today.getMonth() &&
            date === today.getDate();

          const isPast =
            viewYear < today.getFullYear() ||
            (viewYear === today.getFullYear() &&
              (viewMonth < today.getMonth() ||
                (viewMonth === today.getMonth() && date !== null && date < today.getDate())));

          const baseStyle: React.CSSProperties = {
            width: "40px",
            height: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "6px",
            fontSize: "0.875rem",
            fontWeight: isToday ? "bold" : "normal",
            backgroundColor: isToday
              ? "#84cc16"
              : isPast
              ? "#dc2626"
              : "#374151",
            color: isToday ? "#000000" : "#ffffff",
          };

          return (
            <div key={idx} style={baseStyle}>
              {date ?? ""}
            </div>
          );
        })}
      </div>
    </div>
  );
};