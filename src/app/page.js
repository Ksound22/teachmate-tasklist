'use client';
import { useSelector } from 'react-redux';
import Tasks from '@/components/Tasks';

export default function Home() {
  const { tasks } = useSelector((state) => state.taskItems);

  console.log(tasks);
  return (
    <main>
      <Tasks />
    </main>
  );
}
