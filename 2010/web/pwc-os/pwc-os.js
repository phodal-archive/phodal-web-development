// Overide WindowUtilities getPageSize to remove dock height (for maximized windows)
WindowUtilities._oldGetPageSize = WindowUtilities.getPageSize;
WindowUtilities.getPageSize = function() {
  var size = WindowUtilities._oldGetPageSize();
  var dockHeight = $('dock').getHeight();
  
  size.pageHeight -= dockHeight;
  size.windowHeight -= dockHeight;
  return size;
};    


// Overide Windows minimize to move window inside dock  
Object.extend(Windows, {
  // Overide minimize function
  minimize: function(id, event) {
    var win = this.getWindow(id)
    if (win && win.visible) {
      // Hide current window
      win.hide();            
    
      // Create a dock element
      var element = document.createElement("span");
      element.className = "dock_icon"; 
      element.style.display = "none";
      element.win = win;
      $('dock').appendChild(element);
      Event.observe(element, "mouseup", Windows.restore);
      $(element).update(win.getTitle());
    
      new Effect.Appear(element)
    }
    Event.stop(event);
  },                 
  
  // Restore function
  restore: function(event) { 
    var element = Event.element(event);
    // Show window
    element.win.show();
    //Windows.focus(element.win.getId());                    
    element.win.toFront();
    // Fade and destroy icon
    new Effect.Fade(element, {afterFinish: function() {element.remove()}})
  }
})

// blur focused window if click on document
Event.observe(document, "click", function(event) {   
  var e = Event.element(event);
  var win = e.up(".dialog");
  var dock = e == $('dock') || e.up("#dock"); 
  if (!win && !dock && Windows.focusedWindow) {
    Windows.blur(Windows.focusedWindow.getId());                    
  }
})               

// Chnage theme callback
var currentTheme = 0;
function changeTheme(event) {
  var index = Event.element(event).selectedIndex;
  if (index == currentTheme)
    return;

  var theme, blurTheme;
  switch (index) {
    case 0:
      theme = "mac_os_x";
      blurTheme = "blur_os_x";
      break;
    case 1:
      theme = "bluelighting";
      blurTheme = "greylighting";
      break;
    case 2:
      theme = "greenlighting";
      blurTheme = "greylighting";
      break;
  }
  Windows.windows.each(function(win) {
    win.options.focusClassName = theme; 
    win.options.blurClassName = blurTheme;
    win.changeClassName(blurTheme)
  });
  Windows.focusedWindow.changeClassName(theme);
  currentTheme = index;
}

function initWebOS() {         
  var win = new Window({className: "mac_os_X",  width:350, height:400, zIndex: 100, resizable: true, title: "Welcome to Mokcy", showEffect:Effect.BlindDown, hideEffect: Effect.SwitchOff, draggable:true, wiredDrag: true})

win.getContent().innerHTML= "<div style='padding:10px'>欢迎来到墨颀</div>"
win.setStatusBar("墨颀");
win.showCenter();
var win = new Window({className: "mac_os_X",  width:250, height:150,top:100,left:100,resizable: true, title: "Welcome to Mokcy", showEffect:Effect.BlindDown, hideEffect: Effect.SwitchOff, draggable:true, wiredDrag: true})

win.getContent().innerHTML= "<div style='padding:10px'>Welcome to Mokcy with PWC-os</div>"
win.setStatusBar("墨颀");
win.showCenter();
}
Event.observe(window, "load", initWebOS)
               
               
