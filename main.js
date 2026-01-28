const openeTextOne = document.getElementById('One');
const openeTextTwo = document.getElementById('Two');
const openeTextThree = document.getElementById('Three');
const openeTextFour = document.getElementById('Four');

const linkHeaderOne =  document.getElementById('linkHeaderBlockOne');
const linkHeaderTwo =  document.getElementById('linkHeaderBlockTwo');
const linkHeaderThree =  document.getElementById('linkHeaderBlockThree');
const linkHeaderFour =  document.getElementById('linkHeaderBlockFour');


openeTextOne.addEventListener('click', (e) => {
    e.preventDefault();
    linkHeaderOne.classList.toggle('active');
});


openeTextTwo.addEventListener('click', (e) => {
    e.preventDefault();
    linkHeaderTwo.classList.toggle('active');
});


openeTextThree.addEventListener('click', (e) => {
    e.preventDefault();
    linkHeaderThree.classList.toggle('active');
});


openeTextFour.addEventListener('click', (e) => {
    e.preventDefault();
    linkHeaderFour.classList.toggle('active');
});

