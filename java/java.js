var matriz1 = [];
matriz1.push([0, 0]);
matriz1.push([0, 0]);
console.table(matriz1);


var matriz2 = [];
matriz2.push([0, 0]);
matriz2.push([0, 0]);
console.table(matriz2);


document.write("<center><div class='container-a'><table>");
for (i = 0; i < matriz1.length; i++) {
    var linha = '<tr>';
    for (x = 0; x < matriz1[i].length; x++) {
        matriz1[i][x] = parseFloat(prompt("Digite seus numeros da primeira matriz:"));
        linha = linha + "<td>" + matriz1[i][x] + "</td>";
    }
    linha = linha + "</tr>"
    document.write(linha);
}
document.write("</center></div></table>");

document.write("<h3>+</h3>");

document.write("<div class='container-b' ><table>");
for (i = 0; i < matriz2.length; i++) {
    var linha = '<tr>';
    for (x = 0; x < matriz2[i].length; x++) {
        matriz2[i][x] = parseFloat(prompt("Digite seus numeros da segunda matriz:"));
        linha = linha + "<td>" + matriz2[i][x] + "</td>";
    }
    linha = linha + "</tr>"
    document.write(linha);
}
document.write("</div></table>");

document.write("<h3>=</h3>");


document.write("<div class='container-c'><table>");
for (i = 0; i < matriz2.length; i++) {
    var linha = '<tr>';
    for (x = 0; x < matriz2[i].length; x++) {
        var soma = matriz1[i][x] + matriz2[i][x];

        linha = linha + "<td>" + soma + "</td>";
    }
    linha = linha + "</tr>"
    document.write(linha);
}
document.write("</div></table>");