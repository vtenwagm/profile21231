const typed = new Typed('.texts',{
    strings : ['Coder tập sự','Người hướng nội', 'Neet lâu năm'],
    typeSpeed : 100,
    backSpeed : 100,
    backDelay : 1000,
    loop : true
})

const home = document.querySelector('.home');
const about = document.querySelector('.about');
const contact = document.querySelector('.contact');

function showhome() {
    about.style.display = 'none';
    contact.style.display = 'none';
    home.style.display = 'flex';
    home.style.position= 'relative';
    home.style.width= '80%';
    home.style.height= '100px';
    home.style.align_items= 'center';
    home.style.display= 'flex';
    home.style.justify_content= 'space-between';
    home.style.padding= '70px 10% 0';
}

function showabout() {
    home.style.display = 'none';
    contact.style.display = 'none';
    about.style.display = 'flex';
    about.style.position= 'relative';
    about.style.width= '80%';
    about.style.height= '100px';
    about.style.align_items= 'center';
    about.style.display= 'flex';
    about.style.justify_content= 'space-between';
    about.style.padding= '70px 10% 0';
}

function showcontact() {
    home.style.display = 'none';
    about.style.display = 'none';
    contact.style.display = 'flex';
    contact.style.position= 'relative';
    contact.style.width= '80%';
    contact.style.height= '100px';
    contact.style.align_items= 'center';
    contact.style.display= 'flex';
    contact.style.justify_content= 'space-between';
    contact.style.padding= '70px 10% 0';
}