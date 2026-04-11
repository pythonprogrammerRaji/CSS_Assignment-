var brightnessClick = false;

function brightnessHandler(){
    const brightnessInput = document.getElementById('brightness');
    brightnessClick = !brightnessClick;
    if(brightnessClick){
        brightnessInput.style.display = "block"
    }
    else{
        brightnessInput.style.display = "none"

    }
}

var contrastClick = false;

function contrastHandler(){
    const contrastInput = document.getElementById('contrast');
    contrastClick = !contrastClick;
    if(contrastClick){
        contrastInput.style.display = "block";
    }
    else{
        contrastInput.style.display = "none";

    }
}

var saturationClick = false;

function saturationHandler(){
    const saturationInput = document.getElementById('saturation');
    saturationClick = !saturationClick;
    if(saturationClick){
        saturationInput.style.display = "block"
    }
    else{
        saturationInput.style.display = "none"

    }
}

var blurClick = false;

function blurHandler(){
    const blurInput = document.getElementById('blur');
    blurClick = !blurClick;
    if(blurClick){
        blurInput.style.display = "block"
    }
    else{
        blurInput.style.display = "none"

    }
}

var hueClick = false;

function hueHandler(){
    const hueInput = document.getElementById('hue');
    hueClick = !hueClick;
    if(hueClick){
       hueInput.style.display = "block"
    }
    else{
        hueInput.style.display = "none"

    }
}

var shadowClick = false;

function shadowHandler(){
    const shadowInput = document.getElementById('shadow');
    shadowClick = !shadowClick;
    if(shadowClick){
       shadowInput.style.display = "block"
    }
    else{
        shadowInput.style.display = "none"
    }
}

var expClick = false;

function expHandler(){
    const expInput = document.getElementById('explore');
    expClick = !expClick;
    if(expClick){
       expInput.style.display = "block"
    }
    else{
        expInput.style.display = "none"

    }
}

//Septs for edition.

document.addEventListener("DomContentLoaded", ()=>{

    // Sept1: get all html elements using its id file reference

    const fileInput = document.getElementById("file");
    const download = document.getElementById("download");
    const canvas = document.getElementById("canvas");
    const brightness = document.getElementById('brightness');
    const contrast = document.getElementById('contrast');
    const saturation = document.getElementById('saturation');
    const hue = document.getElementById('hue');
    const shadow = document.getElementById('shadow');
    const explore = document.getElementById('explore');
    const blur = document.getElementById('blur');
    const ctx = canvas.getContext("2d");

    // let img;

    // fileInput.addEventListener("change", getImage);

    // brightness.addEventListener('input', applyEffect)
    // contrast.addEventListener('input', applyEffect )
    // saturation.addEventListener('input', applyEffect)
    // hue.addEventListener('input', applyEffect);

    // download.addEventListener('click', downloadImage);



    let img;

    fileInput.addEventListener('change', getImage);

    brightness.addEventListener('input', applyEffects);
    contrast.addEventListener('input', applyEffects);
    saturation.addEventListener('input', applyEffects);
    hue.addEventListener('input', applyEffects);
    download.addEventListener('click', downloadImage);

       //step3: for select the files
       function getImage(e){
        const file = e.target.files[0]; //[image0, image1, image...]
        const reader = new FileReader(); //reading selected file
        reader.onload = function (event){
            img = new Image(); //creating image tag
            img.onload = function (){
                canvas.width = img.width; // declaring image width for canvas
                canvas.height = img.height; //declaring image height for canvas
                ctx.drawImage(img, 0, 0);
            };
            img.src = event.target.result;
        };
        reader.readAsDataURL(file); //read the selected files dataURL
    }

    function applyEffects (){
        if(!img) return

        const brightnessValue = brightness.value;
        const contrastValue = contrast.value;
        const saturationValue = saturation.value;
        var hueValue = hue.value;
        ctx.filter =`brightness(${brightnessValue}%) contrast(${contrastValue}%) saturation(${saturationValue}%) hue-rotate(${hueValue}deg)`;
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    }

    function downloadImage(){
        if(!img) return;
        var imagename = prompt("enter image name")
    
        const imageURL = canvas.toDataURL('image/png')
    
        const link = document.createElement('a');
        link.href= imageURL; //<a href="jhsghgshgs"></a>
        link.download = imagename + ".png";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    
     }
    })




    //  // Step3: for select the files   
    // function getImage(e){
    //     const file = e.target.files[0];  //image0, image1, image2
    //     const reader = new FileReader();  //reading selected file
    //     reader.onload = function(event){
    //         img = new Image();  //creating image tag
    //         img.onload = function(){
    //             canvas.width = img.width;     // declaring image width for canvas
    //             canvas.height = img.height;   // declaring image height for canvas
    //             ctx.drawImage(img, 0, 0);
    //         }
    //         img.src = event.target.result;

    //         reader.readAsDataURL(file);  //read selected files dataUrl
    //     }

    // }

    // function applyEffects(){
    // if(!img) return

    // const brightnessValue = brightness.value;
    // const contrastValue = contrast.value;
    // const saturationValue = saturation.value;
    // const hueValue = hue.value;
    // ctx.filter = `brightness(${brightnessValue}%) contrast(${contrastValue}%) saturation(${saturationValue}%) hue-rotated(${hueValue}deg)`;
    // ctx.drawImage(img, 0, 0, canvas.width, canvas.height);


    // }

//     function downloadImage(){
//         if(!img) return;

//         const imageName = prompt("enter image name")
//         const imageURL = canvas.toDataURL('image/png');
        
//         const link = document.createElement("a");       //<a herf="jjgkjgs"></a>
//         link.href = imageURL;
//         link.download= imageName + "png";
//         document.body.appendChild(link);
//         link.click();
//         document.body.removeChild(link);

//     }

// })

