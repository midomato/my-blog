import { Calendar } from "@/components/Calendar";

export default function CalendarPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">📅 カレンダー</h1>
      <Calendar />
    </main>
  );
}