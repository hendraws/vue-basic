export default {
    template:`
    <form @submit.prevent="add">
  <div class="border border-gray-600 text-black">
  <input v-model="newAssignment" placeholder="New Assignment..." class="text-black p-2" >
  <button type="submit" class="bg-white text-black  p-2 border-l">Add</button>
  </div>
  </form>
    `,
    data() {
        return {
            newAssignment: "",
        };
    },
    // props: {
    //     assignments: Array,
    // },
    methods: {
        add() {
            this.$emit("add", this.newAssignment);
            this.newAssignment = "";
        // alert('add');
        }
      },
}
