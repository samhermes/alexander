const accordions=document.querySelectorAll(".accordion");accordions.forEach((t,e)=>{const n={heading:t.querySelector(".accordion-heading > *"),content:t.querySelector(".accordion-content"),headingChildren:t.querySelector(".accordion-heading > *").innerHTML},o=document.createElement("button");o.setAttribute("type","button"),o.setAttribute("aria-controls","accordion-content-"+e),o.setAttribute("id","accordion-button-"+e),o.setAttribute("aria-expanded","false"),o.appendChild(n.headingChildren),n.heading.appendChild(o),n.content.setAttribute("id","accordion-content-"+e),n.content.setAttribute("aria-labelledby","accordion-button-"+e),n.content.setAttribute("role","region"),o.addEventListener("click",()=>{const e=o.getAttribute("aria-expanded");"true"===e?o.setAttribute("aria-expanded","false"):o.setAttribute("aria-expanded","true"),"true"===e?closeAccordion(t,n):openAccordion(t,n)})});const openAccordion=(t,e)=>{const n=e.content.scrollHeight;e.content.style.height=n+"px",e.content.addEventListener("transitionend",function(){e.content.removeEventListener("transitionend",arguments.callee),e.content.style.height="auto"}),t.classList.add("is-active")},closeAccordion=(t,e)=>{const n=e.content.scrollHeight,o=e.content.style.transition;e.content.style.transition="",requestAnimationFrame(()=>{e.content.style.height=n+"px",e.content.style.transition=o,requestAnimationFrame(()=>{e.content.style.height="0px"})}),t.addEventListener("transitionend",function(){t.removeEventListener("transitionend",arguments.callee),t.classList.remove("is-active")})},tabs=document.querySelectorAll(".tabs");tabs.forEach(t=>{const e=t.querySelectorAll('[role="tab"]');e.forEach(n=>{n.addEventListener("click",o=>{o.preventDefault(),e.forEach(t=>{t.setAttribute("aria-selected","false")}),n.setAttribute("aria-selected","true");const r=n.getAttribute("aria-controls"),i=t.querySelector("#"+r.toString());t.querySelectorAll('[role="tabpanel"]').forEach(t=>{t.setAttribute("aria-hidden","true")}),i.setAttribute("aria-hidden","false")})})});