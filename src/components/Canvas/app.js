const drawApp = (context, x, y) => {   
    context.fillStyle = 'lightblue';
    //context.fillRect(0, 0, context.canvas.width, context.canvas.height);
    context.lineWidth = 1;

    const width = 120
    context.strokeRect(x-(width/2), y-(width/2), width, width);

}

export default drawApp;