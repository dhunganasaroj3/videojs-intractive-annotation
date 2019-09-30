export function getVideoObject(playerId){
    return videojs(playerId, {
        autoplay: 'muted',
        controlBar: {
            playToggle: {
                replay: false,
                play: false,
                pause: false
            },
            volumePanel: {
                inline: false
            }
        }
    });
}
