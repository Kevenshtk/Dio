
function updateProfileInfo(profileData) {
    const photo = document.getElementById('profile.photo')
    photo.src = profileData.photo
    photo.alt = profileData.name

    const name = document.getElementById('profile.name')
    name.innerText = profileData.name

    const job = document.getElementById('profile.job')
    job.innerText = profileData.job

    const location = document.getElementById('profile.location')
    location.innerText = profileData.location

    const phone = document.getElementById('profile.phone')
    phone.innerText = profileData.phone
    phone.href = `tel:${profileData.phone}`

    const email = document.getElementById('profile.email')
    email.innerText = profileData.email
    email.href = `mailto:${profileData.email}`
}

function updateSoftSkills(profileData) {
    const softSkills = document.getElementById('profile.skills.softSkills')
    softSkills.innerHTML = profileData.skills.softSkills.map(skill => `<li>${skill}</li>`).join('')
}

function updateHardSkills(profileData) {
    const hardSkills = document.getElementById('profile.skills.hardSkills')
    hardSkills.innerHTML = profileData.skills.hardSkills.map(skill => `<li><i class="fa-brands ${skill.logo}"></i></li>`).join('')
}

function updateEducacao(profileData) {
    const educacao = document.getElementById('profile.educacao')
    educacao.innerHTML = profileData.educacao.map(educacao => 
        `<li>
            <p>${educacao.curso} - ${educacao.instituicao}</p>
            <small>${educacao.status}</small>
        </li>`).join('')
}

function updateProjetos(profileData) {
    const projeto = document.getElementById('profile.projetos')
    projeto.innerHTML = profileData.projetos.map(project => {
        return `
            <li>
                <img src="${project.imagem}" alt="${project.name}">
                <p>${project.name}</p>
                <div class="links">
                    <a href="${project.urls.map(url => url.repositorio)}" target="_blank" rel="next"><i class="fa-brands fa-github"></i></a>
                    <a href="${project.urls.map(url => url.deploy)}" target="_blank" rel="next"><i class="fa-solid fa-globe"></i></a>
                </div>
            </li>
        `
        
    }).join('')
}

(async () => {
    const profileData = await fetchProfileData()
    updateProfileInfo(profileData)
    updateSoftSkills(profileData)
    updateHardSkills(profileData)
    updateEducacao(profileData)
    updateProjetos(profileData)
})()
