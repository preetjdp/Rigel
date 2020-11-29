function resize({ target : _target }) :void {
    const target : HTMLElement = _target

    // if(target.style.height) 
    console.log('HEIGHT',target.style.height)
    console.log('MAX HEIGHT',target.style.maxHeight)
    console.log('IS LARGER',parseInt(target.style.height) >= parseInt(target.style.maxHeight))
    // if(parseInt(target.style.height) >= parseInt(target.style.maxHeight)) {
    //     return
    // }
    
    target.style.height = "1px";
    target.style.height = (+target.scrollHeight) + "px";
}

export function text_area_resize(el: HTMLElement) {
    resize({ target: el });
    el.style.overflow = 'hidden';
    el.addEventListener('input', resize);

    return {
        destroy: () => el.removeEventListener('input', resize)
    }
}