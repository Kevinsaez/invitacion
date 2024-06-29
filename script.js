const colors = ["#808836", "#FFBF00", "#FF9A00", "#FAEF5D"];
// const colors = ["#fff2", "#fff4", "#fff7", "#fffc"];
const generateSpaceLayer = (size, selector, totalStars, duration) => {

    const layer = [];


    for (let i = 0; i < totalStars; i++) {

        const color = colors[Math.floor(Math.random() * colors.length)];
        const x = Math.floor(Math.random() * 100);
        const y = Math.floor(Math.random() * 100);
        layer.push(`${x}vw ${y}vh 0 ${color} ,  ${x}vw ${y + 100}vh 0 ${color} `);

    }

    const container = document.querySelector(selector);
    container.style.setProperty("--space-layer", layer.join(","));
    container.style.setProperty("--size", size);
    container.style.setProperty("--duration", duration);

}

generateSpaceLayer("2px", ".space-1", 200, "25s");
generateSpaceLayer("3px", ".space-2", 100, "20s");
generateSpaceLayer("6px", ".space-3", 25, "15s");