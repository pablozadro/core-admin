import RadioService from '@/services/Radio';
import TopnavComponent from '@/components/Topnav';
import ModalComponent from '@/components/Modal';

const App = {
  main: function() {
    document.addEventListener('click', e => {
      if(!e.target.dataset.event) return;
      let dataset = Object.assign({}, e.target.dataset);
      RadioService.publish(dataset.event, {e: e, dataset: dataset});
    });
    TopnavComponent.main();
    ModalComponent.main();
  }
}

export default App;