const toLevel = (tagName) => {
  return tagName.replace(/\D/g,'');
}

const toItem = (el) => {
  return { el: el, level: toLevel(el.tagName), children: [] }
}

const toItems = (els) => {
  return [].reduce.call(els, (items, el) => items.concat(toItem(el)), [])
}

const nextWithLowerLevel = (item, items) => {
  items.reduce()
}

const toTOC = (items, idx = 0) => {
  let current = null
  let toc = []
  for (let i = idx; i < items.length; i++) {
    const next = items[i]
    if (current === null) {
      current = next
    } else if (current.level === next.level) {
      toc.push(current)
      current = next
    } else if (current.level > next.level) {
      toc.push(current)
      return toc
    } else if (current.level < next.level) {
      current.children = toTOC(items, i)
      i += current.children.length - 1
      toc.push(current)
      current = null
    }
  }
  if (current !== null) {
    toc.push(current)
  }
  return toc
}

const render = (el) => {
  const ref = (typeof el === "string")
    ? document.querySelector(el)
    : el
  if (!(ref instanceof HTMLElement))
    return

  const els   = document.querySelectorAll("h2, h3, h4, h5, h6");
  const items = toItems(els)
  const toc = toTOC(items)
  if (toc.length == 0) {
    return;
  }

  ref.appendChild(<label class="md-nav__title" for="__toc">Table of contents</label>)
  const list = <ul class="md-nav__list" data-md-scrollfix></ul>
  ref.appendChild(list)
  for (let i = 0; i < toc.length; i++) {
    const tocItem = toc[i]
    list.appendChild(TocItem(tocItem))
  }
}

const TocItem = (tocItem) => (
  <li class="md-nav__item">
    <a href={"#" + tocItem.el.id} title={tocItem.el.id} class="md-nav__link">
        {tocItem.el.innerHTML}
    </a>

    {tocItem.children.length > 0 && (
      <nav class="md-nav">
        <ul class="md-nav__list">
          {tocItem.children.map(child => TocItem(child))}
        </ul>
      </nav>
    )}
  </li>
)

export default render
