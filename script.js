var a = {};
//{ Defining substitution variables
a.subA = "A";
a.subB = "B";
a.subC = "C";
a.subD = "D";
a.subE = "E";
a.subF = "F";
a.subG = "G";
a.subH = "H";
a.subI = "I";
a.subJ = "J";
a.subK = "K";
a.subL = "L";
a.subM = "M";
a.subN = "N";
a.subO = "O";
a.subP = "P";
a.subQ = "Q";
a.subR = "R";
a.subS = "S";
a.subT = "T";
a.subU = "U";
a.subV = "V";
a.subW = "W";
a.subX = "X";
a.subY = "Y";
a.subZ = "Z";
//}

$(document).ready(function () {
	'use strict';
	var i = 0;
	a.output = "";
	a.colors = "";
	a.coloredOutput = "";
	//{ Click to lock functions
	$("#lockA").click(function () {
		$("#subA").prop("disabled", function(i, v) {return !v;});
	});
	$("#lockB").click(function () {
		$("#subB").prop("disabled", function(i, v) {return !v;});
	});
	$("#lockC").click(function () {
		$("#subC").prop("disabled", function(i, v) {return !v;});
	});
	$("#lockD").click(function () {
		$("#subD").prop("disabled", function(i, v) {return !v;});
	});
	$("#lockE").click(function () {
		$("#subE").prop("disabled", function(i, v) {return !v;});
	});
	$("#lockF").click(function () {
		$("#subF").prop("disabled", function(i, v) {return !v;});
	});
	$("#lockG").click(function () {
		$("#subG").prop("disabled", function(i, v) {return !v;});
	});
	$("#lockH").click(function () {
		$("#subH").prop("disabled", function(i, v) {return !v;});
	});
	$("#lockI").click(function () {
		$("#subI").prop("disabled", function(i, v) {return !v;});
	});
	$("#lockJ").click(function () {
		$("#subJ").prop("disabled", function(i, v) {return !v;});
	});
	$("#lockK").click(function () {
		$("#subK").prop("disabled", function(i, v) {return !v;});
	});
	$("#lockL").click(function () {
		$("#subL").prop("disabled", function(i, v) {return !v;});
	});
	$("#lockM").click(function () {
		$("#subM").prop("disabled", function(i, v) {return !v;});
	});
	$("#lockN").click(function () {
		$("#subN").prop("disabled", function(i, v) {return !v;});
	});
	$("#lockO").click(function () {
		$("#subO").prop("disabled", function(i, v) {return !v;});
	});
	$("#lockP").click(function () {
		$("#subP").prop("disabled", function(i, v) {return !v;});
	});
	$("#lockQ").click(function () {
		$("#subQ").prop("disabled", function(i, v) {return !v;});
	});
	$("#lockR").click(function () {
		$("#subR").prop("disabled", function(i, v) {return !v;});
	});
	$("#lockS").click(function () {
		$("#subS").prop("disabled", function(i, v) {return !v;});
	});
	$("#lockT").click(function () {
		$("#subT").prop("disabled", function(i, v) {return !v;});
	});
	$("#lockU").click(function () {
		$("#subU").prop("disabled", function(i, v) {return !v;});
	});
	$("#lockV").click(function () {
		$("#subV").prop("disabled", function(i, v) {return !v;});
	});
	$("#lockW").click(function () {
		$("#subW").prop("disabled", function(i, v) {return !v;});
	});
	$("#lockX").click(function () {
		$("#subX").prop("disabled", function(i, v) {return !v;});
	});
	$("#lockY").click(function () {
		$("#subY").prop("disabled", function(i, v) {return !v;});
	});
	$("#lockZ").click(function () {
		$("#subZ").prop("disabled", function(i, v) {return !v;});
	});
	//}
	
	a.translate = function () {
		a.output = "";
		a.colors = "";
		a.coloredOutput = "";
		a.input = $("#cipherText").val().toUpperCase();
		a.input = a.input.split("");
		//{ Storing inputs in variables
		a.subA = $("#subA").val();
		a.subB = $("#subB").val();
		a.subC = $("#subC").val();
		a.subD = $("#subD").val();
		a.subE = $("#subE").val();
		a.subF = $("#subF").val();
		a.subG = $("#subG").val();
		a.subH = $("#subH").val();
		a.subI = $("#subI").val();
		a.subJ = $("#subJ").val();
		a.subK = $("#subK").val();
		a.subL = $("#subL").val();
		a.subM = $("#subM").val();
		a.subN = $("#subN").val();
		a.subO = $("#subO").val();
		a.subP = $("#subP").val();
		a.subQ = $("#subQ").val();
		a.subR = $("#subR").val();
		a.subS = $("#subS").val();
		a.subT = $("#subT").val();
		a.subU = $("#subU").val();
		a.subV = $("#subV").val();
		a.subW = $("#subW").val();
		a.subX = $("#subX").val();
		a.subY = $("#subY").val();
		a.subZ = $("#subZ").val();
		//}
		console.log(a.input);
		for (i=0; i<a.input.length; i+=1) {
			switch(a.input[i]) {
				//{ Cases to substitute letters
				case "A":
					if (a.subA === "") {
						a.output += "A";
						a.colors += "b";
					} else {
						a.output += a.subA;
						a.colors += "r";
					}
					break;
				case "B":
					if (a.subB === "") {
						a.output += "B";
						a.colors += "b";
					} else {
						a.output += a.subB;
						a.colors += "r";
					}
					break;
				case "C":
					if (a.subC === "") {
						a.output += "C";
						a.colors += "b";
					} else {
						a.output += a.subC;
						a.colors += "r";
					}
					break;
				case "D":
					if (a.subD === "") {
						a.output += "D";
						a.colors += "b";
					} else {
						a.output += a.subD;
						a.colors += "r";
					}
					break;
				case "E":
					if (a.subE === "") {
						a.output += "E";
						a.colors += "b";
					} else {
						a.output += a.subE;
						a.colors += "r";
					}
					break;
				case "F":
					if (a.subF === "") {
						a.output += "F";
						a.colors += "b";
					} else {
						a.output += a.subF;
						a.colors += "r";
					}
					break;
				case "G":
					if (a.subG === "") {
						a.output += "G";
						a.colors += "b";
					} else {
						a.output += a.subG;
						a.colors += "r";
					}
					break;
				case "H":
					if (a.subH === "") {
						a.output += "H";
						a.colors += "b";
					} else {
						a.output += a.subH;
						a.colors += "r";
					}
					break;
				case "I":
					if (a.subI === "") {
						a.output += "I";
						a.colors += "b";
					} else {
						a.output += a.subI;
						a.colors += "r";
					}
					break;
				case "J":
					if (a.subJ === "") {
						a.output += "J";
						a.colors += "b";
					} else {
						a.output += a.subJ;
						a.colors += "r";
					}
					break;
				case "K":
					if (a.subK === "") {
						a.output += "K";
						a.colors += "b";
					} else {
						a.output += a.subK;
						a.colors += "r";
					}
					break;
				case "L":
					if (a.subL === "") {
						a.output += "L";
						a.colors += "b";
					} else {
						a.output += a.subL;
						a.colors += "r";
					}
					break;
				case "M":
					if (a.subM === "") {
						a.output += "M";
						a.colors += "b";
					} else {
						a.output += a.subM;
						a.colors += "r";
					}
					break;
				case "N":
					if (a.subN === "") {
						a.output += "N";
						a.colors += "b";
					} else {
						a.output += a.subN;
						a.colors += "r";
					}
					break;
				case "O":
					if (a.subO === "") {
						a.output += "O";
						a.colors += "b";
					} else {
						a.output += a.subO;
						a.colors += "r";
					}
					break;
				case "P":
					if (a.subP === "") {
						a.output += "P";
						a.colors += "b";
					} else {
						a.output += a.subP;
						a.colors += "r";
					}
					break;
				case "Q":
					if (a.subQ === "") {
						a.output += "Q";
						a.colors += "b";
					} else {
						a.output += a.subQ;
						a.colors += "r";
					}
					break;
				case "R":
					if (a.subR === "") {
						a.output += "R";
						a.colors += "b";
					} else {
						a.output += a.subR;
						a.colors += "r";
					}
					break;
				case "S":
					if (a.subS === "") {
						a.output += "S";
						a.colors += "b";
					} else {
						a.output += a.subS;
						a.colors += "r";
					}
					break;
				case "T":
					if (a.subT === "") {
						a.output += "T";
						a.colors += "b";
					} else {
						a.output += a.subT;
						a.colors += "r";
					}
					break;
				case "U":
					if (a.subU === "") {
						a.output += "U";
						a.colors += "b";
					} else {
						a.output += a.subU;
						a.colors += "r";
					}
					break;
				case "V":
					if (a.subV === "") {
						a.output += "V";
						a.colors += "b";
					} else {
						a.output += a.subV;
						a.colors += "r";
					}
					break;
				case "W":
					if (a.subW === "") {
						a.output += "W";
						a.colors += "b";
					} else {
						a.output += a.subW;
						a.colors += "r";
					}
					break;
				case "X":
					if (a.subX === "") {
						a.output += "X";
						a.colors += "b";
					} else {
						a.output += a.subX;
						a.colors += "r";
					}
					break;
				case "Y":
					if (a.subY === "") {
						a.output += "Y";
						a.colors += "b";
					} else {
						a.output += a.subY;
						a.colors += "r";
					}
					break;
				case "Z":
					if (a.subZ === "") {
						a.output += "Z";
						a.colors += "b";
					} else {
						a.output += a.subZ;
						a.colors += "r";
					}
					break;
				case " ":
					a.output += " ";
					a.colors += "r";
					break;
				//}
			}
		}
		console.log(a.output);
		console.log(a.colors);
		for (i=0; i<a.output.length; i+=1) {
			if (a.colors[i] === "b") {
				a.coloredOutput += "<span class=\"blue\">" + a.output[i] + "</span>";
			} else if (a.colors[i] === "r") {
				a.coloredOutput += "<span class=\"red\">" + a.output[i] + "</span>";
			}
		}
		$("#plainText").html(a.coloredOutput);
	};
	
	$("#translateButton").click(a.translate);
	
	console.log("Script loaded!");
});

//DOI KVCYWUF WUYRFQ OPQI CIADUFQPXUC AVFACIDI ZXVVAYL OUL ZIIF KUFDRFQ DV ORCI U LXUZ ULLRLDUFD