import RadioService from '@/services/Radio';

const Topnav = {
  main: function(){
    const topnav = document.querySelector('.topnav');
    const content = document.querySelector('.topnav__content');

    if(!content) {
      console.warn('There is no topnav content');
      return;
    }

    RadioService.subscribe('topnav:toggle', () => content.classList.toggle('is--active'));

    RadioService.subscribe('topnav:close', () => content.classList.remove('is--active'));

    RadioService.subscribe('topnav:open', () => content.classList.add('is--active'));

    // close when click outside of topnav in mobile
    topnav.addEventListener('click', e => {
      if(e.target === content && e.target.classList.contains('is--active')) {
        content.classList.remove('is--active');
      }
    });
  }
}
export default Topnav;