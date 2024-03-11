// all data in tasks.json is imported and on last exported to use in application;
import tasksArray from "./tasks.json" assert { type: "json" };

// task status enum
export const status = {
  OPEN: "open",
  INPROGRESS: "in_progress",
  COMPLETE: "completed",
};

//sample tasks
export const tasks = [
  {
    id: "1",
    title: "Build UI for onboarding flow",
    description: "",
    status: status.OPEN,
    subtasks: [
      {
        title: "Sign up page",
        isCompleted: true,
      },
      {
        title: "Sign in page",
        isCompleted: false,
      },
      {
        title: "Welcome page",
        isCompleted: false,
      },
    ],
  },
  {
    id: "2",
    title: "Add authentication endpoints",
    description: "",
    status: status.INPROGRESS,
    subtasks: [
      {
        title: "Define user model",
        isCompleted: true,
      },
      {
        title: "Add auth endpoints",
        isCompleted: false,
      },
    ],
  },
  {
    id: "3",
    title:
      "Research pricing points of various competitors and trial different business models",
    description:
      "We know what we're planning to build for version one. Now we need to finalise the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition.",
    status: status.COMPLETE,
    subtasks: [
      {
        title: "Research competitor pricing and business models",
        isCompleted: true,
      },
      {
        title: "Outline a business model that works for our solution",
        isCompleted: false,
      },
      {
        title:
          "Talk to potential customers about our proposed solution and ask for fair price expectancy",
        isCompleted: false,
      },
    ],
  },
];

// task data is exported which is imported from tasks.json
export default tasksArray;
