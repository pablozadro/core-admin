console.log('Welcome to Core Admin');
import RadioService from '@/services/Radio';
import TopnavComponent from '@/components/topnav';
import ModalComponent from '@/components/modal';

const DEFAULTS_SETTINGS = {
  title: 'core-x'
}

/** Class representing the core app. */
export default class App {

  /**
   * 
   * @param {object} [options={}] - optional user settings.
   */
  constructor(options={}) {
    this.settings = Object.assign({}, DEFAULTS_SETTINGS, options);
    this.title = this.settings.title;
    this.components = {
      topnav: new TopnavComponent(),
      modal: new ModalComponent()
    }
  }

  main() {
    document.addEventListener('click', e => {
      if(!e.target.dataset.event) return;
      let dataset = Object.assign({}, e.target.dataset);
      CoreRadio.publish(dataset.event, {e: e, dataset: dataset});
    });
    this.components.topnav.main();
    this.components.modal.main();
  }
}