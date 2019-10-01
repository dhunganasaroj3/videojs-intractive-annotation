export function AnnotationPlugin(options) {
    let flag = 0;

    const {player, obj, filterData} = options;

    player.overlay({
        overlays: filterData
    });

    let x = setInterval(() => {
        let currentTime = player.currentTime();
        showAnnotation(currentTime)
    }, 900);


    const showAnnotation = (time) => {
        obj.forEach((each) => {
            if (each.time === filterTime(time) && flag !== filterTime(time)) {
                flag = filterTime(time);
                player.pause();
            }
        })
    }

}

function filterTime(time) {
    let filterTime = String(time).split('.')[0];
    return Number(filterTime);
}
