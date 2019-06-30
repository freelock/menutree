
export default {
  template: `
    <li>
      <a @click="toggle" v-if="!item.module" :aria-expanded="open ? 'true' : 'false'">
        <span v-if="isFolder">[{{ open ? '-' : '+' }}]</span>{{item.label}}
      </a>
      <a @click="follow" v-if="item.module" :href="url">
        {{item.label}}
      </a>
    <ul v-if="expanded">
      <menu-item
        v-for="child,indx in children"
        :item="child"
        :key="indx"
        :menudata="menudata"
        ></menu-item>
    </ul>
    </li>
  `,
  props: [
    'item',
    'menudata',
  ],
  name: 'menu-item',
  data() {
    return {
      open: false,
    }
  },
  computed: {
    children() {
      const childr = this.menudata.filter(child => {
        return this.item.id === child.parent;
      });
      return childr;
    },
    isFolder() {
      return this.children.length > 0;
    },
    expanded() {
      if (this.children) {
        return this.open;
      }
      return false;
    },
    url() {
      return this.item.module + '?'
        + this.item.args.join('&');
    },
  },
  methods: {
    toggle() {
      this.open = !this.open;
    },
    follow(event) {
      console.log(this.url);
      event.preventDefault();
    },
  },
}