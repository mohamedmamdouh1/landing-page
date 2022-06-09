/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Start Helper Functions
 * addSection function is used to add the fourth section to the HTML index.html using JavaScript instead of adding it manually. 
*/

function addSection()
{
    const sectionParent = document.querySelector('main');
    const newSection = document.createElement('section');
    newSection.setAttribute('id','section4');
    newSection.setAttribute('data-nav','Section 4');
    newSection.innerHTML = '<div class="landing__container"><h2>Section 4</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.</p><p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p></div>';
    // now append the child: the forth section to the parent: <main>.
    sectionParent.appendChild(newSection);
}
/**
 * End Helper Functions
*/
// Add new section
addSection();
/**  Define Global Variables
 * 
*/
// first, Select the sections tag with querySelectAll to manipulate them with JS as Node List.
const mySections = document.querySelectorAll("section");
// then we select the unlisted menu ID attribute with getElementById method to access it
let myList = document.getElementById("navbar__list");
// we define a variable "fragmentDoc" to use it to enhance loading performance
let fragmentDoc = document.createDocumentFragment();
/**
 * End Global Variables
 
 * 
 * Begin Main Functions
*/
// build the nav
function buildNavMenu()
{
    // loop over the four sections in index.html
    mySections.forEach(section=> 
    {
        // create the list elements to include in the menu
        const sectionList = document.createElement('li');
        
        // create the links that will be attached to the menu list
        const linkRef = document.createElement('a');

        // link each section with its ID to the clickable link
        linkRef.href = `#${section.getAttribute('id')}`; 
        // insert data-nav menu names into the links
        linkRef.innerText = section.getAttribute('data-nav');
        // add menu__link class to link the CSS properties to the links of the list
        linkRef.classList.add("menu__link");
        /**********Scroll to section on link click using scrollIntoView event***********/
        linkRef.addEventListener("click", evt=> 
        {
            evt.preventDefault();
            section.scrollIntoView({behavior: "smooth"})
        });
        /******************************************************************************/                
        // to display the links added, append the element <a> to the parent <li>
        sectionList.appendChild(linkRef);
        // to display the section list added, append the element <l> to fragment in order to maximize code optimization
        fragmentDoc.appendChild(sectionList);
    });
    // now append fragmentDoc to the unordered list, the container list.
    myList.appendChild(fragmentDoc);
}

// Add class 'active' to section when near top of viewport
function activeSection()
    {   // use addEventListener Method, Event Type: Scrolling
    window.addEventListener("scroll", function(){
    // handler function contains the action triggered by the event: Scroll

        // loop over the four sections using for..of to check active section
        for (let section of mySections)
        {
            // if condtion to check if the displayed section is in the range of the viewport or not
            // 0 means that the section at the top of the viewport
            // 360 is the maximum size for the section starting from the top of the page.
            if (section.getBoundingClientRect().top >= 0
            && section.getBoundingClientRect().top <= 360) {
            section.classList.add("your-active-class");
   
           /**********  Active State Style  *************/ 
         //  Select all the links, and get attribute for active section by data-nav
            let linkRef_select = document.querySelectorAll("a");
            selectedLink = section.getAttribute("data-nav");

        //   Then use forEach on all the links of sections
            linkRef_select.forEach(linkRef_select=>{
        //  Remove all active sections to enable the transition to the current active section using if condition        
                linkRef_select.classList.remove('active_state');

                if (linkRef_select.innerText == selectedLink)
                linkRef_select.classList.add('active_state');
            } )
           /********************************************/ 

            }
            // if the section is not the range it should be removed as active section
            // -ve value means that the section is above the viewport and then should not be the active section 
            // if more than 360 it means that the section is not displayed yet and very far from top of the view then it should be inactive also
            else if (section.getBoundingClientRect().top < 0
            || section.getBoundingClientRect().top > 360){
            // check for previous activated sections:
            if (section.classList.contains("your-active-class")){
                section.classList.remove("your-active-class");

            } }
        }
    });      

}


/*
*/
/**
 * End Main Functions
 * 
*/

// Build menu 
buildNavMenu();
// Set sections as active
activeSection();
// Scroll to section on link click has been added to buildNavMenu function by using ScrollIntoView Method