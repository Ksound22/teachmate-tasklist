import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  tasks: [
    {
      id: '1',
      title: 'Create a lesson plan',
      description: 'Create a lesson plan with AI',
      dueDate: '22/2/2024',
      status: 'Not Done',
    },
    {
      id: '2',
      title: 'Create an infographic',
      description: 'Create an infographic  with AI',
      dueDate: '02/01/2024',
      status: 'Done',
    },
    {
      id: '3',
      title: 'Create a lesson guide',
      description: 'Create a lesson guide with AI',
      dueDate: '25/02/2024',
      status: 'Not Done',
    },
    {
      id: '4',
      title: 'Conduct a research',
      description: 'Research about Biology',
      dueDate: '06/01/2024',
      status: 'Done',
    },
  ],
};

console.log(initialState);

export const taskItemsSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    addTaskItem: (state, action) => {
      const { title, description, dueDate, status } = action.payload;

      const task = {
        id: nanoid(),
        title,
        description,
        dueDate,
        status,
      };
      // return {
      //   ...state,
      //   tasks: [...state.tasks, task],
      // };
      state.tasks.push(task);
    },

    editTaskItem: (state, action) => {
      const { id, title, description, dueDate, status } = action.payload;
      const existingTask = state.tasks.find((task) => task.id === id);

      if (existingTask) {
        existingTask.title = title;
        existingTask.description = description;
        existingTask.dueDate = dueDate;
        existingTask.status = status;
      }
    },

    removeTaskItem: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
  },
});

export const { addTaskItem, removeTaskItem, editTaskItem } =
  taskItemsSlice.actions;

export default taskItemsSlice.reducer;
