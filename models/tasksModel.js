import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({ // Halkan sax u qor magaca 'taskSchema'
  title: {
    type: String,
    required: [true, 'Title is required']
  },
  date: {
    type: String,
    required: [true, 'Date is required']
  },
  finished: {
    type: Boolean,
    default: false
  }
});

const Tasks = mongoose.model('tasks', taskSchema); // Halkan isticmaal magaca saxda ah 'taskSchema'

export default Tasks;
