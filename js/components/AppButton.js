export default {
  template: `
    <button class="bg-green-500 hover:bg-green-700 active:bg-green-800 px-4 py-2 rounded-md text-white" :disabled="processing">
    <slot/>
    </button>
    `,
    data(){
        return {
            processing:false
        }
    }
};
