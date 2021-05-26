var ME="empty";
var lpx,lpy;
canvas=document.getElementById("mc");
ctx=canvas.getContext("2d");
colour="black";

ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.lineWidth = 10;
ctx.arc(215,200,80,0,2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "yellow";
ctx.lineWidth = 10;
ctx.arc(305,290,80,0,2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 10;
ctx.arc(395,200,80,0,2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "green";
ctx.lineWidth = 10;
ctx.arc(485,290,80,0,2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = 10;
ctx.arc(575,200,80,0,2 * Math.PI);
ctx.stroke();