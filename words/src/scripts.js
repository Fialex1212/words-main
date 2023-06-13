const symbol = document.querySelectorAll(".symbol")

let lst_colors = ["red", "green", "blue", "yellow", "pink", "aqua", "purple", "orange", "violet", "magenta", "indigo", "teal", "lime green", "sky blue", "navy blue", "silver", "gold", "gray", "khaki", "salmon", "crimson", "lavender", "plum", "Navy", "Teal", "Aqua", "Lime", "Olive", "Maroon", "Fuchsia", "Goldenrod", "Brown", "Sienna", "SaddleBrown", "Peru", "DarkGoldenRod"]

symbol.forEach((event) => {
    event.addEventListener('mouseover', () => {
        let randomColor = lst_colors[Math.floor(Math.random()*lst_colors.length)];
        event.style.color = randomColor
        setTimeout(function(){
            event.style.color = "white"
        }, 1500)
    })

})



