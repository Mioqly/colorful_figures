var Rectangle = (function() {
  function Rectangle(size, color, index) {
    this.size = size;
    this.color = color;
    this.index = index; 
  }

  Rectangle.prototype.setIndex = function(index) {
    this.index = index;
  };

  return Rectangle;
})();

let size = "";

document
  .querySelector("#size-options-container")
  .addEventListener("click", function(button) {
    if (button.target && button.target.nodeName == "BUTTON") {
      let buttons = document.querySelectorAll("#size-options-container button");

      buttons.forEach(function(sizeButton) {
        if (sizeButton.firstChild.nodeName == "I") {
          sizeButton.removeChild(sizeButton.firstChild);
        }
      });

      size = button.target.dataset.size;

      let icon = document.createElement("i");
      icon.classList.add("fas", "fa-check", "check-icon");
      button.target.prepend(icon);
    }
  });

let color = "";

document
  .querySelector("#colors-container")
  .addEventListener("click", function(button) {
    if (button.target && button.target.nodeName == "BUTTON") {
      let buttons = document.querySelectorAll("#colors-container button");

      buttons.forEach(function(colorButton) {
        if (colorButton.firstChild && colorButton.firstChild.nodeName == "I") {
          colorButton.removeChild(colorButton.firstChild);
        }
      });
      color = button.target.dataset.color;

      let icon = document.createElement("i");
      icon.classList.add("fas", "fa-check", "color-check-icon");
      button.target.appendChild(icon);
    }
  });

let index = 0;

document
  .querySelector("#position-row")
  .addEventListener("click", function(button) {
    if (button.target && button.target.nodeName == "BUTTON") {
      if (button.target.dataset.position == "top") {
        index = -1;
      } else if (button.target.dataset.position == "bottom") {
        index = container.rectangleSet.length;
      }

      removeElementCheckIcon();

      removeElementCheckClass();

      let icon = document.createElement("i");
      icon.classList.add("fas", "fa-check", "check-icon");
      button.target.prepend(icon);
    }
  });

document
  .querySelector("#position-rectangles-body")
  .addEventListener("click", function(button) {
    if (button.target && button.target.nodeName == "BUTTON") {
      if (button.target.dataset.index) {
        index = parseInt(button.target.dataset.index) + 1;
      }

      removeElementCheckClass();
      removeElementCheckIcon();
      button.target.classList.add("position-checked");
    }
  });

const removeElementCheckClass = function() {
  let buttons = document.querySelectorAll("#position-rectangles-body button");
  buttons.forEach(function(positionButton) {
    if (positionButton.classList.contains("position-checked")) {
      positionButton.classList.remove("position-checked");
    }
  });
};

const removeElementCheckIcon = function() {
  let buttons = document.querySelectorAll("#position-row button");
  buttons.forEach(function(positionButton) {
    if (positionButton.firstChild.nodeName == "I") {
      positionButton.removeChild(positionButton.firstChild);
    }
  });
};
