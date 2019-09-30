let playerObj;
let resultObj = {};
let flag = true;

function getPlayer(player){
    playerObj = player;
}

function collectInfo(question, answer, index){
    playerObj.play();
    resultObj = {
        ...resultObj,
        [index]: {
            question: question,
            answer: answer
        }
    };

    setInterval(() => {
        if(playerObj.currentTime() === playerObj.duration() && flag)
            showResult();
    }, 1000)
}

function showResult(){
    let outputResult = '';
    flag = false;
        let data = document.getElementById('result-data');
        Object.keys(resultObj).map((each, index) => {
            console.log(each, '<<<<<<<each', resultObj, '<<<<<<<<<<<<resultObj');
            outputResult += `<h1>${index + 1}. ${resultObj[each].question}</h1><br/><h3>• ${resultObj[each].answer}</h3><br/>`;
            console.log(outputResult, '<<<<<<<<<<<outputResult')
        });

        data.innerHTML = outputResult;
}
