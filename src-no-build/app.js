import LayoutBuilder from './components/layout-builder.js';

const template = `
<div id="app">
<div class="container">
    <layout-builder />
</div>
</div>
`;

export default {
  name: 'App',
  template: template,
  components: {
    LayoutBuilder
  }

}