const loading = document.getElementById("loading"),
    loadingCircles = document.querySelectorAll(".loading-circle");

function toggleDisplay(e, t, o) {
    let n = document.getElementById(e),
        r = document.getElementById(t),
        l = document.getElementById(o),
        i = document.getElementById("blurElements");
    l.querySelector(".previous"), l.querySelector(".next"), n.addEventListener("click", function() {
        n.style.display = "none", l.style.display = "block", gsap.to(l, {
            duration: 1,
            x: "134.5%",
            y: "0%",
            onComplete: function() {
                i.classList.add("blur"), r.style.display = "block"
            }
        })
    });
    var a = document.querySelector(".descripcion1"),
        s = document.querySelector(".titulo1"),
        u = document.querySelectorAll(".subtitulo1"),
        c = document.querySelectorAll(".info"),
        d = document.querySelector(".social-icon"),
        y = document.querySelector(".footer1"),
        $ = document.querySelector(".music-container");
    a.addEventListener("mouseenter", function() {
        gsap.to(a, {
            duration: 1,
            scale: 1.2,
            backgroundColor: "black",
            borderRadius: "20px",
            delay: .5
        })
    }), a.addEventListener("mouseleave", function() {
        gsap.to(a, {
            duration: 1,
            scale: 1,
            backgroundColor: "transparent",
            borderRadius: "0",
            delay: .5
        })
    }), n.addEventListener("click", function() {
        gsap.from([s, u, c, d, y, $], {
            duration: 0,
            opacity: 0,
            y: -25,
            ease: "bounce",
            stagger: .5
        })
    });
    var p = document.querySelectorAll(".subtitulo2"),
        _ = null;
    let q = document.querySelectorAll(".menu-desplegable2 li");
    for (var m = 0; m < p.length; m++) {
        p[m].addEventListener("click", function() {
            var e = this.nextElementSibling;
            e.querySelector("ul");
            var t = e.querySelectorAll("li");
            _ && _ !== e && (gsap.to(_, {
                duration: .5,
                height: 0,
                display: "none"
            }), gsap.to(t, {
                duration: .5,
                opacity: 0,
                y: -20
            })), "block" === e.style.display ? (_ = null, gsap.to(e, {
                duration: .5,
                height: 0,
                display: "none",
                onComplete: function() {
                    e.style.display = "none"
                }
            }), gsap.to(t, {
                duration: .5,
                opacity: 0,
                y: -20
            })) : (_ = e, gsap.to(e, {
                duration: .5,
                height: "auto",
                display: "block",
                ease: "bounce"
            }), gsap.to(t, {
                duration: .5,
                opacity: 1,
                y: 0,
                stagger: .1
            }))
        });
        for (let g = 0; g < q.length; g++) q[g].addEventListener("mouseenter", function() {
            gsap.to(q, {
                duration: 0,
                scale: 1.1,
                ease: "power1.out"
            })
        }), q[g].addEventListener("mouseleave", function() {
            gsap.to(q, {
                duration: 0,
                scale: 1,
                ease: "power1.out"
            })
        });
        p[m].addEventListener("mouseenter", function() {
            gsap.to(this, {
                duration: .5,
                scale: 1.1,
                textShadow: "0 0 5px #FFF, 0 0 10px #FFF, 0 0 15px #FFF, 0 0 20px #CE5937, 0 0 30px #CE5937, 0 0 40px #CE5937, 0 0 55px #CE5937, 0 0 75px #CE5937, 2px 2px 2px rgba(206,89,55,0)"
            })
        }), p[m].addEventListener("mouseleave", function() {
            gsap.to(this, {
                duration: .5,
                scale: 1,
                textShadow: "none"
            })
        })
    }
    var S = document.querySelector(".music-button"),
        b = document.querySelector("#audio");
    S.addEventListener("click", function() {
        S.style.display = "none", b.style.display = "block", v.style.display = "block"
    });
    var v = document.querySelector("#close-button"),
        b = document.querySelector("#audio");
    v.addEventListener("click", function() {
        S.style.display = "block", b.style.display = "none", v.style.display = "none"
    }), r.addEventListener("click", function() {
        r.style.display = "none", n.style.display = "block", gsap.to(l, {
            duration: .5,
            x: "-134.5%",
            y: "0%"
        }), i.classList.remove("blur")
    })
}
gsap.from(loadingCircles, {
    duration: 1,
    opacity: 0,
    scale: .5,
    ease: "bounce",
    stagger: .2,
    repeat: -1,
    yoyo: !0
}), setTimeout(function() {
    gsap.to(loading, {
        duration: .5,
        opacity: 0,
        onComplete: function() {
            loading.style.display = "none"
        }
    })
}, 5e3), toggleDisplay("openBtn", "closeBtn", "square"), toggleDisplay("openBtn2", "closeBtn2", "square2"), toggleDisplay("openBtn3", "closeBtn3", "square3");
const carousel = document.querySelector("#carousel-img"),
    squares = carousel.querySelectorAll(".square-item"),
    previousButton = carousel.querySelector(".previous"),
    nextButton = carousel.querySelector(".next");
let currentIndex = 0;

function showSquare(e) {
    squares.forEach((e, t) => {
        e.style.display = "none"
    }), squares[e].style.display = "block"
}
previousButton.addEventListener("click", () => {
    --currentIndex < 0 && (currentIndex = squares.length - 1), showSquare(currentIndex)
}), nextButton.addEventListener("click", () => {
    ++currentIndex >= squares.length && (currentIndex = 0), showSquare(currentIndex)
}), showSquare(currentIndex);
const title1 = document.querySelector(".title1"),
    subtitle1 = document.querySelector(".subtitle1"),
    code1 = document.querySelector(".code"),
    iframe1 = document.querySelector(".iframe1"),
    description1 = document.querySelector(".description1");
gsap.to(title1, {
    duration: 1,
    y: -50,
    opacity: 1
}), gsap.to(subtitle1, {
    duration: 1,
    y: 50,
    opacity: 1
}), gsap.to(code1, {
    duration: 1,
    x: -50,
    opacity: 1
}), gsap.to(iframe1, {
    duration: 1,
    x: 50,
    opacity: 1
}), gsap.to(description1, {
    duration: 1,
    y: -50,
    opacity: 1
});
const nombre = document.querySelector(".nombre"),
    animation = gsap.from(nombre, {
        duration: 3,
        opacity: 0,
        scale: .5,
        ease: "bounce"
    });


const imgs = document.querySelectorAll('#img');

function ampliarImagen(img) {
    gsap.to(img, {
        scale: 1.05,
        duration: 0.5
    });
}

function reducirImagen(img) {
    gsap.to(img, {
        scale: 1,
        duration: 0.5
    });
}

imgs.forEach(img => {
    img.addEventListener('mouseover', () => ampliarImagen(img));
    img.addEventListener('mouseout', () => reducirImagen(img));
});



nombre.addEventListener("mouseenter", () => {
    animation.reverse(1)
}), nombre.addEventListener("mouseleave", () => {
    animation.play()
}), document.cookie = "mi_cookie=123; SameSite=None; Secure";