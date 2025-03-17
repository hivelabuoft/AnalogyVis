Qualtrics.SurveyEngine.addOnload(function() {
    var qid = this.questionId;
    const canvas = document.getElementById(qid + '-Signature');
    const context = canvas.getContext("2d");

    const boxWidth = 1300;
    const boxHeight = 800;

    var signatureBox = document.querySelector(".Skin .SignatureBox.Border.Large");

    // Apply styles to the .SignatureBox.Border element
    signatureBox.style.setProperty("width", boxWidth + "px", "important");
    signatureBox.style.setProperty("height", boxHeight + "px", "important");

    // Set canvas dimensions
    canvas.width = boxWidth;
    canvas.height = boxHeight;

    context.lineCap = "round";
    context.lineJoin = "round";

    // Set initial drawing color to red
    context.strokeStyle = '#000000';
    context.fillStyle = '#000000';

    context.lineWidth = '10';

    let drawing = false;

    function startDrawing(e) {
        drawing = true;
        context.beginPath();
        draw(e);
    }

    function endDrawing(e) {
        drawing = false;
    }

    function getMousePos(canvas, evt) {
        var rect = canvas.getBoundingClientRect(),
            scaleX = canvas.width / rect.width,
            scaleY = canvas.height / rect.height;

        return {
            x: (evt.clientX - rect.left) * scaleX,
            y: (evt.clientY - rect.top) * scaleY
        }
    }

    function draw(e) {
        if (!drawing) return;

        // Adjust for touch events
        let clientX = e.clientX;
        let clientY = e.clientY;
        if (e.touches && e.touches.length > 0) {
            clientX = e.touches[0].clientX;
            clientY = e.touches[0].clientY;
        }

        let { x, y } = getMousePos(canvas, { clientX, clientY });

        context.lineTo(x, y);
        context.stroke();
    }

    window.addEventListener("mousedown", startDrawing);
    window.addEventListener("touchstart", startDrawing);

    window.addEventListener("mousemove", draw);
    window.addEventListener("touchmove", draw, { passive: false });

    window.addEventListener("mouseup", endDrawing);
    window.addEventListener("touchend", endDrawing);

    // Customize the signature box and canvas appearance
    jQuery("#" + this.questionId + "-SignatureBox").css({
        "background": "url('https://raw.githubusercontent.com/oliphant0803/AnalogyVis/refs/heads/main/analogyCharts/waterfall/WaterfallTask.png')",
        "background-size": "100% 100%",
        "background-repeat": "no-repeat",
        "background-position": "center center",
        "z-order": "1"
    });

    jQuery("#" + this.questionId + "-SignLine").css({ "display": "none" });
    jQuery("#" + this.questionId + "-X").css({ "display": "none" });
    jQuery("#" + this.questionId + "-ClearSignature").css({ "background-color": "white" });
    jQuery("#" + this.questionId + "-Signature").css({
        "opacity": "1",
        "z-order": "2"
    });

    // ===== Add the controls (color picker and stroke width slider) below =====

    // Define the colors you want to offer
    let colors = [
        { name: 'Black', color: '#000000' },
        { name: 'Blue', color: '#008cff' },
        { name: 'Green', color: '#07701c' },
        { name: 'Red', color: '#ff0000' }
    ];

    // Create a container div for the color buttons
    let colorButtonsContainer = document.createElement('div');
    colorButtonsContainer.id = 'color-button-container';

    // Create buttons for each color
    colors.forEach(function(colorInfo) {
        let colorButton = document.createElement('button');
        colorButton.className = 'color-button';
        colorButton.style.backgroundColor = colorInfo.color;
        colorButton.title = colorInfo.name; // Add a tooltip with the color name

        // Add event listener to change the drawing color when clicked
        colorButton.addEventListener('click', function() {
            context.strokeStyle = colorInfo.color;
            context.fillStyle = colorInfo.color;
        });

        // Append the color button to the buttons container
        colorButtonsContainer.appendChild(colorButton);
    });

    // Create the color picker container, which will contain h3 and color-button-container
    let colorPickerContainer = document.createElement('div');
    colorPickerContainer.id = 'color-picker-container'; // Assign an ID for CSS styling

    let colorPickerTitle = document.createElement('h3');
    colorPickerTitle.textContent = 'Color Picker'; // Set the title text

    // Append h3 and color buttons container to color picker container
    colorPickerContainer.appendChild(colorPickerTitle);
    colorPickerContainer.appendChild(colorButtonsContainer);

    // Create a container div for the stroke width control
    let strokeWidthContainer = document.createElement('div');
    strokeWidthContainer.id = 'stroke-width-container'; // Assign an ID for CSS styling

    // Create a label for the stroke width slider
    let strokeWidthLabel = document.createElement('label');
    strokeWidthLabel.textContent = 'Stroke Width';
    strokeWidthLabel.htmlFor = 'stroke-width-slider'; // Associate label with slider
    strokeWidthLabel.style.fontFamily = 'Arial, sans-serif';
    strokeWidthLabel.style.color = '#333';
    strokeWidthLabel.style.marginBottom = '10px';

    // Create the slider input element
    let strokeWidthSlider = document.createElement('input');
    strokeWidthSlider.type = 'range';
    strokeWidthSlider.id = 'stroke-width-slider';
    strokeWidthSlider.min = '1';
    strokeWidthSlider.max = '20';
    strokeWidthSlider.value = context.lineWidth.toString(); // Set initial value
    strokeWidthSlider.step = '1'; // Slider increments in whole numbers

    // Create an element to display the current stroke width value
    let strokeWidthDisplay = document.createElement('span');
    strokeWidthDisplay.id = 'stroke-width-display';
    strokeWidthDisplay.textContent = context.lineWidth + 'px';
    strokeWidthDisplay.style.marginLeft = '10px';
    strokeWidthDisplay.style.fontFamily = 'Arial, sans-serif';
    strokeWidthDisplay.style.color = '#333';

    // Add an event listener to update the stroke width
    strokeWidthSlider.addEventListener('input', function() {
        // Update the stroke width based on slider value
        context.lineWidth = parseInt(this.value, 10);

        // Update the display with the current stroke width
        strokeWidthDisplay.textContent = this.value + 'px';
    });

    // Append label, slider, and display to the stroke width container
    strokeWidthContainer.appendChild(strokeWidthLabel);
    strokeWidthContainer.appendChild(strokeWidthSlider);
    strokeWidthContainer.appendChild(strokeWidthDisplay);

    // Create a parent container to hold both color-picker-container and stroke-width-container
    let controlsContainer = document.createElement('div');
    controlsContainer.id = 'controls-container'; // For CSS styling

    // Append color-picker-container and stroke-width-container to controlsContainer
    controlsContainer.appendChild(colorPickerContainer);
    controlsContainer.appendChild(strokeWidthContainer);


    // Insert the controlsContainer into the page before the signature box
    signatureBox.parentNode.insertBefore(controlsContainer, signatureBox);

});

Qualtrics.SurveyEngine.addOnReady(function() {
    // Place your JavaScript here to run when the page is fully displayed
});

Qualtrics.SurveyEngine.addOnUnload(function() {
    // Place your JavaScript here to run when the page is unloaded
});