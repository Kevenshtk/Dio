async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/Kevenshtk/Dio/refs/heads/main/formacoes/javaScript/portfolio/data/profile.json';
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}