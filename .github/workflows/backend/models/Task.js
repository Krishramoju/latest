// backend/models/Task.js
const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  title: String,
  completed: { type: Boolean, default: false },
});

module.exports = mongoose.model('Task', TaskSchema);


      # Runs a set of commands using the runners shell
      - name: Run a multi-line script
        run: |
          echo Add other actions to build,
          echo test, and deploy your project.
