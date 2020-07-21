$('#originaltxt').on('keyup', function(e) {
    var tulutxtdiv = document.getElementById("tulutxt");
    tulutxtdiv.innerHTML = convertWithEscape($(this).val(), '#');
    if (tulutxtdiv.scrollHeight > 300) {
        tulutxtdiv.style.height = tulutxtdiv.scrollHeight + 'px';
    }
});

$('#download').on('click', function(e) {
    domtoimage.toPng(document.querySelector('.tulutxtcontainer'), {
    //domtoimage.toPng(document.getElementById('tulutxt'), {
            quality: 1.0
    }).then(function (dataUrl) {
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

$('#fillColor').on('change', function(e) {
    console.log('cc');
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
  