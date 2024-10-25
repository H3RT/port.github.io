
document.addEventListener("DOMContentLoaded", () => {
    const portfolio = document.querySelector('.portfolio');

    portfolio.style.display = 'none';
    
    setTimeout(() => {
        portfolio.style.display = 'block'; 
        document.querySelector('.landing-page').style.display = 'none'; 
    }, 5000); 
});

document.addEventListener("DOMContentLoaded", function() {

    document.getElementById("button").addEventListener("click", function () {

      var a = document.createElement("a");

      a.href = "./CV.pdf";

      a.download = "CV.pdf";

      a.click();

    });

  });