import gsap from "gsap";
import Image from "next/image";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

import Portrait from "../../../public/assets/portrait.svg";

const SvgPortrait = () => {
  const [center, setCenter] = useState(undefined);

  const centerRef = useRef(undefined);

  const mouse = useRef({
    x: 0,
    y: 0,
  });

  const savedMouse = useRef({
    x: 0,
    y: 0,
  });

  const dom = {
    face: document.querySelector(".head"),
    eye: document.querySelectorAll(".eye"),
    blink: document.querySelectorAll(".blinking-eyes"),
    nose: document.querySelector(".nose"),
    smile: document.querySelector(".smile"),
    facialHair: document.querySelector(".facial-hair"),
    hair: document.querySelector(".hair"),
    ear: document.querySelectorAll(".ear"),
    eyebrows: document.querySelector(".eyebrows"),
    glasses: document.querySelector(".glasses"),
  };

  // handle mouseMovement
  const updateScreenCoords = (event) => {
    mouse.current.x = event.clientX;
    mouse.current.y = event.clientY;
  };

  // animations
  const blink = gsap.timeline({
    repeat: -1,
    repeatDelay: 5,
    paused: true,
  });

  blink
    .to(
      ".right-eye, .left-eye",
      {
        duration: 0.02,
        opacity: 0,
      },
      0
    )
    .to(
      ".blinking-eyes",
      {
        duration: 0.02,
        opacity: 1,
      },
      0
    )
    .to(
      ".right-eye, .left-eye",
      {
        duration: 0.02,
        opacity: 1,
      },
      0.15
    )
    .to(
      ".blinking-eyes",
      {
        duration: 0.02,
        opacity: 0,
      },
      0.15
    );

  const animateFace = () => {
    // guard clause to animate only if mouse is moving
    if (!center) return;
    if (
      savedMouse.current.x === mouse.current.x &&
      savedMouse.current.y === mouse.current.y
    )
      return;

    gsap.to(dom.face, {
      yPercent: (mouse.current.y - centerRef.current.y) / 500,
      xPercent: (mouse.current.x - centerRef.current.x) / 600,
    });
    gsap.to(dom.eye, {
      yPercent: (mouse.current.y - centerRef.current.y) / 11,
      xPercent: (mouse.current.x - centerRef.current.x) / 11,
    });
    gsap.to(dom.blink, {
      yPercent: (mouse.current.y - centerRef.current.y) / 13,
      xPercent: (mouse.current.x - centerRef.current.x) / 45,
    });
    gsap.to(dom.eyebrows, {
      yPercent: (mouse.current.y - centerRef.current.y) / 5,
      xPercent: (mouse.current.x - centerRef.current.x) / 100,
    });
    gsap.to(dom.glasses, {
      yPercent: (mouse.current.y - centerRef.current.y) / 50,
      xPercent: (mouse.current.x - centerRef.current.x) / 95,
    });
    gsap.to(dom.facialHair, {
      yPercent: (mouse.current.y - centerRef.current.y) / 70,
      xPercent: (mouse.current.x - centerRef.current.x) / 50,
    });
    gsap.to(dom.smile, {
      yPercent: (mouse.current.y - centerRef.current.y) / 5,
      xPercent: (mouse.current.x - centerRef.current.x) / 40,
    });
    gsap.to(dom.nose, {
      yPercent: (mouse.current.y - centerRef.current.y) / 8,
      xPercent: (mouse.current.x - centerRef.current.x) / 18,
    });
    gsap.to(dom.hair, {
      yPercent: (mouse.current.y - centerRef.current.y) / -180,
      xPercent: (mouse.current.x - centerRef.current.x) / -800,
    });
    gsap.to(dom.ear, {
      yPercent: (mouse.current.y - centerRef.current.y) / -40,
      xPercent: (mouse.current.x - centerRef.current.x) / -120,
    });

    savedMouse.current.x = mouse.current.x;
    savedMouse.current.y = mouse.current.y;
  };

  // handle window resize
  const handleResize = () => {
    blink.pause(0);
    const svgPos = document.querySelector(".svg-me").getBoundingClientRect();
    centerRef.current = {
      x: svgPos.x + svgPos.width / 2,
      y: svgPos.y + svgPos.height / 2,
    };

    console.log(centerRef.current);
  };

  // get center of the svg
  useLayoutEffect(() => {
    if (!center) {
      const svgPos = document.querySelector(".svg-me").getBoundingClientRect();
      setCenter({
        x: svgPos.x + svgPos.width / 2,
        y: svgPos.y + svgPos.height / 2,
      });
      centerRef.current = {
        x: svgPos.x + svgPos.width / 2,
        y: svgPos.y + svgPos.height / 2,
      };
    }
  }, [center]);

  useEffect(() => {
    // add mouse and resize listeners
    window.addEventListener("mousemove", updateScreenCoords);
    window.addEventListener("resize", handleResize);

    // start animations
    if (centerRef.current) {
      gsap.ticker.add(animateFace);
      console.log("blinking");
      blink.play();
    }

    // remove listener
    return () => {
      window.removeEventListener("mousemove", updateScreenCoords);
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <svg
      className="svg-me min-h-[100%] max-w-[70vw] lg:max-w-[300px] mt-10 "
      width="396"
      height="460"
      viewBox="0 0 496 560"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="neck">
        <path
          d="M189.739 340.051H299.067L313.405 504.708C313.405 504.708 272.508 520.051 245.141 520.051C218.616 520.051 175.405 504.708 175.405 504.708L189.739 340.051Z"
          fill="#C7A593"
        />
        <path
          d="M189.739 340.051H299.067L309.336 457.974C252.872 493.126 241.059 485.482 180.299 448.493L189.739 340.051Z"
          fill="#B77F6E"
        />
      </g>
      <g className="hair">
        <path
          d="M132.588 295.203C122.886 287.396 111.03 218.08 108.254 185.59C105.477 153.1 104.596 107.457 118.608 93.6693C126.437 85.9642 133.169 81.8734 137.586 79.7635C130.67 81.7271 124.314 80.8528 118.608 75.9141C123.459 71.524 131.644 69.8873 137.78 72.9039C132.374 67.2312 130.064 61.1097 132.588 53.5035C138.863 56.8547 142.865 62.0204 143.561 69.4485C148.137 40.362 184.892 23.9416 247.722 24.2001C308.941 27.3598 378.408 72.1674 370.094 106C393.485 106 386.455 162.916 382.874 188.398C382.874 188.398 371.058 289.189 356.912 295.203C268.832 332.646 225.162 335.058 132.588 295.203Z"
          fill="#181818"
        />
      </g>
      <g className="right-ear ear">
        <path
          d="M399.387 299.621C394.397 316.481 381.62 326.684 370.848 322.411C360.077 318.138 355.39 301.006 360.38 284.146C365.371 267.286 378.148 257.083 388.919 261.357C399.691 265.63 404.378 282.762 399.387 299.621Z"
          fill="#C7A593"
        />
        <path
          d="M368.892 289.91C366.698 281.451 402.519 284.139 391.408 285.937C380.297 287.734 374.755 289.025 373.423 294.842C373.423 294.842 369.607 292.668 368.892 289.91Z"
          fill="#B77F6E"
        />
        <path
          d="M382.143 323.154C382.143 326.744 379.233 329.654 375.643 329.654C372.053 329.654 369.143 326.744 369.143 323.154C369.143 319.564 372.053 316.654 375.643 316.654C379.233 316.654 382.143 319.564 382.143 323.154Z"
          fill="#282828"
        />
      </g>
      <g className="left-ear ear">
        <path
          d="M94.207 299.392C99.1972 316.251 111.975 326.455 122.746 322.181C133.517 317.908 138.204 300.776 133.214 283.917C128.224 267.057 115.446 256.854 104.675 261.127C93.9034 265.4 89.2167 282.532 94.207 299.392Z"
          fill="#C7A593"
        />
        <path
          d="M124.703 289.681C126.896 281.222 91.0749 283.91 102.186 285.707C113.298 287.505 118.839 288.796 120.171 294.612C120.171 294.612 123.988 292.439 124.703 289.681Z"
          fill="#B77F6E"
        />
        <path
          d="M124.658 323.154C124.658 326.744 121.748 329.654 118.158 329.654C114.568 329.654 111.658 326.744 111.658 323.154C111.658 319.564 114.568 316.654 118.158 316.654C121.748 316.654 124.658 319.564 124.658 323.154Z"
          fill="#282828"
        />
      </g>
      <g className="head">
        <path
          d="M356.036 370.243C377.84 338.283 373.448 224.161 356.036 145.619C338.623 67.0775 163.613 66.7641 139.754 145.619C115.895 224.475 118.024 338.201 139.754 370.243C158.675 398.143 196.381 454.679 248.036 454.679C299.691 454.679 328.109 411.177 356.036 370.243Z"
          fill="#C7A593"
        />
      </g>
      <g className="glasses">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M247.895 234.984C255.334 234.84 265.777 236.099 265.777 236.099C265.777 236.099 267.211 235.948 268.227 234.984C268.227 234.984 277.356 224.174 285.236 221.061C293.29 216.937 328.835 211.334 351.37 223.162C352.604 224.007 354.047 225.219 355.571 226.499C359.076 229.445 363.008 232.748 365.799 232.748C365.799 232.748 370.688 232.997 373.337 232.997C373.69 232.997 374.167 233.511 374.167 233.511C374.167 233.511 375.813 238.225 375.294 239.471C374.947 240.307 368.701 243.125 368.701 243.125C367.299 243.965 366.891 245.718 366.729 247.297C367.192 273.09 361.944 285.578 342.926 301.462C318.722 318.05 288.383 314.711 269.458 278.997C265.429 268.173 264.967 265.785 264.726 251.876C264.889 250.079 265.088 249.144 265.777 247.704C265.846 247.308 265.929 246.929 266.007 246.574C266.282 245.325 266.496 244.355 265.777 243.846C263.168 242.2 257.222 241.724 247.895 241.724C238.568 241.724 232.623 242.2 230.013 243.846C229.294 244.355 229.508 245.325 229.783 246.574C229.862 246.929 229.945 247.307 230.013 247.704C230.703 249.144 230.902 250.079 231.065 251.876C230.824 265.785 230.361 268.173 226.333 278.997C207.407 314.711 177.069 318.05 152.864 301.462C133.847 285.578 128.599 273.09 129.062 247.297C128.9 245.718 128.491 243.965 127.089 243.125C127.089 243.125 120.844 240.307 120.496 239.471C119.978 238.225 121.623 233.511 121.623 233.511C121.623 233.511 122.101 232.997 122.453 232.997C125.103 232.997 129.991 232.748 129.991 232.748C132.783 232.748 136.714 229.445 140.22 226.499C141.743 225.219 143.186 224.007 144.42 223.162C166.956 211.334 202.501 216.937 210.555 221.061C218.434 224.174 227.564 234.984 227.564 234.984C228.579 235.948 230.013 236.099 230.013 236.099C230.013 236.099 240.456 234.84 247.895 234.984ZM222.551 241.128C218.18 233.869 213.02 230.026 202.579 226.122C190.802 222.645 171.243 221.059 153.671 227.22C147.267 229.971 144.405 232.232 140.299 237.251C129.599 249.546 137.928 281.999 154.987 293.65C173.38 309.267 194.505 307.315 210.566 291.857C219.84 281.62 224.185 274.53 225.676 254C225.849 249.238 224.955 246.049 222.551 241.128ZM273.24 241.128C277.61 233.869 282.77 230.026 293.211 226.122C304.988 222.645 324.548 221.059 342.119 227.22C348.523 229.971 351.385 232.232 355.491 237.251C366.191 249.546 357.862 281.999 340.804 293.65C322.41 309.267 301.285 307.315 285.225 291.857C275.951 281.62 271.606 274.53 270.115 254C269.942 249.238 270.836 246.049 273.24 241.128Z"
          fill="#282828"
        />
      </g>
      <g className="right-eye eye">
        <path
          d="M310.741 248.56C310.741 256.845 304.921 263.56 297.741 263.56C290.561 263.56 284.741 256.845 284.741 248.56C284.741 240.276 290.561 233.56 297.741 233.56C304.921 233.56 310.741 240.276 310.741 248.56Z"
          fill="black"
        />
      </g>
      <g className="left-eye eye">
        <path
          d="M211.049 248.56C211.049 256.845 205.229 263.56 198.049 263.56C190.87 263.56 185.049 256.845 185.049 248.56C185.049 240.276 190.87 233.56 198.049 233.56C205.229 233.56 211.049 240.276 211.049 248.56Z"
          fill="black"
        />
      </g>
      <g className="smile">
        <path
          d="M208.895 380.28C222.025 385.185 273.963 385.587 286.895 373.493"
          stroke="#A57363"
          strokeWidth="6"
          strokeLinecap="round"
        />
      </g>
      <g className="eyebrows">
        <path
          d="M281.924 209.775C279.752 201.307 280.747 197.703 287.908 194.06C336.477 196.04 343.857 202.554 345.905 216.06C326.413 206.964 310.123 208.345 281.924 209.775Z"
          fill="#493E3D"
        />
        <path
          d="M206.887 209.775C209.058 201.307 208.064 197.703 200.903 194.06C152.334 196.04 144.954 202.554 142.905 216.06C162.398 206.964 178.688 208.345 206.887 209.775Z"
          fill="#493E3D"
        />
      </g>
      <g className="facial-hair">
        <path
          d="M262.619 352.769C267.466 357.085 268.493 357.892 271.907 362.655M290.509 347.826C295.356 352.142 296.383 352.949 299.797 357.712M276.564 352.769C281.411 357.085 282.438 357.892 285.852 362.655M230.975 352.769C226.128 357.085 225.102 357.892 221.687 362.655M203.085 347.826C198.238 352.142 197.212 352.949 193.797 357.712M217.03 352.769C212.183 357.085 211.157 357.892 207.742 362.655M236.672 395.858C238.445 398.328 239.025 399.795 239.154 402.592M256.922 395.027C255.643 397.788 255.348 399.339 255.745 402.11M247.426 394.927C246.617 397.862 246.58 399.44 247.426 402.108M223.081 441.207C223.78 444.62 224.801 447.666 226.216 450.738M232.904 447.072C233.466 450.983 235.277 454.262 236.665 457.826M240.427 439.496C240.878 442.287 241.639 444.476 242.517 447.072M252.548 447.561C252.266 450.505 252.286 453.187 252.339 456.115M260.281 437.785C260.452 440.539 260.287 442.904 260.072 445.606M269.685 449.028C268.713 452.043 267.234 454.672 265.715 457.337M279.717 439.252C278.909 442.611 277.924 445.602 276.791 448.783"
          stroke="#493E3D"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </g>
      <g className="nose">
        <path
          d="M267.295 314.154C251.445 319.154 242.281 318.978 225.517 314.154C225.517 314.154 225.767 324.053 234.249 328.676C242.731 333.299 248.14 333.328 258.905 328.676C269.67 324.024 267.295 314.154 267.295 314.154Z"
          fill="#B77F6E"
        />
      </g>
      <g className="blinking-eyes">
        <path
          d="M285 250.5C291.5 257 303.5 257 310.5 250.5M210.5 251C204 257.5 192 257.5 185 251"
          stroke="black"
          strokeWidth="6"
          strokeLinecap="round"
        />
      </g>
      <g className="space-suit">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M91.2782 478.674C72.3885 483.887 60.9909 495.734 59.5812 520.051C59.5812 541.636 143.892 559.133 247.895 559.133C351.898 559.133 436.209 541.636 436.209 520.051C432.342 497.696 420.166 486.423 401.247 481.132C362.652 509.581 311.801 526.224 247.895 526.224C182.171 526.224 130.255 508.621 91.2782 478.674Z"
          fill="#A3B4C3"
        />
        <path
          d="M495.783 263.184C495.783 408.041 418.19 526.224 247.895 526.224C77.6 526.224 0.00775146 408.041 0.00775146 263.184C0.00775146 118.326 44.1131 0.896327 247.895 0.896301C451.677 0.896276 495.783 118.326 495.783 263.184Z"
          fill="#80E0FF"
          fillOpacity="0.2"
        />
        <path
          d="M494.283 263.184C494.283 335.363 474.951 400.742 434.559 448.052C394.198 495.325 332.668 524.724 247.895 524.724C163.123 524.724 101.592 495.325 61.2316 448.052C20.8398 400.742 1.50775 335.363 1.50775 263.184C1.50775 190.848 12.5332 125.694 48.7223 78.6329C84.8456 31.6568 146.295 2.39631 247.895 2.3963C349.495 2.39629 410.945 31.6568 447.068 78.6328C483.257 125.694 494.283 190.848 494.283 263.184Z"
          stroke="#80E0FF"
          strokeOpacity="0.35"
          strokeWidth="3"
        />
        <ellipse
          cx="425.772"
          cy="341.51"
          rx="20.727"
          ry="33.4543"
          transform="rotate(13.4036 425.772 341.51)"
          fill="#B5DEF4"
          fillOpacity="0.46"
        />
        <ellipse
          cx="405.367"
          cy="406.472"
          rx="10.3331"
          ry="10.9501"
          transform="rotate(13.4036 405.367 406.472)"
          fill="#B5DEF4"
          fillOpacity="0.46"
        />
        <path
          d="M233.066 16.7249C148.116 48.3843 61.7324 121.345 29.9962 286.193C29.9962 286.193 3.01587 172.164 35.0976 121.181C89.5772 34.6033 233.066 16.7249 233.066 16.7249Z"
          fill="#B5DEF4"
          fillOpacity="0.46"
        />
      </g>
    </svg>
  );
};

export default SvgPortrait;
