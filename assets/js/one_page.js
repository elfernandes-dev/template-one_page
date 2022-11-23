const c = (el)=>document.querySelector(el);

//Slider
let totalSliders_op = document.querySelectorAll('.slider_op--item').length;
let currentSlider_op = 0;
c('.slider_op--width').style.width = `calc(100vw * ${totalSliders_op})`;
c('.slider_op--controls').style.height = `${c('.slider_op--show').clientHeight}px`;
function goPrev_op() {
    currentSlider_op--;
    if(currentSlider_op < 0) {
        currentSlider_op = totalSliders_op -1;
    }
    updateMargin_op();
}
function goNext_op() {
    currentSlider_op++;
    if(currentSlider_op > (totalSliders_op-1)) {
        currentSlider_op = 0;
    }
    updateMargin_op();
}
function updateMargin_op() {
    let slider_opItemWidth = c('.slider_op--item').clientWidth;
    let newMargin_op = (currentSlider_op * slider_opItemWidth);
    c('.slider_op--width').style.marginLeft = `-${newMargin_op}px`;
}
setInterval(goNext_op, 5000);

//Mascara - Telefones
function format(mask, document){
    let i = document.value.length;
    let exit = mask.substring(0,1);
    let text = mask.substring(i)
    
    if (text.substring(0,1) != exit){
              document.value += text.substring(0,1);
    }          
  }

//Menu Mobile
function menuMobile() {
    let lineMenuMobile = document.getElementById("line-menuMobile");
    let linkMobile = document.getElementById("link_mobile");
    
    if(lineMenuMobile.style.display == 'flex' ) {
        lineMenuMobile.style.display ='none';
        linkMobile.style.transform = 'rotate(0deg)';
    }else {
        lineMenuMobile.style.display = 'flex';
        linkMobile.style.transform = 'rotate(90deg)';
    }
}