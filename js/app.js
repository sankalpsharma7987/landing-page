/* Declare constants for the elements */

const $NAVIGATION_BAR = document.querySelector('.navbar__menu');
const $SECTION_LIST = document.querySelectorAll("section");
const $TOP_ARROW = document.querySelector('.arrow-top');
const $UNORDERED_LIST = document.querySelector('#navbar__list');
const fragment = document.createDocumentFragment();

/* Create Dynamic List Anchor Tag Elements. */

$SECTION_LIST.forEach((section)=>{
    /* Create List and Anchor Tags */

    let listElement = document.createElement('li');
    let anchorElement = document.createElement('a');

    /* Set Attribute values for anchor tag and append in the list tag */

    anchorElement.setAttribute('id',`nav-${section.id}`);
    anchorElement.setAttribute('href',`#${section.id}`);
    anchorElement.setAttribute('class','menu__link');
    anchorElement.textContent = section.querySelector('h2').textContent;
    listElement.appendChild(anchorElement);

    /* Add the newly created list tag to the fragment object */

    fragment.appendChild(listElement);
});

/* After the section array is parsed and all elements are created and appended in the fragment, add the fragment to the unordered list */

$UNORDERED_LIST.appendChild(fragment);

/* Helper Function to verify if section is active */

const isSectionActive = (element)=> {

    const {top,bottom} = element.getBoundingClientRect();
    
        if(top<=90 && bottom>=100)
        {
            return true;
        }
        
}

/* Listener Event Handler to highlight section that is active */

const highlightScrollSection = ()=> {

    for (const section of $SECTION_LIST)
    {
        const navItem = document.querySelector(`#nav-${section.id}`);

        /* Verify if section is active with the helper function */

        if(isSectionActive(section))
        {
            section.classList.add('active-background');
            navItem.classList.add('active-nav');
        }

        else
        {
            section.classList.remove('active-background');
            navItem.classList.remove('active-nav');
            
        }
    }


    if(window.scrollY>0)
    {
        $NAVIGATION_BAR.classList.add('header__color');
        $TOP_ARROW.classList.add('active');
    }

    else 
    {
        $NAVIGATION_BAR.classList.remove('header__color');
        $TOP_ARROW.classList.remove('active');
    }


}

/* Listener Event Handler to move the scrollbar to top */

const moveWindowUp = ()=> {

    window.scrollTo({top:0,behaviro:'smooth'});

}

/* Adding Listener Events */

window.addEventListener('scroll',highlightScrollSection);
$TOP_ARROW.addEventListener('click',moveWindowUp);
