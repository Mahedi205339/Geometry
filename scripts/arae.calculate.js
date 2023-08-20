function calculateTriangleArea() {
    //get triangle base value

    const base = getInputValue('triangle-base')

    //get the heigth value 
    const height = getInputValue('triangle-height');
    const area = 0.5 * base * height ;
    //show triangle area 
    setElementInnerText('triangle-area',area)

    addToCalculationEntry('Triangle',area)
}
// calculate rectangle area 

function calculateRectangleArea(){
    const widthField = document.getElementById('rectangle-width')
    const widthValueText =widthField.value ;
    const width = parseFloat(widthValueText);

    const lengthFeild = document.getElementById('rectangle-length');
    const lengthValueText = lengthFeild.value ;
    const length = parseFloat(lengthValueText) ;
    // rectangle area 
    const area = width * length ;
    const rectangleAreaSpan = document.getElementById('rectangle-area');
    rectangleAreaSpan.innerText = area ;
    addToCalculationEntry('Rectangle',area)

}

function calculateParallelogramArea(){
    const base =getInputValue('parallelogram-base')
    const height = getInputValue('parallelogram-height')
     
    const area = base * height ;
     setElementInnerText('parallelogram-area',area);
     //add to calculation entry 
     addToCalculationEntry('Parallelogram',area)

}
function calculateEllipseArea(){
    const majorRadius =getInputValue('ellipse-r1')
    const minorRadius =getInputValue('ellipse-r2')
    const area = 3.1416 * majorRadius* minorRadius ;
    setElementInnerText('ellipse-area',area)
    addToCalculationEntry('Ellipse',area)

}

// reusable function 
function getInputValue(feildId){
    const inputFeild = document.getElementById(feildId);
    const inputVlueText = inputFeild.value ;
    const value = parseFloat(inputVlueText);
    return value ;

}
// reusable span function
function setElementInnerText(elementId, area){
    const element = document.getElementById(elementId)
    element.innerText = area ;
}

// add to calculation entry 
function addToCalculationEntry(areaType , area){
     console.log(areaType+ ' ' + area)
    const calculationEntry =document.getElementById('calculation-entry')
    const p = document.createElement('p');
    const count =calculationEntry.childElementCount ;
    p.classList.add('my-4')
    p.innerHTML =`${count +1} ${areaType} : ${area} cm<sup>2</sup> <button class="btn btn-success btn-sm">Convert</button>` ;
    calculationEntry.appendChild(p)
}
 