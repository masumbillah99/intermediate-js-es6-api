const loadQuote = () => {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => displayQuote(data))
}

const displayQuote = (quotes) => {
    const blockQuote = document.getElementById('quote');
    // console.log(quotes);
    blockQuote.innerHTML = quotes.quote;
}

loadQuote();

/** API থেকে ডাটা লোড করতে গেলে ২/৩ টা জিনিস তোমাকে মজা দিবে। এগুলো হলোঃ
     * ডাটা তুমি কোনটারে দেখাইতে চাও
     * সেই ডাটা কোন চিপার মধ্যে আছে।
*/