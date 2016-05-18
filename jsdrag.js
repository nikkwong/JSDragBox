
	function DragBox() {
		var _isVisible = false,
			_initPosX = 0,
			_initPosY = 0,
			_width = 0,
			_height = 0,
			_left = 0,
			_top = 0,
			_currentPosX = 0,
			_currentPosY = 0;

		this.tolerance = 100;

		this.domRef = document.createElement('figure');
		this.domRef.style.position = 'absolute';
		this.domRef.style.margin = 0;
		this.domRef.style.display = 'none';
		this.domRef.style.backgroundColor = 'rgba(255,255,255,.2)';
		this.domRef.style.border = '2px solid #dbe1e5';
		this.domRef.style.zIndex = 2147483637;

		Object.defineProperty(this, "isVisible", {
		    get: function(){ 
		    	return _isVisible;
		    },
		    set: function(boolean){
		    	this.domRef.style.display = boolean ? 'block' : 'none'; 
		    	_isVisible = boolean;
		    }
		});

		Object.defineProperty(this, "initPosX", {
		    get: function(){ 
		    	return _initPosX;
		    },
		    set: function(initPosX){
		    	_initPosX = initPosX;
		    }
		});

		Object.defineProperty(this, "initPosY", {
		    get: function(){ 
		    	return _initPosY;
		    },
		    set: function(initPosY){
		    	_initPosY = initPosY;
		    }
		});

		Object.defineProperty(this, "width", {
		    get: function(){ 
		    	return _width;
		    },
		    set: function(width){
		    	this.domRef.style.width = width + 'px';
		    	_width = width;
		    }
		});

		Object.defineProperty(this, "height", {
		    get: function(){ 
		    	return _height;
		    },
		    set: function(height){
		    	this.domRef.style.height = height + 'px';
		    	_height = height;
		    }
		});

		Object.defineProperty(this, "left", {
		    get: function(){ 
		    	return _left;
		    },
		    set: function(left){
		    	this.domRef.style.left = left + 'px';
		    	_width = left;
		    }
		});

		Object.defineProperty(this, "top", {
		    get: function(){ 
		    	return _top;
		    },
		    set: function(top){
		    	this.domRef.style.top = top + 'px';
		    	_top = top;
		    }
		});

		Object.defineProperty(this, "currentPosX", {
		    get: function(){ 
		    	return _currentPosX;
		    },
		    set: function(currentPosX){
		    	_currentPosX = currentPosX;
		    }
		});

		Object.defineProperty(this, "currentPosY", {
		    get: function(){ 
		    	return _currentPosY;
		    },
		    set: function(currentPosY){
		    	_currentPosY = currentPosY;
		    }
		});

	}

	DragBox.prototype.init = function (el, onmousemoveCb, onmouseUpCb, onmousedownCb, context, tolerance) {

		el.appendChild(this.domRef);
		// this.tolerance = tolerance ? tolerance : this.tolerance;

		document.onmousedown = function (e) {
			e.preventDefault();
			this.showDragBox(e, onmousedownCb, context);
		}.bind(this);

		document.onmousemove = function (e) {
			e.preventDefault();
			if (!this.isVisible)
				return;
			this.resizeDragBox(e, onmousemoveCb, context);
		}.bind(this);

		document.onmouseup = function (e) {
			e.preventDefault();
			this.resetDragBox(e, onmouseupCb, context);
		}.bind(this);

	};

	DragBox.prototype.resizeDragBox = function (event, onmousemoveCb, context) {
		// NOTE currentPosX and currentPosY are relative to the document.
		this.currentPosX = event.clientX + window.scrollX;
		this.currentPosY = event.clientY + window.scrollY;

		// Check for out of bounds.
		if (this.currentPosX > (window.scrollX + window.document.documentElement.clientWidth) || 
			this.currentPosX < window.scrollX || 
			this.currentPosY > (window.scrollY + window.document.documentElement.clientHeight) ||
			this.currentPosY < window.scrollY)
			return;

		if (this.currentPosX < this.initPosX) {
			this.width = this.initPosX - this.currentPosX;
			this.left = this.currentPosX;
		} else {
			this.width = this.currentPosX - this.initPosX;
			this.left = this.initPosX;
		}


		if (this.currentPosY < this.initPosY) {
			this.height = this.initPosY - this.currentPosY;
			this.top = this.currentPosY;
		} else {
			this.height = this.currentPosY - this.initPosY;
			this.top = this.initPosY;
		}
		if (onmousemoveCb)
			onmousemoveCb.call(event, context, this);			
	};

	DragBox.prototype.showDragBox = function (event, onmousedownCb, context) {
		this.initPosX = event.clientX + window.scrollX;
		this.initPosY = event.clientY + window.scrollY;
		this.isVisible = true;
		if (onmousedownCb)
			onmousedownCb.call(event, context, this);
	}

	DragBox.prototype.resetDragBox = function (event, onmouseupCb, context) {
		this.isVisible = false;
		this.initPosX = 0;
		this.initPosY = 0;
		this.currentPosX = 0;
		this.currentPosY = 0;
		this.width = 0;
		this.height = 0;
		this.left = 0;
		this.top = 0;
		if (onmouseupCb)
			onmouseupCb.call(event, context, this);
	}

	//
	//
