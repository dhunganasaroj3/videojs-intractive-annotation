import { addNewButton } from './custom_control_button.js';
import { AnnotationPlugin } from './annotation_plugin.js';
import { getVideoObject } from './getVideoObject.js';

let filterData = [];
let player = getVideoObject('videojs-overlay-player');

getPlayer(player);
// this.player = player;
videojs.plugin('AnnotationPlugin', AnnotationPlugin);

let obj = [{
    time: 2,
    message: 'Do you think this will be helpful?',
    firstAnswer: 'yes',
    secondAnswer: 'no'
},{
    time: 4,
    message: 'Do you like video?',
    firstAnswer: 'yes',
    secondAnswer: 'no'
},{
    time: 6,
    message: 'Do you like chemistry or physic?',
    firstAnswer: 'chemistry',
    secondAnswer: 'physic'
}
];

function receiverEnd(message){
    console.log(message, 'Hello this is a message');
}

obj.map((each, index) => {
    filterData.push({
        content: `<h1>${each.message}</h1><br/><button class="button__style__green" onclick="collectInfo('${each.message}', '${each.firstAnswer}', ${index})">${each.firstAnswer}</button><button class="button__style__red" onClick="collectInfo('${each.message}', '${each.secondAnswer}', ${index})">${each.secondAnswer}</button>`,
        start: each.time,
        end: each.time + 1,
        align: 'top'
    })
});

player.AnnotationPlugin({
   player,
    obj,
    filterData
});

export function collectInfo(hello){
    console.log('>>>>>>>>>>>', hello);
}

var btna = addNewButton({
    player: player,
    icon: "fa-download",
    id: "downloadButton"
});

btna.onclick = function() {
    alert("download");
};


