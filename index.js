import { addNewButton } from './custom_control_button.js';
import { AnnotationPlugin } from './annotation_plugin.js';
import { getVideoObject } from './getVideoObject.js';
import obj from './mockData.js';

let filterData = [];
let player = getVideoObject('videojs-overlay-player');

getPlayer(player);
videojs.plugin('AnnotationPlugin', AnnotationPlugin);

obj.map((each, index) => {
    filterData.push({
        start: each.time,
        content: handleContent(each, index),
        end: each.time + 1,
        align: 'top'
    })
});

function handleContent(each, index){
    return `
<h1>${each.message}</h1>
<br/><button class="button__style__green" onclick="collectInfo('${each.message}', '${each.firstAnswer}', ${index})">${each.firstAnswer}</button>
<button class="button__style__red" onClick="collectInfo('${each.message}', '${each.secondAnswer}', ${index})">${each.secondAnswer}</button>`;
}

player.AnnotationPlugin({
   player,
    obj,
    filterData
});

var btna = addNewButton({
    player: player,
    icon: "fa-download",
    id: "downloadButton"
});

btna.onclick = function() {
    alert("download");
};


