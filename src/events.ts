export default () => {
  const sectionList: NodeListOf<HTMLElement> = document.querySelectorAll('section');

  sectionList.forEach(section => {
    section.addEventListener('click', (e) => {
      console.log('click', e.target);
    });
    section.addEventListener('touchstart', (e) => {
      console.log('touchstart', e.target);
    });
  });
};