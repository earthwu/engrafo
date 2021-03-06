import tippy from "tippy.js";

export default function render(el) {
  const refs = el.querySelectorAll(".ltx_cite .ltx_ref");
  for (let ref of refs) {
    const href = ref.getAttribute("href");
    if (!href) {
      continue;
    }
    // This could just be dom.querySelector(href) but that doesn't work if
    // there are periods in the ID. Sigh.
    const bibItem = el.querySelector(`*[id='${href.slice(1)}']`);
    if (!bibItem) {
      continue;
    }
    ref.setAttribute("title", bibItem.innerHTML);
  }

  tippy(refs, {
    arrow: true,
    animateFill: false,
    animation: "fade",
    delay: [0, 250],
    duration: [0, 300],
    interactive: true,
    interactiveBorder: 5,
    placement: "top-start",
    size: "large",
    theme: "engrafo"
  });
}
