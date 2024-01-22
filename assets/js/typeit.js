new TypeIt("#header_text", {
  strings: "The Stock Price Game Bot.",
  speed: 100,
  startDelay: 1000,
  waitUntilVisible: true,
  lifeLike: true,
  afterComplete: function (instance) {
    instance.destroy();
  }
}).go();

new TypeIt("#commands_text", {
  strings: "Commands",
  speed: 200,
  startDelay: 1000,
  waitUntilVisible: true,
  lifeLike: true,
  afterComplete: function (instance) {
    instance.destroy();
  }
}).go();

new TypeIt("#contact_text", {
  strings: "Contacts",
  speed: 200,
  startDelay: 1000,
  waitUntilVisible: true,
  lifeLike: true,
  afterComplete: function (instance) {
    instance.destroy();
  }
}).go();

new TypeIt("#support_text", {
  strings: "Coming Soon",
  speed: 200,
  startDelay: 1000,
  waitUntilVisible: true,
  lifeLike: true,
  afterComplete: function (instance) {
    instance.destroy();
  }
}).go();

new TypeIt("#owner_name", {
  speed: 100,
  startDelay: 1000,
  waitUntilVisible: true,
  lifeLike: true,
  afterComplete: function (instance) {
    instance.destroy();
  }
})
  .type("i")
  .pause(78)
  .type("m")
  .pause(256)
  .type("i")
  .pause(69)
  .type("n")
  .pause(431)
  .type("t")
  .pause(89)
  .type("h")
  .pause(130)
  .type("e")
  .pause(235)
  .type("b")
  .pause(89)
  .type("i")
  .pause(123)
  .type("b")
  .pause(192)
  .type("l")
  .pause(152)
  .type("e")
  .pause(186)
  .type("s")
  .pause(102)
  .type("o")
  .pause(60)
  .type("n")
  .go();