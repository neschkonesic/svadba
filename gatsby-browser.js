export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    `Стигле су нове вести-објаве. ` +
      `Желиш да видиш најновије вести са нашег свадбеног сајта ?`
  )

  if (answer === true) {
    window.location.reload()
  }
}
