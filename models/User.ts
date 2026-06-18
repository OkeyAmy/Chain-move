import mongoose from "mongoose"

const NotificationSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
      trim: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    message: {
      type: String,
      required: true,
      trim: true,
    },
    read: {
      type: Boolean,
      default: false,
    },
    timestamp: {
      type: Date,
      default: Date.now,
    },
    link: {
      type: String,
      trim: true,
    },
  },
  { _id: false },
)

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide your name."],
      trim: true,
    },
    fullName: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      sparse: true,
      lowercase: true,
      trim: true,
      match: [/.+\@.+\..+/, "Please fill a valid email address"],
    },
    password: {
      type: String,
      minlength: 8,
    },
    phoneNumber: {
      type: String,
      sparse: true,
      trim: true,
    },
    address: {
      type: String,
      trim: true,
      default: null,
    },
    bio: {
      type: String,
      trim: true,
      default: null,
    },
    privyUserId: {
      type: String,
      unique: true,
      sparse: true,
      index: true,
    },
    walletaddress: {
      type: String,
      unique: true,
      sparse: true,
      trim: true,
    },
    walletAddress: {
      type: String,
      unique: true,
      sparse: true,
      trim: true,
    },
    stellarPublicKey: {
      type: String,
      unique: true,
      sparse: true,
      trim: true,
    },
    role: {
      type: String,
      enum: ["driver", "investor", "admin"],
      required: [true, "Please specify a role."],
      default: "investor",
    },
    availableBalance: {
      type: Number,
      default: 0,
      min: 0,
    },
    totalInvested: {
      type: Number,
      default: 0,
      min: 0,
    },
    totalReturns: {
      type: Number,
      default: 0,
      min: 0,
    },
    kycStatus: {
      type: String,
      enum: ["none", "pending", "approved_stage1", "pending_stage2", "approved_stage2", "rejected"],
      default: "none",
      index: true,
    },
    kycDocuments: {
      type: [String],
      default: [],
    },
    kycRejectionReason: {
      type: String,
      trim: true,
      default: null,
    },
    physicalMeetingDate: {
      type: Date,
      default: null,
    },
    physicalMeetingStatus: {
      type: String,
      enum: ["none", "scheduled", "approved", "rescheduled", "completed", "rejected_stage2"],
      default: "none",
      index: true,
    },
    isKycVerified: {
      type: Boolean,
      default: false,
    },
    kycVerified: {
      type: Boolean,
      default: false,
    },
    notifications: {
      type: [NotificationSchema],
      default: [],
    },
  },
  { timestamps: true },
)

export default mongoose.models.User || mongoose.model("User", UserSchema)
