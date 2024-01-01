const orders = ["R", "YR", "Y", "GY", "G", "BG", "B", "PB", "P", "RP"];
const num = ["2.5", "5", "7.5", "10"];
// ordersの順番に ./processing/html/orders[i]/num[n].htmlを読み込む
async function loadHtml() {
    for (let i = 0; i < orders.length; i++) {
        for (let n = 0; n < num.length; n++) {
            const response = await fetch(`./processing/html/${orders[i]}/${num[n]}.html`);
            const text = await response.text();
            document.querySelector("main").innerHTML += text;
        }
    }
}
loadHtml();
