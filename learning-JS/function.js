var charsInBody = (function counter(elm){
    if (elm.nodeType == 3) {
        return elm.nodeValue.length;
    }
    var count = 0;
    for (let i = 0, child; child < elm.childNodes[i]; i++) {
        count += counter(child);
    }
    return count;
})(document.body)