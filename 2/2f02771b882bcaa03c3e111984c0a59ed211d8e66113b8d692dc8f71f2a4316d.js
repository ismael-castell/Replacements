(()=>{window.addEventListener('load',async()=>{if(document.querySelector('.signup-modal')){document.querySelector('.signup-modal').addEventListener('click',(evt)=>{if(evt.target.classList.contains('signup-modal')){evt.target.classList.add('hidden');if(evt.target.classList.contains('reload-on-close')){window.location.reload();}
evt.preventDefault();}});}});async function openSignUpModal(returnTo){if(returnTo&&returnTo.startsWith('/')){document.querySelector('.signin-modal').dataset.returnTo=returnTo;document.querySelector('.signup-modal').dataset.returnTo=returnTo;}else{document.querySelector('.signin-modal').dataset.returnTo='';document.querySelector('.signup-modal').dataset.returnTo='';}
document.querySelector('.signup-modal').classList.remove('hidden');document.querySelectorAll('.signup-modal .step').forEach((el)=>(el.classList.add('hidden')));document.querySelector('.signup-modal .step-signup').classList.remove('hidden');}
const linkSignUpModals=document.querySelectorAll('.link-open-signup-modal');if(linkSignUpModals){linkSignUpModals.forEach((linkSignUpModal)=>{linkSignUpModal.addEventListener('click',async(e)=>{if(document.querySelector('.signin-modal')){document.querySelector('.signin-modal').classList.add('hidden');}
const returnTo=e.currentTarget&&e.currentTarget.dataset&&e.currentTarget.dataset.href?e.currentTarget.dataset.href:'';openSignUpModal(returnTo);e.preventDefault();});});}
async function closeSignUpModal(returnTo){document.querySelector('.signup-modal').classList.add('hidden');if(returnTo){window.location=returnTo;}else{window.location.reload();}}
const linkCloseSignUpModal=document.querySelector('.link-close-signup-modal');if(linkCloseSignUpModal){linkCloseSignUpModal.addEventListener('click',