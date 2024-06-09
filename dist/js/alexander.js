const Accordions=(selector=".accordion")=>{const accordions=document.querySelectorAll(selector);if(!accordions)return;accordions.forEach((accordion,index)=>{const elements={heading:accordion.querySelector(".accordion-heading > *"),content:accordion.querySelector(".accordion-content"),headingChildren:accordion.querySelector(".accordion-heading > *").innerHTML},button=(accordion.classList.add("is-accordion"),document.createElement("button"));button.setAttribute("type","button"),button.setAttribute("aria-controls","accordion-content-"+index),button.setAttribute("id","accordion-button-"+index),button.setAttribute("aria-expanded","false"),button.innerHTML=elements.headingChildren,elements.heading.innerHTML="",elements.heading.appendChild(button),elements.content.setAttribute("id","accordion-content-"+index),elements.content.setAttribute("aria-labelledby","accordion-button-"+index),elements.content.setAttribute("role","region"),button.addEventListener("click",()=>{var expanded=button.getAttribute("aria-expanded");"true"===expanded?button.setAttribute("aria-expanded","false"):button.setAttribute("aria-expanded","true"),("true"===expanded?(accordion,elements)=>{const reducedMotion=window.matchMedia("(prefers-reduced-motion: reduce)"),contentHeight=elements.content.scrollHeight,elementTransition=elements.content.style.transition;if(elements.content.style.transition="",requestAnimationFrame(()=>{elements.content.style.height=contentHeight+"px";elements.content.style.transition=elementTransition;requestAnimationFrame(()=>{elements.content.style.height=0+"px"})}),reducedMotion.matches)accordion.classList.remove("is-active");else accordion.addEventListener("transitionend",function(){accordion.classList.remove("is-active")},{once:true})}:(accordion,elements)=>{const contentHeight=elements.content.scrollHeight;elements.content.style.height=contentHeight+"px",elements.content.addEventListener("transitionend",function(){elements.content.style.height="auto"},{once:true}),accordion.classList.add("is-active")})(accordion,elements)})})},Tabs=(selector=".tabs")=>{selector=document.querySelectorAll(selector);selector&&selector.forEach(tabContainer=>{const tabs=tabContainer.querySelectorAll('[role="tab"]');tabs.forEach(tab=>{tab.addEventListener("click",e=>{e.preventDefault(),tabs.forEach(tab=>{tab.setAttribute("aria-selected","false")}),tab.setAttribute("aria-selected","true");e=tab.getAttribute("aria-controls"),e=tabContainer.querySelector("#"+e.toString());tabContainer.querySelectorAll('[role="tabpanel"]').forEach(tab=>{tab.setAttribute("aria-hidden","true")}),e.setAttribute("aria-hidden","false")})})})};export{Accordions,Tabs};