class SlideStories {
    constructor(id) {
        this.slide = document.querySelector(`[data-slide="${id}"]`);
        this.active = 0;
        this.init();
    }
    activeSlide(index) {
        this.active = index;
        this.itens.forEach((iten) => iten.classList.remove('active'));
        this.itens[index].classList.add('active');
        this.thumbItens.forEach((iten) => iten.classList.remove('active'));
        this.thumbItens[index].classList.add('active');
        this.autoSlide();
    }

    prev(){
        if(this.active > 0) {
        this.activeSlide(this.active - 1)
    }else {
        this.active.slide(this.itens.length - 1);
    }
    }

    next() {
        if(this.active < this.itens.length - 1) {
        this.activeSlide(this.active + 1)
    } else {
        this.activeSlide(0);
    }
    }

    addNavigation() {
        const nextBtn = this.slide.querySelector('.slide-next');
        const prevBtn = this.slide.querySelector('.slide-prev');
        nextBtn.addEventListener('click', this.next)
        prevBtn.addEventListener('click', this.prev)
    }

    addThumbItens() {
        this.itens.forEach(() => this.thumb.innerHTML += '<span></span>');
        this.thumbItens = Array.from(this.thumb.children);
    }

    autoSlide() {
        clearTimeout(this.timeout);
        this.interval = setTimeout(this.next, 5000)
    }

    init() {
        this.next = this.next.bind(this);
        this.prev = this.prev.bind(this);
        this.itens = this.slide.querySelectorAll('.slide-itens > *');
        this.thumb = this.slide.querySelector('.slide-thumb');
        this.addThumbItens();
        this.activeSlide(0);
        this.addNavigation();
    }
}

new SlideStories('slide');