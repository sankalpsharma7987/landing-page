/* Declare constants for the elements */

const $NAVIGATION_BAR = document.querySelector('.navbar__menu');
const $SECTION_LIST = document.querySelectorAll("section");
const $TOP_ARROW = document.querySelector('.arrow-top');
const $UNORDERED_LIST = document.querySelector('#navbar__list');
const $UNORDERED_LIST_MOBILE = document.querySelector('#navbar__list__mobile');
const $NAVIGATION_BURGER = document.querySelector('.navigation__burger')
const $NAVIGATION_MODAL = document.querySelector('.navigation__modal');

const $FORM_NAME_ELEMENT = document.querySelector('#form_input_name');
const $FORM_EMAIL_ELEMENT = document.querySelector('#form_input_email');
const $FORM_PHONE_ELEMENT = document.querySelector('#form_input_phone');
const $FORM_MESSAGE_ELEMENT = document.querySelector('#form_input_message');
const $FORM_BUTTON_ELEMENT = document.querySelector('#form_button_submit');

const fragment = document.createDocumentFragment();
const fragment_mobile = document.createDocumentFragment();

/* Create Dynamic List Anchor Tag Elements. */

$SECTION_LIST.forEach((section)=>{

    /* Create List and Anchor Tags */

    let listElement = document.createElement('li');
    let anchorElement = document.createElement('a');

    /* Set Attribute values for anchor tag and append in the list tag */

    anchorElement.setAttribute('id',`nav-${section.id}`);
    anchorElement.setAttribute('class','menu__link');
    anchorElement.textContent = section.querySelector('h2').textContent;
    listElement.appendChild(anchorElement);

    /* Add the newly created list tag to the fragment object */

    fragment.appendChild(listElement);
    
});

/* A separate forEach loop is ran to create a separate fragment for mobile version as the fragment does not have a parent node to remove and append to the new child node
The appendChild ensures the node object is part of one parent at one time. Hence the fragment code above cannot be used to append both $UNORDERED_LIST and $UNORDERED_LIST_MOBILE
version.
Refer to the MDN documentation for appendChild and DocumentFragment for further details.
 */

$SECTION_LIST.forEach((section)=>{

    /* Create List and Anchor Tags */

    let listElement = document.createElement('li');
    let anchorElement = document.createElement('a');

    /* Set Attribute values for anchor tag and append in the list tag */

    anchorElement.setAttribute('id',`nav-mobile-${section.id}`);
    anchorElement.setAttribute('class','menu__link');
    anchorElement.textContent = section.querySelector('h2').textContent;
    listElement.appendChild(anchorElement);

    /* Add the newly created list tag to the fragment object */

    fragment_mobile.appendChild(listElement);
    
});

/* After the section array is parsed and all elements are created and appended in the fragment, add the fragment to the unordered list */
$UNORDERED_LIST.appendChild(fragment);
$UNORDERED_LIST_MOBILE.appendChild(fragment_mobile);

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
        const navItemMobile = document.querySelector(`#nav-mobile-${section.id}`);

        /* Verify if section is active with the helper function */

        if(isSectionActive(section))
        {
            section.classList.add('active-background');
            navItem.classList.add('active-nav');
            navItemMobile.classList.add('active-nav');

            
        }

        else
        {
            section.classList.remove('active-background');
            navItem.classList.remove('active-nav');
            navItemMobile.classList.remove('active-nav');
            
            
            
        }
    }



/* Condition to verify if the window scrollbar has moved from its initial position of zero. If yes then change the color of header background */

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

/*Listener Event Handler for click on anchor tags that are part of the unordered list */

const scrollIntoSection = (e)=> {

    let scrollToSection = e.target.id.slice(4)
    let sectionName = document.getElementById(scrollToSection);
    sectionName.scrollIntoView({behavior: "smooth"});

}

const scrollIntoSectionMobile = (e)=> {

    let scrollToSection = e.target.id.slice(11)
    let sectionName = document.getElementById(scrollToSection);
    sectionName.scrollIntoView({behavior: "smooth"});

}

/* Listener Event Handler to move the scrollbar to top */

const moveWindowUp = ()=> {

    window.scrollTo({top:0,behavior:'smooth'});

}

/* Listener Event Handler to open the navigation-modal for small screen resolution */

const slideNavigationModal = ()=>{

    $NAVIGATION_MODAL.classList.add('navigation__modal__display');
    
}

const closeNavigationModal = (e)=>{

    if(e.target.nodeName!=='A' || e.target.nodeName==='SPAN')
    {
        $NAVIGATION_MODAL.classList.remove('navigation__modal__display');
    }
    
}

const buttonSubmitBehavior = ()=>{

    $FORM_EMAIL_ELEMENT.value = "";
    $FORM_PHONE_ELEMENT.value = "";
    $FORM_NAME_ELEMENT.value = "";
    $FORM_MESSAGE_ELEMENT.value = "";
}

/* Adding Listener Events */

window.addEventListener('scroll',highlightScrollSection);
$UNORDERED_LIST.addEventListener('click',scrollIntoSection);
$UNORDERED_LIST_MOBILE.addEventListener('click',scrollIntoSectionMobile);
$TOP_ARROW.addEventListener('click',moveWindowUp);
$NAVIGATION_BURGER.addEventListener('click',slideNavigationModal);
$NAVIGATION_MODAL.addEventListener('click',closeNavigationModal);
$FORM_BUTTON_ELEMENT.addEventListener('submit',buttonSubmitBehavior);