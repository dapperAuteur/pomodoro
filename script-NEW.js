function CountDownTimer(duration, granularity) {
	//declare object constructor function CountDownTimer that takes two parameters: duration & granularity
  this.duration = duration;
  //sets CountDownTimer duration to duration
  this.granularity = granularity || 1000;
  //sets CountDownTimer granularity to granularity or 1000 (1 sec)
  this.tickFtns = [];
  //declares an empty array called tickFtns
  this.running = false;
  //declares a variable of running and sets value to false
}

CountDownTimer.prototype.start = function() {
	//create a new object of CountDownTimer() function
  if (this.running) {
    return;
  }
  this.running = true;
  var start = Date.now(),
      that = this,
      diff, obj;

  (function timer() {
    diff = that.duration - (((Date.now() - start) / 1000) | 0);

    if (diff > 0) {
      setTimeout(timer, that.granularity);
    } else {
      diff = 0;
      that.running = false;
    }

    obj = CountDownTimer.parse(diff);
    that.tickFtns.forEach(function(ftn) {
      ftn.call(this, obj.minutes, obj.seconds);
    }, that);
  }());
};

CountDownTimer.prototype.onTick = function(ftn) {
  if (typeof ftn === 'function') {
    this.tickFtns.push(ftn);
  }
  return this;
};

CountDownTimer.prototype.expired = function() {
  return !this.running;
};

CountDownTimer.parse = function(seconds) {
  return {
    'minutes': (seconds / 60) | 0,
    'seconds': (seconds % 60) | 0
  };
};