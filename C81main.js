var component1 = document.getElementById("canvas1")
var draw = component1.getContext("2d")
draw.beginPath()
draw.strokeStyle ="red"
draw.lineWidth= 1
draw.rect(150,143,430,300)
draw.stroke();
draw.beginPath()
draw.strokeStyle ="blue"
draw.lineWidth= 3
draw.arc(300,253,50,0,360)
draw.stroke();
draw.beginPath()
draw.strokeStyle ="red"
draw.lineWidth= 3
draw.arc(450,253,50,0,360)
draw.stroke();
draw.beginPath()
draw.strokeStyle ="black"
draw.lineWidth= 3
draw.arc(375,253,50,0,360)
draw.stroke();
draw.beginPath()
draw.strokeStyle ="blue"
draw.lineWidth= 3
draw.arc(300,253,50,0,360)
draw.stroke();
draw.beginPath()
draw.strokeStyle ="green"
draw.lineWidth= 3
draw.arc(350,300,50,0,360)
draw.stroke();
draw.beginPath()
draw.strokeStyle ="yellow"
draw.lineWidth= 3
draw.arc(420,300,50,0,360)
draw.stroke();