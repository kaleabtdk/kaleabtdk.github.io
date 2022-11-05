const testimg = document.querySelector("img");

testimg.onclick = () => {
    const testimgsrc = testimg.getAttribute("src");

    if (testimgsrc === "images/test.jpg") {
        testimg.setAttribute("src", "images/test1.jpg");
    } else {
        testimg.setAttribute("src", "images/test.jpg");
    }
};
