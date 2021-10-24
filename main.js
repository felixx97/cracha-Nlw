const linksSocialMidia = {
  github: 'felixx97',
  youtube: 'UCRXoXCX92Dt3fHZ8-cCq6Gw',
  facebook: 'abrahaof',
  instagram: 'abrahammfelixx',
  twitter: 'abrahammfelixx'
}

function chanceSocialMidiaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${linksSocialMidia[social]}`

    //alert(li.children[0].href)
  }
}

chanceSocialMidiaLinks()

function getHubProfile() {
  const url = `https://api.github.com/users/${linksSocialMidia.github}`

  //quando o fetch pega o Json ele não sabe que é um json, ele guarda em um objeto.

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userPhoto.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getHubProfile()
