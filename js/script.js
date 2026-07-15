const typingElement = document.getElementById("typing");

if (typingElement) {

    const roles = [
        "Aspiring Software Developer",
        "IT Student",
        "Future AI Professional",
        "Problem Solver"
    ];

    let roleIndex = 0;
    let charIndex = 0;

    function type() {

        if (charIndex < roles[roleIndex].length) {

            typingElement.textContent += roles[roleIndex].charAt(charIndex);
            charIndex++;

            setTimeout(type, 100);

        } else {

            setTimeout(erase, 1500);

        }
    }

    function erase() {

        if (typingElement.textContent.length > 0) {

            typingElement.textContent =
                typingElement.textContent.slice(0, -1);

            setTimeout(erase, 50);

        } else {

            roleIndex = (roleIndex + 1) % roles.length;
            charIndex = 0;

            setTimeout(type, 300);

        }
    }

    typingElement.textContent = "";
    type();
}
