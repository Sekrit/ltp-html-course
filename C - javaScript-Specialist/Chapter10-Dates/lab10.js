window.onload = function() {
                document.getElementById('checkDay').addEventListener('click', runIsWeekend)
            }

            function runIsWeekend() {
                var dateToCheck = document.getElementById('inputDay').value;
                isWeekend(dateToCheck);
            }

            function isWeekend(userDate) {
                var d = new Date(userDate);
                if (d.getDay() == 6 || d.getDay() == 0) {
                    return alert('IS WEEKEND')
                }
                alert('IS NOT WEEKNED')
            }