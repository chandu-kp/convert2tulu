$('#originalTxt').on('keyup', function(e) {
    var tuluTxtDiv = document.getElementById("tuluTxt");
    tuluTxtDiv.innerHTML = convertWithEscape($(this).val(), '#');
    if (tuluTxtDiv.scrollHeight > 300) {
        tuluTxtDiv.style.height = tuluTxtDiv.scrollHeight + 'px';
    }
});

$('#download').on('click', function(e) {
    let node = document.querySelector('.tuluTxtContainer');
    const scale = 1.5

    const style = {
        transform: 'scale(' + scale + ')',
        transformOrigin: 'top left',
        width: node.offsetWidth + 'px',
        height: node.offsetHeight + 'px'
    }

    const params = {
        height: node.offsetHeight * scale,
        width: node.offsetWidth * scale,
        quality: 1,
        style
    }
    
    domtoimage.toPng(node, params).then(function (dataUrl) {
        saveAs(dataUrl, 'intulu.png');
    });
});

$('#settings').on('click', function(e) {
    var instance = M.Collapsible.getInstance($('.collapsible'));
    if ($('.collapsible').hasClass('active') === true) {
        instance.close();
    } else {
        instance.open();
    }
    $('.collapsible').toggleClass('active');
});

$('#fontColor').on('input', function(e) {
    document.getElementById("tuluTxt").style.color = $(this).val();
});

$('#shadowColor').on('input', function(e) {
    document.getElementById("tuluTxt").style.textShadow = '3px 3px 3px ' + $(this).val();
});

$('#fontSize').on('input', function(e) {
    document.getElementById("tuluTxt").style.fontSize = $(this).val()+'px';
});

$('#fontWeight').on('input', function(e) {
    if ($(this).prop('checked') == true){
        document.getElementById("tuluTxt").style.fontWeight = 'bold';
    } else {
        document.getElementById("tuluTxt").style.fontWeight = 'normal';
    } 
});

$('#backgroundColor').on('input', function(e) {
    document.querySelector('.tuluTxtContainer').style.backgroundColor = $(this).val();
});

$("#fileInput").on('change', function(e) {
    var URL = window.webkitURL || window.URL;
    var url = URL.createObjectURL(e.target.files[0]);
    document.querySelector('.tuluTxtContainer').style.backgroundImage = "url(" + url + ")";
});

function saveAs(uri, filename) {
    var link = document.createElement('a');
    if (typeof link.download === 'string') {
        link.href = uri;
        link.download = filename;
        //Firefox requires the link to be in the body 
        document.body.appendChild(link);
        //simulate click 
        link.click();
        //remove the link when done 
        document.body.removeChild(link);
    } else {
        window.open(uri);
    }
}
  