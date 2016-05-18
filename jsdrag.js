
		var dragBox = new DragBox().init(document.body);

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
			this.domRef = document.createElement('figure');
			this.domRef.style.position = 'fixed';
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


			this.init = function (el) {

				el.appendChild(this.domRef);

				document.onmousedown = function (e) {
					e.preventDefault();
					this.showDragBox(e.clientX, e.clientY, this);
				}.bind(this);

				document.onmousemove = function (e) {
					e.preventDefault();
					if (!this.isVisible)
						return;
					this.resizeDragBox(e.clientX, e.clientY, this);
				}.bind(this);

				document.onmouseup = function (e) {
					e.preventDefault();
					this.resetDragBox(this);
				}.bind(this);

			};

			// Pass drag box so we can have a 'pure functional programming' approach.

			this.resetDragBox = function (dragBox) {
				dragBox.isVisible = false;
				dragBox.initPosX = 0;
				dragBox.initPosY = 0;
				dragBox.currentPosX = 0;
				dragBox.currentPosY = 0;
				dragBox.width = 0;
				dragBox.height = 0;
				dragBox.left = 0;
				dragBox.top = 0;
			}

			this.showDragBox = function (initPosX, initPosY, dragBox) {
				dragBox.initPosX = initPosX;
				dragBox.initPosY = initPosY;
				dragBox.isVisible = true;
			}

			this.resizeDragBox = function (currentPosX, currentPosY, dragBox) {
				dragBox.currentPosX = currentPosX;
				dragBox.currentPosY = currentPosY;

				if (dragBox.currentPosX < dragBox.initPosX) {
					dragBox.width = dragBox.initPosX - dragBox.currentPosX;
					dragBox.left = dragBox.currentPosX;
				} else {
					dragBox.width = dragBox.currentPosX - dragBox.initPosX;
					dragBox.left = dragBox.initPosX;
				}


				if (dragBox.currentPosY < dragBox.initPosY) {
					dragBox.height = dragBox.initPosY - dragBox.currentPosY;
					dragBox.top = dragBox.currentPosY;
				} else {
					dragBox.height = dragBox.currentPosY - dragBox.initPosY;
					dragBox.top = dragBox.initPosY;
				}
			}

		}
