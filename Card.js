
class Card {
	constructor(question, correctAnswer) {
		this.isCorrect = false;
		this.question = question;
		this.correctAnswer = correctAnswer;
	}

	check(userAnswer) {
		if(userAnswer === this.correctAnswer) {
			this.isCorrect = true;
			return true;
		}
		return false;
	}
}

module.exports = Card;
