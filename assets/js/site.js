(function () {
  var toggle=document.querySelector('.menu-toggle');
  var menu=document.querySelector('.nav-links');
  if(toggle&&menu){
    toggle.addEventListener('click', function(){
      var opened=toggle.getAttribute('aria-expanded')==='true';
      toggle.setAttribute('aria-expanded',String(!opened));
      menu.classList.toggle('is-open',!opened);
    });
    menu.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){toggle.setAttribute('aria-expanded','false');menu.classList.remove('is-open')})});
    document.addEventListener('keydown',function(e){if(e.key==='Escape'){toggle.setAttribute('aria-expanded','false');menu.classList.remove('is-open')}});
  }
  document.querySelectorAll('.author-profile').forEach(function(profile){
    var links=profile.querySelector('.author-links');if(!links)return;
    var b=document.createElement('button');b.className='author-follow';b.type='button';b.textContent='Project details';b.setAttribute('aria-controls','author-links');b.setAttribute('aria-expanded','false');
    links.parentNode.insertBefore(b,links);
    b.addEventListener('click',function(){var opened=b.getAttribute('aria-expanded')==='true';b.setAttribute('aria-expanded',String(!opened));links.classList.toggle('is-open',!opened)})
  });
})();
