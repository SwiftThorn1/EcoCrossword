function checkAnswer() {
    for(var answerbox of document.querySelectorAll("input")){
        if(answerbox.value.length!==0){
            var answer = "'" + answerbox.value + "'";
            for (let node of document.querySelectorAll("td")) {
                if (node.className.indexOf(answer) >= 0) {
                  node.style = "color:#404337";
                  answerbox.value = "";
                }
              }
        }

    }
}
