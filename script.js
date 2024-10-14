const body = document.body
const getElement = (id) => {
  return document.getElementById(id)
}
const range = (count) => {
  let ret = []
  let i = 0;
  for (i; i < count; i++) {
    ret.push(i)
  }
  return ret
}

body.style.display = 'none';
document.addEventListener('DOMContentLoaded', () => {
  window.setTimeout(() => {
    body.style.display = 'block'
  }, 500)
})