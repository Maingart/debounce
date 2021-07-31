const onChange = debounce((e) => { console.log(e.target.value) }, 200);
document.getElementById('search').addEventListener('keyup', onChange)
