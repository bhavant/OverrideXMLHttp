(function (window) {
  console.log("Loading Listener");
  // Set initial value
  window.isAJAXDone = 0;

  // Get the AJAX methods which needs to be overridden with custom code
  var openOriginal = window.XMLHttpRequest.prototype.open
  var sendOriginal = window.XMLHttpRequest.prototype.send;

  function openCustom(method, url, async, user, password) {
    this._url = url;
    return openOriginal.apply(this, arguments);
  }

  function sendCustom(data) {
    if (this.onreadystatechange) {
      this._onreadystatechange = this.onreadystatechange;
    }
    window.isAJAXDone++;
    this.onreadystatechange = onReadyStateChangeCustom;
    return sendOriginal.apply(this, arguments);
  }

  function onReadyStateChangeCustom() {
    if (this.readyState === 4) {
      window.isAJAXDone--;
    }
    if (window.isAJAXDone === 0) {
      console.log("Ajax Completed. window.isAJAXDone: " + window.isAJAXDone);
    }
    if (this._onreadystatechange) {
      return this._onreadystatechange.apply(this, arguments);
    }
  }

  // Replace the open and send methods of the XMLHttpRequest with custom ones.
  window.XMLHttpRequest.prototype.open = openCustom;
  window.XMLHttpRequest.prototype.send = sendCustom;

  console.log("Listener Loaded!!")

})(this);