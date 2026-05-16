const { scoreMbti, scoreSbti, decodeAnswers } = require("../../utils/score");

Page({
  data: {
    type: "mbti",
    result: null,
    shareImage: "",
    cardReady: false
  },

  onLoad(options) {
    const type = options.type === "sbti" ? "sbti" : "mbti";
    const answers = decodeAnswers(options.answers || "");
    const result = prepareResult(type === "sbti" ? scoreSbti(answers) : scoreMbti(answers));

    wx.setNavigationBarTitle({ title: result.name });
    this.setData({ type, result });
  },

  retest() {
    wx.redirectTo({
      url: `/packages/personality/pages/test/index?type=${this.data.type}`
    });
  },

  switchTest() {
    const nextType = this.data.type === "sbti" ? "mbti" : "sbti";
    wx.redirectTo({
      url: `/packages/personality/pages/test/index?type=${nextType}`
    });
  },

  backHome() {
    wx.redirectTo({
      url: "/packages/personality/pages/home/index"
    });
  },

  generateShareImage() {
    this.drawShareCard(() => {
      wx.showToast({ title: "分享图已生成", icon: "success" });
    });
  },

  previewShareImage() {
    if (!this.data.shareImage) {
      this.drawShareCard(() => this.previewShareImage());
      return;
    }
    wx.previewImage({
      urls: [this.data.shareImage],
      current: this.data.shareImage
    });
  },

  saveShareImage() {
    if (!this.data.shareImage) {
      this.drawShareCard(() => this.saveShareImage());
      return;
    }
    wx.saveImageToPhotosAlbum({
      filePath: this.data.shareImage,
      success: () => wx.showToast({ title: "已保存", icon: "success" }),
      fail: () => wx.showToast({ title: "保存失败，请检查相册权限", icon: "none" })
    });
  },

  drawShareCard(done) {
    const result = this.data.result;
    const ctx = wx.createCanvasContext("shareCanvas", this);
    const width = 750;
    const height = 1040;
    const accent = this.data.type === "sbti" ? "#34c759" : "#5856d6";

    ctx.setFillStyle("#f2f2f7");
    ctx.fillRect(0, 0, width, height);
    ctx.setFillStyle("#ffffff");
    roundRect(ctx, 46, 46, 658, 948, 36);
    ctx.fill();

    ctx.setFillStyle(accent);
    roundRect(ctx, 86, 88, 112, 112, 30);
    ctx.fill();
    ctx.setFillStyle("#ffffff");
    ctx.setFontSize(32);
    ctx.setTextAlign("center");
    ctx.setTextBaseline("middle");
    ctx.fillText("ZW", 142, 144);

    ctx.setTextAlign("left");
    ctx.setTextBaseline("normal");
    ctx.setFillStyle("#8e8e93");
    ctx.setFontSize(26);
    ctx.fillText(result.title, 224, 126);
    ctx.setFillStyle("#1c1c1e");
    ctx.setFontSize(40);
    ctx.fillText(result.type, 224, 178);

    ctx.setFillStyle("#1c1c1e");
    ctx.setFontSize(54);
    wrapText(ctx, result.name, 86, 282, 590, 64, 2);

    ctx.setFillStyle("#636366");
    ctx.setFontSize(30);
    wrapText(ctx, result.summary, 86, 408, 580, 42, 3);

    const keywords = result.keywords || [];
    keywords.forEach((word, index) => {
      const x = 86 + index * 184;
      ctx.setFillStyle(index === 0 ? accent : "#f2f2f7");
      roundRect(ctx, x, 538, 154, 54, 18);
      ctx.fill();
      ctx.setFillStyle(index === 0 ? "#ffffff" : "#1c1c1e");
      ctx.setFontSize(24);
      ctx.setTextAlign("center");
      ctx.setTextBaseline("middle");
      ctx.fillText(word, x + 77, 565);
    });

    ctx.setTextAlign("left");
    ctx.setTextBaseline("normal");
    ctx.setFillStyle("#1c1c1e");
    ctx.setFontSize(30);
    ctx.fillText("维度画像", 86, 660);

    result.dimensions.slice(0, 6).forEach((item, index) => {
      const y = 706 + index * 48;
      const label = item.label || `${item.left}/${item.right}`;
      const valueText = item.pole ? `${item.pole} ${item.percent}%` : `${item.percent}%`;
      ctx.setFillStyle("#636366");
      ctx.setFontSize(24);
      ctx.fillText(label, 86, y);
      ctx.setFillStyle("#e5e5ea");
      roundRect(ctx, 236, y - 22, 330, 18, 9);
      ctx.fill();
      ctx.setFillStyle(accent);
      roundRect(ctx, 236, y - 22, Math.max(24, 330 * item.percent / 100), 18, 9);
      ctx.fill();
      ctx.setFillStyle("#8e8e93");
      ctx.setFontSize(22);
      ctx.fillText(valueText, 586, y);
    });

    ctx.setFillStyle("#8e8e93");
    ctx.setFontSize(24);
    wrapText(ctx, "知闻药观小工具 · 本地测试 · 仅供学习娱乐和自我观察", 86, 946, 580, 34, 2);

    ctx.draw(false, () => {
      wx.canvasToTempFilePath({
        canvasId: "shareCanvas",
        width,
        height,
        destWidth: width,
        destHeight: height,
        success: (res) => {
          this.setData({ shareImage: res.tempFilePath, cardReady: true });
          if (done) done();
        },
        fail: () => wx.showToast({ title: "生成失败", icon: "none" })
      }, this);
    });
  },

  onShareAppMessage() {
    const result = this.data.result;
    return {
      title: `我的${result.title}结果：${result.name}`,
      path: "/packages/personality/pages/home/index"
    };
  }
});

function roundRect(ctx, x, y, width, height, radius) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
}

function wrapText(ctx, text, x, y, maxWidth, lineHeight, maxLines) {
  const chars = String(text || "").split("");
  let line = "";
  let lineCount = 0;

  for (let i = 0; i < chars.length; i += 1) {
    const testLine = line + chars[i];
    const metrics = ctx.measureText(testLine);
    if (metrics.width > maxWidth && i > 0) {
      lineCount += 1;
      if (lineCount >= maxLines) {
        ctx.fillText(`${line.slice(0, Math.max(0, line.length - 1))}…`, x, y);
        return;
      }
      ctx.fillText(line, x, y);
      line = chars[i];
      y += lineHeight;
    } else {
      line = testLine;
    }
  }
  ctx.fillText(line, x, y);
}

function prepareResult(result) {
  return {
    ...result,
    dimensions: result.dimensions.map((item) => ({
      ...item,
      displayLabel: item.label || `${item.left}/${item.right}`,
      displayValue: item.pole ? `${item.pole} ${item.percent}%` : `${item.percent}%`
    }))
  };
}
