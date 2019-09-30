export function AnnotationPlugin(options) {
    let flag = 0;

    const {player, obj, filterData} = options;
    let arr = [];

    console.log(arr, '<<<<<arr')
    player.overlay({
        overlays: filterData
    });

    console.log(options, '<<<<<<<<PLAYER');

    let x = setInterval(() => {
        let currentTime = player.currentTime();
        showAnnotation(currentTime)
    }, 900);


    const showAnnotation = (time) => {
        obj.forEach((each, index) => {
            if (each.time == filterTime(time) && flag != filterTime(time)) {
                flag = filterTime(time);
                console.log('<<<<<<<<<<annotation>>>>>>>>>>');
                player.pause();
            }
        })
    }

}

function filterTime(time) {
    let filterTime = String(time).split('.')[0];
    return filterTime;
}
