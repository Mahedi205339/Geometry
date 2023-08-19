function calculateTriangleArea() {
    //get triangle base value
    const baseFeild = document.getElementById('triangle-base')
    const baseFeildString = baseFeild.value;
    const base = parseFloat(baseFeildString)
    console.log(base);

    //get the heigth value 
    const heightField = document.getElementById('triangle-height');
    const heightValueText = heightField.value;
    const height = parseFloat(heightValueText);
    console.log(height)

    const area = 0.5 * base * height;
    console.log(area)
    //show triangle area 
    const areaSpan = document.getElementById('triangle-area');
    areaSpan.innerText = area ;
}
// calculate rectangle area 

function calculateRectangleArea(){
    const widthField = document.getElementById('rectangle-width')
    const widthValueText =widthField.value ;
    const width = parseFloat(widthValueText);
    console.log(width)

    const lengthFeild = document.getElementById('rectangle-length');
    const lengthValueText = lengthFeild.value ;
    const length = parseFloat(lengthValueText) ;
    console.log(length)
    // rectangle area 
    const area = width * length ;
    console.log(area)
    const rectangleAreaSpan = document.getElementById('rectangle-area');
    rectangleAreaSpan.innerText = area ;

}
// reusable function 
function calculateParallelogramArea(){
    const base =getInputValue('parallelogram-base')
    console.log(base)

    const height = getInputValue('parallelogram-height')
    console.log(height)

    const area = base * height ;
    console.log(area)
    const parallelogramAreaSpan = document.getElementById('parallelogram-area');
    parallelogramAreaSpan.innerText = area ;


}

function getInputValue(feildId){
    const inputFeild = document.getElementById(feildId);
    const inputVlueText = inputFeild.value ;
    const value = parseFloat(inputVlueText);
    return value ;
}