const messages = [
    "Sure kana jan boss??  ",
    "Oh dimo sureee??  ",
    "Final na yan?  ",
    "Nako ka boss ...  ",
    "Pag isipan mo ng mabuti yan boss ",
    "Lumbay sayo boss   ",
    "Malungkot na nga ang tao ngaa... ",
    "Look oh im sad na :(  ",
    "Ahh ayaw mo talaga ha ",
    "Just kidding, say yes please! ❤️ "
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    
    // Set the message text
    noButton.textContent = messages[messageIndex];
    
    // Create an img tag to display the GIF
    const gif = document.createElement('img');
    gif.src = 'https://media1.tenor.com/m/te8Hwtha-EoAAAAd/shrek-rizz-shrek-meme.gif';
    gif.alt = 'https://media.tenor.com/JGF5p6FthDIAAAAj/newjeans.gif';  // Optional alt text for accessibility
    gif.style.width = '40px';  // Adjust the size of the GIF
    gif.style.height = 'auto';
    
    // Append the GIF next to the text on the noButton
    noButton.appendChild(gif);
    
    messageIndex = (messageIndex + 1) % messages.length;

    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
