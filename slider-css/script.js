const header = document.getElementById('header');

const imgs = [
'https://images.unsplash.com/photo-1538567467484-b1966f561dc6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e722817bfae38df2e8fad076d7a0b24e&auto=format&fit=crop&w=750&q=80',
'https://images.unsplash.com/photo-1538602668526-f9799cec34e5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=54e55b60cc5530eac0e628430d88bac0&auto=format&fit=crop&w=889&q=80',
'https://images.unsplash.com/photo-1538588702732-60b3c3b193fc?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=fa9910cbc3b3d98aae2023633c602194&auto=format&fit=crop&w=750&q=80',
'https://images.unsplash.com/photo-1538573190761-2eddaa63465b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3ff0c15bb88b7d9881f9aba0d640e712&auto=format&fit=crop&w=722&q=80'
];

header.style.backgroundImage = `url(${imgs[0]})`;

let index = 1;

setInterval(()=>{
    header.style.backgroundImage = `url(${imgs[index]})`;
    index++;//incrementa en uno su valor
    
    if(index === imgs.length) index = 0;

},2000)