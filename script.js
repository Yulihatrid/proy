//function to export pdf DOC
function pdfexport(){
    //variables
    //labels
    var ltitle = document.getElementById('tlt').innerText,
        lname= document.getElementById('lbname').innerText,
        lage= document.getElementById('lbage').innerText,
        ldob= document.getElementById('lbdob').innerText,

    //input
    var inname= document.getElementById('inname').value,
        inage= document.getElementById('inage').value,
        indob= document.getElementById('indob').value,



    //jspdf part
    var doc = new jsPDF()
    //add info
    doc.setFontSize(22);
    doc.text(ltitle, 20, 20);
    doc.setFontSize(16);
    doc.text(lname + ' '+ inname, 10,20);
    doc.text(lage + ' '+ inage, 10,30);
    doc.text(ldob + ' ' + indob, 10,40);


}