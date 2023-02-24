const loadQuote = () => {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => displayQuote(data))
        .catch(err => console.log(err))
}

// async await দিয়ে করতে হবে।
const loadQuote2 = async () => {
    try {
        const res = await fetch('https://api.kanye.rest/');
        const data = await res.json();
        displayQuote(data);
    } catch (error) {
        console.log(error);
    }
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