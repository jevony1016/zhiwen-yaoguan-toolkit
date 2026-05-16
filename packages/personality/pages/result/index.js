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

  copyOfficialLink(event) {
    const url = event.currentTarget.dataset.url;
    wx.setClipboardData({
      data: url,
      success: () => wx.showToast({ title: "官网链接已复制", icon: "success" })
    });
  },

  drawShareCard(done) {
    const result = this.data.result;
    const ctx = wx.createCanvasContext("shareCanvas", this);
    const width = 750;
    const height = 1500;
    const accent = this.data.type === "sbti" ? "#34c759" : "#5856d6";
    const softAccent = this.data.type === "sbti" ? "#e8f8ee" : "#eeeeff";

    ctx.setFillStyle("#f2f2f7");
    ctx.fillRect(0, 0, width, height);

    ctx.setFillStyle(softAccent);
    ctx.beginPath();
    ctx.arc(620, 130, 120, 0, Math.PI * 2);
    ctx.fill();
    ctx.setFillStyle(this.data.type === "sbti" ? "#e7f2ff" : "#eaf8f0");
    ctx.beginPath();
    ctx.arc(116, 1340, 150, 0, Math.PI * 2);
    ctx.fill();

    ctx.setFillStyle("#ffffff");
    roundRect(ctx, 46, 46, 658, 1408, 36);
    ctx.fill();

    ctx.setFillStyle(accent);
    roundRect(ctx, 86, 88, 112, 112, 30);
    ctx.fill();
    drawShareMark(ctx, 86, 88, 112, accent);

    ctx.setTextAlign("left");
    ctx.setTextBaseline("normal");
    ctx.setFillStyle("#8e8e93");
    ctx.setFontSize(26);
    ctx.fillText(result.title, 224, 126);
    ctx.setFillStyle("#1c1c1e");
    ctx.setFontSize(40);
    ctx.fillText(result.type, 224, 178);

    ctx.setFillStyle("#1c1c1e");
    ctx.setFontSize(result.name.length >= 8 ? 46 : 54);
    const nameBottom = wrapText(ctx, result.name, 86, 282, 590, 60, 2);

    ctx.setFillStyle("#636366");
    ctx.setFontSize(30);
    const summaryY = Math.max(390, nameBottom + 36);
    const summaryBottom = wrapText(ctx, result.summary, 86, summaryY, 580, 42, 3);

    const keywords = result.keywords || [];
    keywords.forEach((word, index) => {
      const x = 86 + index * 182;
      const y = summaryBottom + 38;
      ctx.setFillStyle(index === 0 ? accent : "#f2f2f7");
      roundRect(ctx, x, y, 150, 54, 18);
      ctx.fill();
      ctx.setFillStyle(index === 0 ? "#ffffff" : "#1c1c1e");
      ctx.setFontSize(24);
      ctx.setTextAlign("center");
      ctx.setTextBaseline("middle");
      ctx.fillText(word, x + 75, y + 27);
    });

    ctx.setTextAlign("left");
    ctx.setTextBaseline("normal");
    ctx.setFillStyle("#1c1c1e");
    ctx.setFontSize(30);
    const dimensionTitleY = summaryBottom + 138;
    ctx.fillText("维度画像", 86, dimensionTitleY);

    result.dimensions.slice(0, 6).forEach((item, index) => {
      const y = dimensionTitleY + 54 + index * 58;
      const label = item.displayLabel || item.label || `${item.left}/${item.right}`;
      const valueText = item.displayValueShort || item.displayValue || (item.pole ? `${item.pole} ${item.percent}%` : `${item.percent}%`);
      ctx.setFillStyle("#636366");
      ctx.setFontSize(24);
      ctx.fillText(label, 86, y);
      ctx.setFillStyle("#e5e5ea");
      roundRect(ctx, 236, y - 21, 296, 18, 9);
      ctx.fill();
      ctx.setFillStyle(accent);
      roundRect(ctx, 236, y - 21, Math.max(22, 296 * item.percent / 100), 18, 9);
      ctx.fill();
      ctx.setFillStyle("#8e8e93");
      ctx.setFontSize(22);
      ctx.fillText(valueText, 554, y);
    });

    const firstSection = result.sections[0];
    const textStart = dimensionTitleY + 54 + Math.min(result.dimensions.length, 6) * 58 + 52;
    ctx.setFillStyle("#1c1c1e");
    ctx.setFontSize(30);
    ctx.fillText(firstSection.title, 86, textStart);
    ctx.setFillStyle("#636366");
    ctx.setFontSize(26);
    wrapText(ctx, firstSection.text, 86, textStart + 44, 580, 38, 4);

    ctx.setFillStyle("#8e8e93");
    ctx.setFontSize(22);
    wrapText(ctx, "知闻药观小工具 · 本地测试 · 仅供学习娱乐和自我观察", 86, 1392, 580, 32, 2);

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

function drawShareMark(ctx, x, y, size, accent) {
  ctx.setFillStyle(accent);
  roundRect(ctx, x, y, size, size, 30);
  ctx.fill();

  ctx.setFillStyle("rgba(255,255,255,0.18)");
  ctx.beginPath();
  ctx.arc(x + size - 16, y + 18, 34, 0, Math.PI * 2);
  ctx.fill();

  ctx.setStrokeStyle("rgba(255,255,255,0.72)");
  ctx.setLineWidth(5);
  ctx.setLineCap("round");
  ctx.beginPath();
  ctx.moveTo(x + 56, y + 38);
  ctx.lineTo(x + 36, y + 78);
  ctx.moveTo(x + 56, y + 38);
  ctx.lineTo(x + 82, y + 74);
  ctx.stroke();

  [
    [x + 56, y + 34],
    [x + 34, y + 80],
    [x + 84, y + 76]
  ].forEach((point) => {
    ctx.setFillStyle("#ffffff");
    ctx.beginPath();
    ctx.arc(point[0], point[1], 10, 0, Math.PI * 2);
    ctx.fill();
  });
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
        return y + lineHeight;
      }
      ctx.fillText(line, x, y);
      line = chars[i];
      y += lineHeight;
    } else {
      line = testLine;
    }
  }
  ctx.fillText(line, x, y);
  return y + lineHeight;
}

function prepareResult(result) {
  return {
    ...result,
    dimensions: result.dimensions.map((item) => ({
      ...item,
      displayLabel: item.label || `${item.left}/${item.right}`,
      displayValue: item.pole ? `${item.pole} ${item.percent}% · ${preferenceStrength(item.percent)}` : `${item.percent}%`,
      displayValueShort: item.pole ? `${item.pole} ${item.percent}%` : `${item.percent}%`
    }))
  };
}

function preferenceStrength(percent) {
  if (percent <= 55) return "轻微";
  if (percent <= 70) return "中等";
  if (percent <= 85) return "明显";
  return "强烈";
}
