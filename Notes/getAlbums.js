const albumsInfo = document.querySelectorAll(".hyHkMMynp3uUsmEtOkSN")
const songsInfo = document.querySelectorAll('.koyeY6AgGRPmyPITi7yO + .JUa6JJNj7R_Y3i4P8YUX')

function getArtistData() {

    const discography = []
    const songs = []

    songsInfo.forEach((albumContainer, index) => {

        const songsContainer = albumContainer.querySelectorAll(`[data-testid="tracklist-row"]`)

        songsContainer.forEach(row => {
            const songName = row.querySelector('.t_yrXoUO3qGsJS4Y6iXX')
            const songsDuration = row.querySelector('.Btg2qHSuepFGBG6X0yEN')

            if (!songs[index]) {
                songs[index] = []
            }
            songs[index].push({
                name: songName.textContent,
                duration: songsDuration.textContent

            })
        })
    })

    albumsInfo.forEach((albumInfo, index) => {

        const albumName = albumInfo.querySelector('a')
        const albumYear = albumInfo.querySelector('.Fb61sprjhh75aOITDnsJ span:nth-child(2)')
        const albumNumberOfSongs = albumInfo.querySelector('.Fb61sprjhh75aOITDnsJ span:nth-child(3)')
        const stringToNumber = parseInt((albumNumberOfSongs.textContent).trim().split(" ")[0])

        discography.push({

            name: albumName.textContent,
            year: parseInt(albumYear.textContent),
            numberOfSongs: stringToNumber,
            songs: songs[index]

        })
    })
    
    return discography
}