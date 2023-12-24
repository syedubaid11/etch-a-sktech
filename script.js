const sketchpad = document.querySelector(".sketchpad");
const reset=document.querySelector("new-grid");


// Populate sketchpad with divs
function populateGrid(size) {
    for (let i = 0; i < size; i++) {
        const row = document.createElement("div");
        row.className = "row";
        sketchpad.appendChild(row);
        
        for (let i = 0; i < size; i++) {
            const pixel = document.createElement("div")
            pixel.className = "pixel"
            row.appendChild(pixel)
    
            // Colour change event
            pixel.addEventListener("mouseover", () => {
                pixel.style.backgroundColor = "black";
            })
        }
    }   
}


populateGrid(16);
