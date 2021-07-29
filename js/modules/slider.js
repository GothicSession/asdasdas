function slider(){
    const slides=document.querySelectorAll('.offer__slide'),
        slider=document.querySelector('.offer__slider'),
        previous=document.querySelector('.offer__slider-prev'),
        next=document.querySelector('.offer__slider-next'),
        total=document.querySelector('#total'),
        current=document.querySelector('#current');
        let slideIndex=1;
        const indicators=document.createElement('ol'),
            dots=[];
        indicators.classList.add('carusel-indicators');
        slider.append(indicators);
        for (let i=0;i<slides.length;i++){
            const dot = document.createElement('li');
            dot.setAttribute('data-slide-to',i+1);
            dot.classList.add('dot');
            indicators.append(dot);
            dots.push(dot);
        }

        showSlides(slideIndex);
        showDots(slideIndex);
        
        if (slides.length<10){
            total.textContent=`0${slides.length}`;
        }else{
            total.textContent=slides.length;
        }

        slider.style.position='relative';

        function showDots(n){
            dots.forEach(item=>item.style.opacity='0.5');
            dots[slideIndex-1].style.opacity='1';
        }

         function plusDots(n){
             showDots(slideIndex += n);
         }
        
        function showSlides(n){
            if(n>slides.length){
                slideIndex=1;
            }
            if (n<1){
                slideIndex=slides.length;
            }
            slides.forEach(item=>item.style.display='none');
            slides[slideIndex-1].style.display='block';
            if (slides.length<10){
                current.textContent=`0${slideIndex}`;
            }else{
                current.textContent=slideIndex;
            }
        }

        function plusSlides(n){
            showSlides(slideIndex += n);
        }

        previous.addEventListener('click',()=>{
            plusSlides(-1);
            plusDots(0);
        });

        next.addEventListener('click',()=>{
            plusSlides(1);
            plusDots(0);
        });

        dots.forEach(dot=>{
            dot.addEventListener('click',(e)=>{
                const slideTo=e.target.getAttribute('data-slide-to');
                slideIndex=slideTo;
                showSlides(slideIndex);
                showDots(slideIndex);
            });
        });
}

export default slider;