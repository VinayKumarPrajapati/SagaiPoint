const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const address = mongoose.Schema({
  addressLine1: {
    type: String,
  },
  addressLine2: {
    type: String,
  },
  town: {
    type: String,
  },
  postcode: {
    type: String,
  },
  state: {
    type: String,
  },
});
//Image Schema
const ImageSchema = new Schema({
  imageName: {
    type: String,
  },
  imageData: {
    type: String,
  },
});
// Profile Schema
const ProfileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
  handle: {
    type: String,

    max: 40,
  },
  phone2: {
    type: String,
  },
  joborcompany: {
    type: Boolean,
  },
  salaryIncome: {
    type: String,
  },
  location: {
    type: String,
  },
  userImage: {
    type: String,
    required: true,
  },
  status: {
    type: String,
  },
  status1: {
    type: String,
  },
  skills: {
    type: [String],
  },
  bio: {
    type: String,
  },
  city: {
    type: String,
  },
  experience: [
    {
      title: {
        type: String,
      },
      company: {
        type: String,
      },
      location: {
        type: String,
      },
      from: {
        type: Date,
      },
      to: {
        type: Date,
      },
      current: {
        type: Boolean,
        default: false,
      },
      description: {
        type: String,
      },
    },
  ],
  education: [
    {
      school: {
        type: String,
      },
      degree: {
        type: String,
      },
      fieldofstudy: {
        type: String,
      },
      from: {
        type: Date,
      },
      to: {
        type: Date,
      },
      current: {
        type: Boolean,
        default: false,
      },
      description: {
        type: String,
      },
    },
  ],
  occupationStatus: {
    type: String,
    enum: ["JOB", "BUSINESS", "STUDY", "IDLE"],
    default: "IDLE",
  },

  job: [
    {
      job: {
        type: Boolean,
      },
      postion: {
        type: Boolean,
      },
      address: {
        type: Schema.Types.ObjectId,
        ref: "address",
      },
    },
  ],
  married: { type: String, enum: ["YES", "WITH-CHILD", "NO"], default: "NO" },
  canDrive: {
    type: String,
    enum: ["TWO-WHEELER", "FOUR-WHEELER", "NO"],
    default: "NO",
  },
  familyDetails: [
    {
      fatherName: {
        type: String,
      },
      motherName: {
        type: String,
      },
      motherFatherName: {
        type: String,
      },
      totalFamilyMember: {
        type: Number,
      },
      motherTad: { type: String },
      motherDistrict: { type: String },
      motherGotra: {
        type: Number,
      },

      familyIncome: {
        type: Number,
      },
      contactDetails: {
        type: Schema.Types.ObjectId,
        ref: "contact",
      },
      brother: { type: Schema.Types.ObjectId, ref: "brother" },
      sister: { type: Schema.Types.ObjectId, ref: "sister" },
    },
  ],
  social: {
    youtube: {
      type: String,
    },
    twitter: {
      type: String,
    },
    facebook: {
      type: String,
    },
    linkedin: {
      type: String,
    },
    instagram: {
      type: String,
    },
  },
  canCook: {
    type: Schema.Types.ObjectId,
    ref: "cook",
  },
  hobby: [{ type: [String] }],
  likings: [{ type: [String] }],

  birthDate: {
    type: Date,
  },
  height: [
    {
      cm: {
        type: Number,
      },
    },
  ],
  weight: [
    {
      kg: {
        type: Number,
      },
    },
  ],
  gender: {
    type: String,
    // required: true,
  },
  tad: {
    type: String,
  },
  district: {
    type: String,
  },
  handicap: {
    type: Boolean,
  },
  specs: {
    type: Boolean,
  },
  manglik: {
    type: Boolean,
  },
  suni: {
    type: Boolean,
  },
  gotra: {
    type: String,
  },
  gotra2: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Profile = mongoose.model("profile", ProfileSchema);
