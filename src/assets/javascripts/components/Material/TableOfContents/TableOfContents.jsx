const render = (el) => {
  const ref = (typeof el === "string")
    ? document.querySelector(el)
    : el
  if (!(ref instanceof HTMLElement))
    return

  const headers   = document.getElementsByTagName("h2");
  if (headers.length == 0) {
    return;
  }

  ref.appendChild(<label class="md-nav__title" for="__toc">Table of contents</label>)
  const list = <ul class="md-nav__list" data-md-scrollfix></ul>
  ref.appendChild(list)
  for (let i = 0; i < headers.length; i++) {
    const header = headers[i]
    const item = (
      <li class="md-nav__item">
        <a href={"#" + header.id} title={header.id} class="md-nav__link">
            {header.innerHTML}
        </a>
      </li>
    )
    list.appendChild(item)
  }
}

export default render
