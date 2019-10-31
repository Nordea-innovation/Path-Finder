

/**
 * @return {string}
 */


let Header=()=> {

    let menuList=`<span class="menu_list"><ol class="items">
                  <li>Notification<hr class="underline_menuItems"></li>
                  <li><img alt="" src="" id="settings">Setting<hr class="underline_menuItems"></li>
                  <li>Help<hr class="underline_menuItems"></li>
                  <li>About</li>
                  </ol>
                  </span>`;

    let header=`<header id="header_bar">
<span class="logo">POINT FINDER <span class="elsdots">&elsdot;</span></span><span class="containment_menuItems_and_notification"><img src="" id="message"  alt="message"> 
<span class="menu_items">&Congruent;${menuList}</span> </span>
  </header>`;


    return (header);


};

