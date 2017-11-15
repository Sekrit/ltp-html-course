window.onload = function() {
                var sentence = "hey this is me."

                function capWord(str) {
                    return str.charAt(0).toUpperCase() + str.slice(1);
                }
                alert(capWord(sentence))
            }
        