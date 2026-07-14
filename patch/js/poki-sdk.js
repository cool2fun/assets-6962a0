// Poki SDK mock - bypasses sitelock and ad calls
(function() {
  var noop = function() {};
  var resolvePromise = function() { return Promise.resolve(); };

  window.PokiSDK = {
    init: resolvePromise,
    initWithVideoHB: resolvePromise,
    setDebug: noop,
    setDebugTouchOverlayController: noop,
    gameLoadingStart: noop,
    gameLoadingProgress: noop,
    gameLoadingFinished: noop,
    gameplayStart: noop,
    gameplayStop: noop,
    commercialBreak: resolvePromise,
    rewardedBreak: function() { return Promise.resolve(true); },
    displayAd: noop,
    destroyAd: noop,
    happyTime: noop,
    isAdBlocked: function() { return false; },
    getURLParam: function() { return ""; },
    customEvent: noop
  };
})();
