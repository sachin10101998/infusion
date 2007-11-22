if (typeof(fluid) == "undefined") {
	fluid = {};
}

fluid.Scheduler = {};

fluid.Scheduler.initScheduler = function (containerId) {
	var orderableFinder = fluid.Scheduler.createCSSOrderableFinderForClass ("movableTopic");
	
	var reorderer = new fluid.Reorderer (containerId, {
		orderChangedCallback: fluid.Scheduler.createJSONOrderChangedCallback (orderableFinder),
		orderableFinder: orderableFinder,
		layoutHandler: new fluid.GridLayoutHandler (orderableFinder)
	});
};

fluid.Scheduler.fixedElementLayoutHandler = {
	
};

fluid.Scheduler.createJSONOrderChangedCallback = function (orderableFinder) {
	var orderables = orderableFinder();
		
	// Create a simple data structure keyed by element id and with the ordinal number as value.
	var orderMap = {};
	orderables.each(function (index) {
		orderMap[this.id] = index;
	});
	
	// Then serialize it to a JSON string.
	var orderMapJSONString = JSON.stringify(orderMap);
	
	// Then POST it back to the server via XHR.
};

fluid.Scheduler.createCSSOrderableFinderForClass = function (className) {
	return function (containerElement) {
		var orderableSelector = "." + className;
		return jQuery(orderableSelector, containerElement);
	};
};