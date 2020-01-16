import { SET_LOADING } from "../actions/types";
import { GET_PROJECTS } from "./../actions/types";

const intialState = {
  projects: [
    {
      id: 1,
      project_name: "SOS Website",
      project_type: "Website",
      project_technologies: [
        "React",
        "Express/NodeJS",
        "GraphQL",
        "Context API",
        "Firebase"
      ],
      project_desc: [
        {
          id: 1.1,
          text: "Problem"
        },
        {
          id: 1.2,
          text: "Solution"
        }
      ]
    },
    {
      id: 2,
      project_name: "Inventory Manager",
      project_type: "Web APP",
      project_technologies: [
        "React with hooks",
        "Express/NodeJS",
        "Apollo Server",
        "Materialize",
        "PostgresQL"
      ],
      project_desc: [
        {
          id: 2.1,
          text: "Problem"
        },
        {
          id: 2.2,
          text: "Solution"
        }
      ]
    },
    {
      id: 3,
      project_name: "SOS Admin App",
      project_type: "Web APP",
      project_technologies: ["react", "Express"],
      project_desc: [
        {
          id: 3.1,
          text: "Problem"
        },
        {
          id: 3.2,
          text: "Solution"
        }
      ]
    }
  ],
  loading: false
};

export default (state = intialState, action) => {
  switch (action.type) {
    case GET_PROJECTS:
      return {
        ...state
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };

    default:
      return state;
  }
};
