document.addEventListener("DOMContentLoaded", () => {
    // Task 01
    const paragraph = document.querySelector("p");
    paragraph.innerHTML = paragraph.innerHTML.split(' ').map(word => {
        return word.length > 8 ? `<span style="background-color: yellow">${word}</span>` : word;
    }).join(' ');

    // Task 02
    const link = document.createElement("a");
    link.href = "https://forcemipsum.com/";
    link.textContent = "Source of the text";
    paragraph.insertAdjacentElement('afterend', link);

    // Task 03
    paragraph.innerHTML = paragraph.innerHTML.split('. ').join('.<br>');

    // Task 04
    const wordCount = paragraph.textContent.split(' ').length;
    const heading = document.querySelector("h1");
    const wordCountElement = document.createElement("p");
    wordCountElement.textContent = `Word count: ${wordCount}`;
    heading.insertAdjacentElement('afterend', wordCountElement);

    // Task 05
    paragraph.innerHTML = paragraph.innerHTML.replace(/\?/g, '🤔').replace(/!/g, '😲');
});