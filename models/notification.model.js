const mongoose = require("mongoose");
const { Schema } = mongoose;

const notificationSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      enum: ["NEW_FOLLOWER", "LIKED", "NEW_COMMENT"],
    },
    postId: {
      type: Schema.Types.ObjectId,
      ref: "Post",
      required: true,
    },
    targetId: { type: Schema.Types.ObjectId, ref: "User" },
    sourceId: { type: Schema.Types.ObjectId, ref: "User" },
    isRead: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const Notification = mongoose.model("posts", notificationSchema);
module.exports = { Notification };
