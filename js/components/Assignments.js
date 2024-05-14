import AssignmentLists from "./AssignmentLists.js";
import AssignmentCreate from "./AssignmentCreate.js";

export default {
  components: { AssignmentLists, AssignmentCreate },
  template: `
  <section class="space-y-5">
  <assignmentLists title="In Progress" :assignments="filter.inProgress"></assignmentLists>
  <assignmentLists title="Completed" :assignments="filter.completed"></assignmentLists>
  <assignmentCreate @add="add"></assignmentCreate>
  </section>

  `,

  data() {
    return {
      assignments: [
        { name: "Belajar Vue", completed: false, id: 1,tag:"vue" },
        { name: "Belajar Vue 2", completed: false, id: 2, tag:"js" },
        { name: "Belajar Vue 3", completed: false, id: 3, tag:"js" },
      ],

      newAssignment: "",
    };
  },

  computed: {
    filter() {
      return {
        inProgress: this.assignments.filter((assignment) => !assignment.completed),
        completed: this.assignments.filter((assignment) => assignment.completed),
      };
    },
  },

  methods: {
    add(name){
      this.assignments.push({
        name: name,
        completed: false,
        id: this.assignments.length + 1
      });

    }
  },

};
