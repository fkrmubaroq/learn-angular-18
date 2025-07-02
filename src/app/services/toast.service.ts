const addContentEl = (message: string) => {
  const content = document.createElement('div');
  content.classList.add('content');
  content.textContent = message;
  return content;
};

const addCloseBtnEl = ({ onClick }: { onClick: () => void }) => {
  const closeBtn = document.createElement('div');
  closeBtn.classList.add('close-btn');
  closeBtn.innerHTML = `&times;`;
  closeBtn.onclick = () => onClick();
  return closeBtn;
};

export function toast(message: string, duration: number = 3000) {
  if (document.querySelector('.toast')) return;

  const wrapper = document.createElement('div');
  wrapper.classList.add('animate-fade-in-out', 'toast');

  const closeBtnEl = addCloseBtnEl({
    onClick() {
      wrapper.remove();
    },
  });

  const contentEl = addContentEl(message);
  
  wrapper.appendChild(closeBtnEl);
  wrapper.appendChild(contentEl);

  document.body.appendChild(wrapper);
  setTimeout(() => {
    wrapper?.remove();
  }, duration);
}
