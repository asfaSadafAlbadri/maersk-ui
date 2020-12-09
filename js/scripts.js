var shuffleOrSort = (function () {
    const number = [{ value: 1 }, { value: 2 }, { value: 3 }, { value: 4 }, { value: 5 }, { value: 6 }, { value: 7 }, { value: 8 }, { value: 9 }];
    function shuffle() {
        let length = number.length;
        let temp;
        let index;

        while (length > 0) {
            index = Math.floor(Math.random() * length);
            length--;
            temp = number[length];
            number[length] = number[index];
            number[index] = temp;
        }
        render(number);
    }
    function sort() {
        number.sort(function (x, y) {
            return x.value - y.value;
        });
        render(number);
    }
    function render(number) {
        var value = document.getElementsByClassName("value");
        for (var i = 0; i < number.length; i++) {
            value[i].innerHTML = number[i].value;
        }
    }
    return {
        shuffle, sort
    }
})();
function load() {
    shuffleOrSort.sort();
}
window.onload = load;
