const mongoose = require("mongoose");
// const AutoIncrement = require("mongoose-sequence")(mongoose);

const projectSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
    },
    thumbnail: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    features: [
      {
        type: String,
      },
    ],
    images: [
      {
        type: String,
        required: true,
      },
    ],
    links: {
      live: {
        type: String,
        required: true,
        trim: true,
      },
      server: {
        type: String,
        trim: true,
      },
      client: {
        type: String,
        trim: true,
      },
    },
    technology: {
      frontend: [
        {
          type: String,
          required: true,
        },
      ],
      backend: [
        {
          type: String,
          required: true,
        },
      ],
      tools: [
        {
          type: String,
          required: true,
        },
      ],
    },
  },
  {
    timestamps: true,
  }
);

/* projectSchema.plugin(AutoIncrement, {
  inc_field: "project",
  id: "projectNums",
  start_seq: 500,
}); */

const Project = mongoose.model("Project", projectSchema);
module.exports = Project;
