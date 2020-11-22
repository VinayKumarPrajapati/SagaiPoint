const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const ProfileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
  surname: {
    type: String,
    required: true,
  },
  age: { type: Number, required: true },
  birth_date: {
    type: Date,
  },
  height: {
    type: String,
  },
  weight: {
    type: String,
  },
  gender: {
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
  user_name: {
    type: String,
    max: 40,
  },
  photo: {
    type: String,
  },
  handle: {
    type: String,
    required: true,
  },
  aadhar: {
    type: String,
  },
  gotra: {
    type: String,
  },
  age: {
    type: Number,
  },
  skills: {
    type: [String],
  },
  hobbies: {
    type: [String],
  },
  tad: {
    type: String,
  },
  district: {
    type: String,
  },
  likings: {
    type: String,
  },
  properties: [
    {
      shop: [
        {
          total_number: {
            type: Number,
          },
          sqft: {
            type: String,
          },
          address: {
            type: String,
          },
          rented: {
            type: Boolean,
          },
        },
      ],
      house: [
        {
          total_number: {
            type: String,
          },
          sqft: {
            type: String,
          },
          address: {
            type: String,
          },
          rented: {
            type: Boolean,
          },
          bhk: {
            type: Number,
          },
          flat_tenament: {
            type: Boolean,
          },
        },
      ],
    },
  ],
  married: [
    {
      married: {
        type: Boolean,
      },
      marriedWithChild: {
        type: Boolean,
      },
      Child: {
        type: Number,
      },
      girls: {
        type: Number,
      },
      boys: {
        type: Number,
      },
      childAge: {
        type: Number,
      },
    },
  ],
  job: [
    {
      company: {
        name: {
          type: String,
          required: true,
        },
        salary: {
          type: Number,
          required: true,
        },
        govt: {
          type: Boolean,
          required: true,
        },
        address: {
          type: String,
          required: true,
        },
        from: {
          type: Date,
          required: true,
        },
        to: {
          type: Date,
        },
        current: {
          type: Boolean,
          default: false,
        },
        field: {
          type: String,
          required: true,
        },
        description: {
          type: String,
        },
      },
    },
  ],
  education: [
    {
      school: {
        type: String,
        required: true,
      },
      degree: {
        type: String,
        required: true,
      },
      fieldofstudy: {
        type: String,
        required: true,
      },
      from: {
        type: Date,
        required: true,
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
  family_details: [
    {
      father_details: [
        {
          father_name: {
            type: String,
            required: true,
          },
          father_name: {
            type: String,
            required: true,
          },
          address: {
            type: String,
            required: true,
          },
          contact_name: {
            type: Number,
            max: 10,
            min: 10,
          },
          business: [
            {
              business_name: { type: String },
              business_type: { type: String },
              business_income: {
                type: Number,
              },
              business_address: { type: String },
              business_years: { type: Number },
            },
          ],
          job: [
            {
              company: {
                name: {
                  type: String,
                  required: true,
                },
                salary: {
                  type: Number,
                  required: true,
                },
                govt: {
                  type: Boolean,
                  required: true,
                },
                address: {
                  type: String,
                  required: true,
                },
                from: {
                  type: Date,
                  required: true,
                },
                to: {
                  type: Date,
                },
                current: {
                  type: Boolean,
                  default: false,
                },
                field: {
                  type: String,
                  required: true,
                },
                description: {
                  type: String,
                },
                part_time: {
                  type: Boolean,
                },
              },
            },
          ],
        },
      ],
      mother_details: [
        {
          mother_name: {
            type: String,
            required: true,
          },
          father_name: {
            type: String,
            required: true,
          },
          address: {
            type: String,
            required: true,
          },
          house_wife: {
            type: Boolean,
          },
          job: [
            {
              company: {
                name: {
                  type: String,
                  required: true,
                },
                salary: {
                  type: Number,
                  required: true,
                },
                govt: {
                  type: Boolean,
                  required: true,
                },
                address: {
                  type: String,
                  required: true,
                },
                from: {
                  type: Date,
                  required: true,
                },
                to: {
                  type: Date,
                },
                current: {
                  type: Boolean,
                  default: false,
                },
                field: {
                  type: String,
                  required: true,
                },
                description: {
                  type: String,
                },
                part_time: {
                  type: Boolean,
                },
              },
            },
          ],
          business: [
            {
              business_name: { type: String },
              business_type: { type: String },
              business_income: {
                type: Number,
              },
              business_address: { type: String },
              business_years: { type: Number },
            },
          ],
          sibling: [
            {
              brother_sister: {
                type: Boolean,
              },
              sibling_name: {
                type: String,
              },
              education: [
                {
                  school: {
                    type: String,
                    required: true,
                  },
                  degree: {
                    type: String,
                    required: true,
                  },
                  fieldofstudy: {
                    type: String,
                    required: true,
                  },
                  from: {
                    type: Date,
                    required: true,
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
              married: {
                type: Boolean,
              },
              birth_date: {
                type: Date,
              },
            },
          ],
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
    },
  ],
  requirment_match: [{}],
  date: {
    type: Date,
    default: Date.now,
  },
});
module.exports = Profile = mongoose.model("profile", ProfileSchema);
