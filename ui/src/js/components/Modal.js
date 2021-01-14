import RadioService from '@/services/Radio';

const Modal = {
  main: function() {
    const modalsById = {};
    const modals = document.querySelectorAll('.modal');

    if(!modals) {
      console.warn('There is no modals. Exit.');
      return;
    }

    modals.forEach(modal => {
      let id = modal.getAttribute('id');
      if(!id) {
        console.warn('Modal ID is required');
        return;
      }
      modalsById[id] = modal;
    });

    RadioService.subscribe('modal:open', context => {
      if(modalsById[context.dataset.target]) {
        modalsById[context.dataset.target].classList.add('is--active');
      }
    });

    RadioService.subscribe('modal:close', context => {
      if(modalsById[context.dataset.target]) {
        modalsById[context.dataset.target].classList.remove('is--active');
      }
    });
  }
}
export default Modal