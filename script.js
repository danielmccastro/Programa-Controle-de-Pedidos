const frm = document.querySelector("form");
const resp = document.querySelector("pre");
const itens = [];

frm.radioPrato.addEventListener("click", () => {
    frm.inputBebida.className = "oculto";
    frm.inputPrato.className = "exibe";
});

frm.radioBebida.addEventListener("click", () => {
    frm.inputBebida.className = "exibe";
    frm.inputPrato.className = "oculto";
});

frm.inputDetalhes.addEventListener("focus", () => {
    if (frm.radioPrato.checked) {
        const prato = frm.iputPrato.value;
    }
});

frm.inputDetalhes.addEventListener("blur", () => {
    frm.inputDetalhes.placeholder = "";
});

frm.addEventListener("submit", (e) => {
    e.preventDefault();
    let produto;
    if (frm.radioPrato.checked) {
        const num = frm.inputPrato.selectedIndex;
        produto = frm.inputPrato.options[num].text;
    }
    else {
        const num = frm.inputBebida.selectedIndex;
        produto = frm.inputBebida.options[num].text;
    }
    const detalhes = frm.inputDetalhes.value;
    itens.push(produto + "(" + detalhes + ")");
    resp.innerText = itens.join("\n");

    frm.reset();
    frm.radioPrato.dispatchEvent(new Event("click")); F
})