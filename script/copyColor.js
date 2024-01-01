function copyCollent(text) {
    // カーソルの位置にコピー完了のメッセージを表示する
    const message = document.createElement('div');
    message.textContent = text + ' copied!';
    message.style.position = 'fixed';
    message.style.top = `${event.clientY}px`;
    message.style.left = `${event.clientX}px`;
    // もしカーソルの位置が端に近い場合はメッセージを表示する位置を変える
    if (event.clientX > window.innerWidth - 100) {
        message.style.left = `${event.clientX - 140}px`;
    }
    message.style.backgroundColor = "#" +text;
    // 反転した色を設定する
    const r = parseInt(text.substr(0, 2), 16);
    const g = parseInt(text.substr(2, 2), 16);
    const b = parseInt(text.substr(4, 2), 16);
    const y = 0.2126 * r + 0.7152 * g + 0.0722 * b;
    if (y > 160) {
        message.style.color = '#222222';
    } else {
        message.style.color = '#ffffff';
    }
    message.style.padding = '10px';
    message.style.paddingTop = '5px';
    message.style.borderRadius = '10px';
    message.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
    message.style.opacity = '1';
    document.body.appendChild(message);

    // 0.5秒後にメッセージを消す
    // フェードアウトの処理
    // 0.5秒かけて透明にする
    const fadeout = () => {
        message.style.opacity -= 0.01;
        if (message.style.opacity > 0) {
            setTimeout(fadeout, 5);
        } else {
            document.body.removeChild(message);
        }
    }
    setTimeout(fadeout, 500);
}

// divタグをクリックしたときにdivの中身をコピーする
document.addEventListener('click', (e) => {
    if (e.target.tagName === 'DIV') {
        // 中身が空の場合は何もしない
        if (e.target.textContent === '') {
            return;
        }
        const text = e.target.textContent;
        navigator.clipboard.writeText(text);
        copyCollent(text);
    }
});