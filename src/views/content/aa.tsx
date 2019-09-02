import { Vue, Component } from 'vue-property-decorator';

@Component
export default class aa extends Vue {
loggo() {
    console.log('623874rty');
  }
  render() {
    return (
      <div onClick={this.loggo}>
        ccx
        <br/>
      </div>
    );
  }
}
