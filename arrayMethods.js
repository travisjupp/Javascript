
// testing moving tracks
const paylistTracks = [{name: 't1', id: 't1'}, {name: 't2', id: 't2'}, {name: 't3', id: 't3'}];

function moveTrack(trackToMove, arr, direction) {
    
    let origTrackPosition = arr.findIndex(track => track.id === trackToMove.id);
    arr.splice(origTrackPosition, 1); // remove track
    let newTrackPosition;
    direction === 'up' ?
    newTrackPosition = origTrackPosition - 1
    : newTrackPosition = origTrackPosition + 1;
    
    if (newTrackPosition < 0 || newTrackPosition > arr.length) {
        console.log('Ran outta playlist! Resetting array...');
        arr.splice(origTrackPosition, 0, trackToMove); // reinsert track
        arr.sort((a, b) => a.id[1] - b.id[1]); // sort track
        return;
    }

    arr.splice(newTrackPosition, 0, trackToMove); // move track
    console.log(JSON.stringify(arr));
}

moveTrack({name: 't3', id: 't3'},paylistTracks, 'up');
moveTrack({name: 't3', id: 't3'},paylistTracks, 'up');
moveTrack({name: 't3', id: 't3'},paylistTracks, 'up');
// moveTrack({name: 't3', id: 't3'},tracks, 'down');



