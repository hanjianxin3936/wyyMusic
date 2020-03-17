
function GetCharLength(str) {
    var iLength = 0;
    for (var i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) > 255) {
            iLength += 2;
        }
        else {
            iLength += 1;
        }
    }
    return iLength;
} 
export {GetCharLength}