export default {
  template: `
    <li class="px-2 py-1 flex justify-between align-center">
    <label>
    {{ assignment.name }}
    </label>
    <input type="checkbox" class="ml-2" v-model="assignment.completed"/>
    </li>
    `,
  props: {
    assignment: Object,
  },
};
