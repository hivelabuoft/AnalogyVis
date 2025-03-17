Qualtrics.SurveyEngine.addOnload(function() {
    var qid = this.questionId;
    const canvas = document.getElementById(qid+'-Signature');
    const context = canvas.getContext("2d");

    const boxWidth = 1300; 
    const boxHeight = 1045;

    var signatureBox = document.querySelector(".Skin .SignatureBox.Border.Large");

    signatureBox.style.setProperty("width", boxWidth + "px", "important");
    signatureBox.style.setProperty("height", boxHeight + "px", "important");

    canvas.width = boxWidth;
    canvas.height = boxHeight;

    context.lineCap = "round";
    context.lineJoin = "round";

    context.strokeStyle = '#ff0000';
    context.fillStyle = '#ff0000';
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
        };
    }

    function draw(e) {
        if (!drawing) return;
        
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

    jQuery("#"+this.questionId+"-SignatureBox").css({
        "background":"url('https://github.com/oliphant0803/AnalogyVis/blob/main/analogyCharts/heatmap/heatmap.png?raw=true')",
        "background-size": "100% 100%",
        "background-repeat": "no-repeat",
        "background-position": "center center",
        "z-order":"1"
    });

    jQuery("#"+this.questionId+"-SignLine").css({"display":"none"});
    jQuery("#"+this.questionId+"-X").css({"display":"none"});
    jQuery("#"+this.questionId+"-ClearSignature").css({"background-color": "white"});
    jQuery("#"+this.questionId+"-Signature").css({
        "opacity": "1",
        "z-order":"2"
    });

    let colorPickerCanvas = document.createElement('canvas');
    colorPickerCanvas.width = 970;
    colorPickerCanvas.height = 30;
    colorPickerCanvas.style.cursor = 'pointer';

    let colorPickerCtx = colorPickerCanvas.getContext('2d');

    let gradient = colorPickerCtx.createLinearGradient(0, 0, colorPickerCanvas.width, 0);

        let viridisColors = [
        { stop: 1.0, color: '#f23133' },
        { stop: 0.9, color: '#c62e2e' },
        { stop: 0.8, color: '#c44e4a' },
        { stop: 0.7, color: '#c96767' },
        { stop: 0.6, color: '#c86f72' },
        { stop: 0.5, color: '#d69491' },
        { stop: 0.4, color: '#c7a9ab' },
        { stop: 0.3, color: '#dfc4c4' },
        { stop: 0.2, color: '#b6c4cd' },
        { stop: 0.1, color: '#90d0eb' },
        { stop: 0.0, color: '#3092be' }
    ];


    viridisColors.forEach(function(colorStop) {
        gradient.addColorStop(colorStop.stop, colorStop.color);
    });

    colorPickerCtx.fillStyle = gradient;
    colorPickerCtx.fillRect(0, 0, colorPickerCanvas.width, colorPickerCanvas.height);

    function selectColor(e) {
        let rect = colorPickerCanvas.getBoundingClientRect();
        let x, y;

        if (e.type === 'click') {
            x = e.clientX - rect.left;
            y = e.clientY - rect.top;
        } else if (e.type.startsWith('touch')) {
            e.preventDefault();
            let touch = e.touches[0];
            x = touch.clientX - rect.left;
            y = touch.clientY - rect.top;
        }

        let pixelData = colorPickerCtx.getImageData(x, y, 1, 1).data;
        let color = 'rgb(' + pixelData[0] + ',' + pixelData[1] + ',' + pixelData[2] + ')';

        context.strokeStyle = color;
        context.fillStyle = color;
    }

    let colorPickerContainer = document.createElement('div');
    colorPickerContainer.id = 'color-picker-container';

    colorPickerCanvas.addEventListener('click', selectColor);
    colorPickerCanvas.addEventListener('touchstart', selectColor, { passive: false });

    let colorPickerTitle = document.createElement('h3');
    colorPickerTitle.textContent = 'Color Picker';

    let scaleContainer = document.createElement('div');
    scaleContainer.style.display = 'flex';
    scaleContainer.style.justifyContent = 'space-between';
    scaleContainer.style.width = colorPickerCanvas.width + 'px';

    scaleContainer.innerHTML = ''; // Clear existing scale labels
    let customRangeStart = -24;
    let customRangeEnd = 60;
    let increment = 6;

    let labels = [];
    for (let i = customRangeStart; i <= customRangeEnd; i += increment) {
        labels.push(i);
    }

    labels.forEach(label => {
        let scaleLabel = document.createElement('div');
        scaleLabel.textContent = label.toString();
        scaleLabel.style.flex = '1';
        scaleLabel.style.textAlign = 'center';
        scaleContainer.appendChild(scaleLabel);
    });

    colorPickerContainer.appendChild(colorPickerTitle);
    colorPickerContainer.appendChild(scaleContainer);
    colorPickerContainer.appendChild(colorPickerCanvas);

    signatureBox.parentNode.insertBefore(colorPickerContainer, signatureBox);
});

Qualtrics.SurveyEngine.addOnReady(function() {
    // Your code here for when the page is ready
});

Qualtrics.SurveyEngine.addOnUnload(function() {
    // Your code here to run when the page is unloaded
});