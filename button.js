
 var aboutDiv = document.getElementById('about');
 var codeDiv = document.getElementById('codesisältö');
 var designDiv = document.getElementById('designsisältö');
 var photoDiv = document.getElementById('photosisältö');

document.getElementById('codebutton').addEventListener('click', function() {

    // Näytä sisältö ja piilota sisältö
    codeDiv.style.display = 'block';
    aboutDiv.style.display = 'none';
    designDiv.style.display = 'none';
    photoDiv.style.display = 'none';
});
document.getElementById('designbutton').addEventListener('click', function() {

    // Näytä sisältö ja piilota sisältö
    aboutDiv.style.display = 'none';
    codeDiv.style.display = 'none';
    photoDiv.style.display = 'none';
    designDiv.style.display = 'block';
});
document.getElementById('photobutton').addEventListener('click', function() {

    // Näytä sisältö ja piilota sisältö
    aboutDiv.style.display = 'none';
    codeDiv.style.display = 'none';
    designDiv.style.display = 'none';
    photoDiv.style.display = 'block';
});
document.getElementById('backbutton').addEventListener('click', function() {
 
    codeDiv.style.display = 'none';
    designDiv.style.display = 'none';
    photoDiv.style.display = 'none';
    aboutDiv.style.display = 'block';
});