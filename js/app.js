const $NAVIGATION_BAR = document.querySelector('.navbar__menu');
const $ANCHOR_TAG = document.getElementsByClassName('.menu__link');
const $SECTION_LIST = document.querySelectorAll("section")

const $TOP_ARROW = document.querySelector('.arrow-top');
const $UNORDERED_LIST = document.querySelector('#navbar__list');

const fragment = document.createDocumentFragment();

//Create Dynamic List Anchor Tag Elements.
$SECTION_LIST.forEach((section)=>{

    let listElement = document.createElement('li');
    let anchorElement = document.createElement('a');

    anchorElement.setAttribute('id',`nav-${section.id}`);
    anchorElement.setAttribute('href',`#${section.id}`);
    anchorElement.setAttribute('class','menu__link');
    anchorElement.textContent = section.querySelector('h2').textContent;
    listElement.appendChild(anchorElement);
    fragment.appendChild(listElement);
    });

$UNORDERED_LIST.appendChild(fragment);

const hoverStatusFunction = (event)=>{
   if(event.target.classList.contains('menu__link')&&!event.target.classList.contains('menu__link__change'))
   {
       event.target.classList.toggle('menu__link__change');
   }

   else if(event.target.classList.contains('menu__link')&& event.target.classList.contains('menu__link__change'))
   {
       event.target.classList.toggle('menu__link__change');
   }

   
    
}

const isSectionActive = (element)=>{
    // return element.getBoundClientRect().bottom-element.getBoundClientRect().top==element.getBoundClientRect().height?true:false;
    // return element.getBoundingClientRect().bottom<=10 && element.getBoundingClientRect().bottom<element.getBoundingClientRect().height
    // return element.getBoundingClientRect().top<window.innerHeight;
const {top,bottom,height,y} = element.getBoundingClientRect();

    // if(element.getBoundingClientRect().top<=10 && element.getBoundingClientRect().top<window.innerHeight)
    if(
        // top<=element.offesetTop && bottom<=height
        // top<=150 && bottom>=150
        top<=90 && bottom>=100
    )
    {

    //    console.log(`${element.id} Top Value is ${top}`);
    //    console.log(`${element.id} Bottom Value is ${bottom}`);
    //    console.log(`Window Height is ${window.innerHeight}`);
    // console.log(`${element.id} Top value is ${top}`);
    // console.log(`${element.id} Bottom value is ${bottom}`);
    // console.log(`${element.id} Height value is ${height}`);
    // console.log(`Condition is ${top<=0 && bottom-top<=height}`)
    return true;
    }
    
}


const highlightScrollSection = ()=>{

    for (const section of $SECTION_LIST)
    {
        const navItem = document.querySelector(`#nav-${section.id}`)
        if(isSectionActive(section)){
            section.classList.add('active-background')
            navItem.classList.add('active-nav')
            

        }

        else {
            section.classList.remove('active-background');
            navItem.classList.remove('active-nav')
            
        }
    }


    if(window.scrollY>0)
    {
        // $HEADER_BAR.classList.add('sticky');
        $NAVIGATION_BAR.classList.add('sticky');
        $TOP_ARROW.classList.add('active');
    }

    else 
    {
        $NAVIGATION_BAR.classList.remove('sticky');
        $TOP_ARROW.classList.remove('active');
    }


}

const moveWindowUp = ()=>{
    window.scrollTo({top:0,behaviro:'smooth'})
}

window.addEventListener('scroll',highlightScrollSection);

$TOP_ARROW.addEventListener('click',moveWindowUp);
