document.querySelectorAll('.btnDetail').forEach(item => {
    item.addEventListener('click',(e)=> {
        let parent = e.target.parentNode.parentNode;
        
        let picture = document.querySelector('.card-img-top').src;
        console.log('picture: ${picture}');

    });
});