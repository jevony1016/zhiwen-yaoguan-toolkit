const mbti = require("../../data/mbti");
const sbti = require("../../data/sbti");
const { encodeAnswers } = require("../../utils/score");

const optionLabels = ["更像左边", "有点像左边", "都差不多", "有点像右边", "更像右边"];
const optionValues = [-2, -1, 0, 1, 2];

Page({
  data: {
    type: "mbti",
    title: "",
    intro: "",
    questions: [],
    answers: [],
    current: 0,
    currentQuestion: null,
    progress: 0,
    optionLabels,
    optionValues
  },

  onLoad(options) {
    const type = options.type === "sbti" ? "sbti" : "mbti";
    const questions = type === "sbti" ? sbti.questions : mbti.questions;
    const title = type === "sbti" ? "医药人 SBTI" : "16 型人格偏好";
    const intro = type === "sbti" ? "请按你在真实项目中的常见反应选择，不用追求标准答案。" : "请按你更自然、更常出现的偏好选择，不用选择理想中的自己。";

    wx.setNavigationBarTitle({ title });
    this.setData({
      type,
      title,
      intro,
      questions,
      answers: questions.map(() => null),
      currentQuestion: questions[0],
      progress: Math.round((1 / questions.length) * 100)
    });
  },

  selectOption(event) {
    const value = Number(event.currentTarget.dataset.value);
    const answers = this.data.answers.slice();
    answers[this.data.current] = value;
    this.setData({ answers });
  },

  prevQuestion() {
    if (this.data.current === 0) return;
    this.gotoQuestion(this.data.current - 1);
  },

  nextQuestion() {
    if (this.data.answers[this.data.current] === null) {
      wx.showToast({ title: "先选一个倾向", icon: "none" });
      return;
    }

    if (this.data.current >= this.data.questions.length - 1) {
      const encoded = encodeAnswers(this.data.answers);
      wx.redirectTo({
        url: `/packages/personality/pages/result/index?type=${this.data.type}&answers=${encoded}`
      });
      return;
    }

    this.gotoQuestion(this.data.current + 1);
  },

  gotoQuestion(index) {
    this.setData({
      current: index,
      currentQuestion: this.data.questions[index],
      progress: Math.round(((index + 1) / this.data.questions.length) * 100)
    });
  }
});
