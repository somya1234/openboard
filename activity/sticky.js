function createSticky(){
    // <div class="stickyPad">
    //     <div class="nav-bar">
    //         <div class="close"></div>
    //         <div class="minimize"></div>
    //         <div class="textbox"><textarea name="" id="" cols="30" rows="10"></textarea></div>
    //     </div>
    // </div>
    //this is what we are creating 
    //creating upper structure dynamically through Js
    let textBox = createBox();
    let textarea = document.createElement("textarea");
    textBox.appendChild(textarea);

}
