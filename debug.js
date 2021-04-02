var lastTime = 0
var count = 0
function debug () {
  document.body.addEventListener('touchstart', (e) => {
    var touches = e.touches
    if (touches.length === 2) {
      const currentTime = new Date().getTime()
      if ((currentTime - lastTime) < 500) {
        count += 1
      }
      lastTime = new Date().getTime()
      if (count > 20 && window.vConsole) {
        removeScript()
      }
      if (count > 20) {
        count = 0
        loadVConsole()
      }
    }
  })
}
function loadVConsole () {
  var head = document.getElementsByTagName('head')[0]
  var script = document.createElement('script')
  script.src = 'https://d.2dfire.com/file/js/vconsole.3.3.0.js'
  script.addEventListener('load', function () {
    var script2 = document.createElement('script')
    script2.innerHTML = 'window.vConsole = new VConsole()'
    head.appendChild(script2)
  })
  head.appendChild(script)
}

function removeScript () {
  var scripts = document.getElementsByTagName('script')
  var __vconsole = document.getElementById('__vconsole')
  for (var i = 0; i < scripts.length; i++) {
    if (scripts[i] && scripts[i].getAttribute('src') != null && scripts[i].getAttribute('src').indexOf('vconsole.3.3.0.js') !== -1) {
      scripts[i].parentNode.removeChild(scripts[i])
      __vconsole.remove()
      delete window.vConsole
    }
  }
}

debug()
