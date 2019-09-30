export function addNewButton(data) {

    var myPlayer = data.player,
        controlBar,
        newElement = document.createElement('div'),
        newLink = document.createElement('a');

    newElement.id = data.id;
    newElement.className = 'downloadStyle vjs-control';

    newLink.innerHTML = "<i class='fa " + data.icon + " line-height' aria-hidden='true'></i>";
    newElement.appendChild(newLink);
    controlBar = document.getElementsByClassName('vjs-control-bar')[0];
    let insertBeforeNode = document.getElementsByClassName('vjs-fullscreen-control')[0];
    controlBar.insertBefore(newElement, insertBeforeNode);

    return newElement;

}
