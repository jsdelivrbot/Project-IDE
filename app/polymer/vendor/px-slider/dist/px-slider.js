'use strict';(function(){'use strict';Polymer({is:'px-slider',properties:{_height:{type:Number,value:52},_width:{type:Number,value:52},_margin:{type:Object,notify:true,value:function value(){return{left:13,right:13,top:21,bottom:21}}},value:{type:Number,notify:true,value:0},endValue:{type:Number,notify:true,value:null},formattedStartValue:{type:String},formattedEndValue:{type:String},min:{type:Number,value:1},max:{type:Number,value:100},_minMaxValid:{type:Number,value:0},step:{type:Number,value:1,observer:'_stepChanged'},disabled:{type:Boolean,value:false,observer:'_setupListeners'},hideInputs:{type:Boolean,value:false},_showStartInput:{type:Boolean,value:true},_showEndInput:{type:Boolean,value:false},isRange:{type:Boolean,value:false},scale:{type:String,value:'linear',observer:'_createScale'},base:{type:Number,value:10},exponent:{type:Number,value:1},_scale:{type:Function},_scaleChanged:{type:Boolean},_startHandle:{type:Object},_endHandle:{type:Object},_inputStart:{type:HTMLElement},_inputEnd:{type:HTMLElement},_format:{type:String,value:'0'},showLabels:{type:Boolean,value:false},minLabelPosition:{type:String,value:'bottom'},maxLabelPosition:{type:String,value:'bottom'},_handleDefinitions:{type:Object,value:function value(){return{'square':{'shadowD':'M-11,-1a3,3,0,0,1,3-3h16a3,3,0,0,1,3,3v15a3,3,0,0,1,-3,3h-16a3,3,0,0,1,-3-3Z','bodyD':'M-11,-2a3,3,0,0,1,3-3h16a3,3,0,0,1,3,3v15a3,3,0,0,1,-3,3h-16a3,3,0,0,1,-3-3Z','linesY1':'2','linesY2':'9'},'down':{'shadowD':'M-10.5,-16a3,3,0,0,1,3-3h16a3,3,0,0,1,3,3v9l-10.5,8h-1l-10.5,-8Z','bodyD':'M-10.5,-17a3,3,0,0,1,3-3h16a3,3,0,0,1,3,3v9l-10.5,8h-1l-10.5,-8Z','linesY1':'-15','linesY2':'-8'},'up':{'shadowD':'M11,18.5v9c0,1.7-1.3,3-3,3h-16c-1.7,0-3-1.3-3-3v-9l10.5,-8h1l10.5,8Z','bodyD':'M11,17.5v9c0,1.7-1.3,3-3,3h-16c-1.7,0-3-1.3-3-3v-9l10.5,-8h1l10.5,8Z','linesY1':'18','linesY2':'25'}}}}},behaviors:[Polymer.IronResizableBehavior,PxNumberFormatter.commonProperties],listeners:{'iron-resize':'_onIronResize'},observers:['_minOrMaxChanged(min, max)','_setRange(_scale, _width, _height)','_setDomain(_scale, _minMaxValid)','_valueChanged(value, _scale, _scaleChanged)','_endValueChanged(endValue, _scale, _scaleChanged)','_updateFormat(step)','_updateFormat(format)','_isRangeChanged(isRange)','_hideInputsChanged(hideInputs)'],ready:function ready(){window.requestAnimationFrame(this._animationFrame.bind(this))},attached:function attached(){this.setAttribute('role','slider')},_animationFrame:function _animationFrame(){var startHandle=Px.d3.select(this.$$('#handleStart'));var endHandle=Px.d3.select(this.$$('#handleEnd'));this.set('_startHandle',startHandle);this.set('_endHandle',endHandle);this._buildHandles();this._setupListeners()},_setupListeners:function _setupListeners(){if(this._startHandle&&this._endHandle){if(this.disabled){this._removeHandleListeners();this._removeTrackListeners()}else{this._createHandleListeners(this._startHandle,'value');this._createHandleListeners(this._endHandle,'endValue');this._createTrackListeners()}this._toggleDisabledClass()}},_createHandleListeners:function _createHandleListeners(handle,valueVar){var handleBody=handle.select('.handleBody'),handleLines=handle.selectAll('.handleLines'),handleShadow=handle.select('.handleDropShadow');handle.call(Px.d3.drag().on('start.interrupt',function(){handle.interrupt()}).on('start drag',function(){handleBody.classed('handleBodyPressed',true);handleLines.classed('handleLinesPressed',true);handleShadow.classed('handleDropShadowPressed',true);this._calcSliderValue(Px.d3.event.x,valueVar)}.bind(this)).on('end',function(){handleBody.classed('handleBodyPressed',false);handleLines.classed('handleLinesPressed',false);handleShadow.classed('handleDropShadowPressed',false)})).on('mouseenter',function(){handleBody.classed('handleBodyHover',true);handleLines.classed('handleBodyHover',true)}).on('mouseleave',function(){handleBody.classed('handleBodyHover',false);handleLines.classed('handleBodyHover',false)})},_createTrackListeners:function _createTrackListeners(){var _this=this,interactionRects=Px.d3.selectAll(Polymer.dom(this.$$('#sliderSVG')).querySelectorAll('.sliderTrack'));interactionRects.on('click',function(){_this._trackOnClick(this)})},_trackOnClick:function _trackOnClick(elem){var val=Px.d3.mouse(elem)[0],prop='value';if(this.isRange){var scaled=this._scale.invert(val),half=(this.endValue-this.value)/2+this.value;prop=scaled>this.endValue||scaled>half?'endValue':'value'}this._calcSliderValue(val,prop)},_removeHandleListeners:function _removeHandleListeners(){this._startHandle.on('.drag',null);this._endHandle.on('.drag',null)},_removeTrackListeners:function _removeTrackListeners(){var interactionRects=Px.d3.selectAll(Polymer.dom(this.$$('#sliderSVG')).querySelectorAll('.sliderTrack'));interactionRects.on('click',null)},_buildHandles:function _buildHandles(){if(this._handleDefinitions&&this._startHandle&&this._endHandle){if(this.isRange){this._startHandle.select('.handleDropShadow').attr('d',this._handleDefinitions.up.shadowD);this._startHandle.select('.handleBody').attr('d',this._handleDefinitions.up.bodyD);this._startHandle.selectAll('.handleLines').attr('y1',this._handleDefinitions.up.linesY1).attr('y2',this._handleDefinitions.up.linesY2);this._endHandle.select('.handleDropShadow').attr('d',this._handleDefinitions.down.shadowD);this._endHandle.select('.handleBody').attr('d',this._handleDefinitions.down.bodyD);this._endHandle.selectAll('.handleLines').attr('y1',this._handleDefinitions.down.linesY1).attr('y2',this._handleDefinitions.down.linesY2)}else{this._startHandle.select('.handleDropShadow').attr('d',this._handleDefinitions.square.shadowD);this._startHandle.select('.handleBody').attr('d',this._handleDefinitions.square.bodyD);this._startHandle.selectAll('.handleLines').attr('y1',this._handleDefinitions.square.linesY1).attr('y2',this._handleDefinitions.square.linesY2);this._endHandle.select('.handleDropShadow').attr('d',null);this._endHandle.select('.handleBody').attr('d',null);this._endHandle.selectAll('.handleLines').attr('y1',null).attr('y2',null)}}},_assignInputElems:function _assignInputElems(){Polymer.dom.flush();this.set('_inputStart',this.$$('#inputStart'));this.set('_inputEnd',this.$$('#inputEnd'))},_onIronResize:function _onIronResize(){this.debounce('ironresize',function(){var wrapperRect=this.$.wrapper.getBoundingClientRect(),startInputSize=this._inputStart?this._inputStart.getBoundingClientRect().width:0,startInputMargin=this._inputStart?Number(window.getComputedStyle(this._inputStart).marginRight.split('px')[0]):0,endInputSize=this._inputEnd?this._inputEnd.getBoundingClientRect().width:0,endInputMargin=this._inputEnd?Number(window.getComputedStyle(this._inputEnd).marginLeft.split('px')[0]):0,w=wrapperRect.width-startInputSize-endInputSize-startInputMargin-endInputMargin-this._margin.left-this._margin.right;this.set('_width',Math.max(w,0))},10)},_hideInputsChanged:function _hideInputsChanged(){if(this.hideInputs){this.set('_showStartInput',false);this.set('_showEndInput',false)}else{this.set('_showStartInput',true);this.set('_showEndInput',this.isRange)}this._assignInputElems();this.notifyResize()},_getSvgWith:function _getSvgWith(){return this._width+this._margin.left+this._margin.right},_getSvgHeight:function _getSvgHeight(){return this._height+this._margin.top+this._margin.bottom},_calcTransform:function _calcTransform(){return'translate('+this._margin.left+','+this._margin.top+')'},_stepChanged:function _stepChanged(){if(this.step<0){console.warn('Improper configuration: step cannot be negative. Falling back to absolute value');this.set('step',Math.abs(this.step));return}if(this.step===0){console.warn('Improper configuration: step cannot be negative. Falling back to 1');this.set('step',1);return}},_minOrMaxChanged:function _minOrMaxChanged(){if(this.min===this.max){this.set('_minMaxValid',0);console.warn('Improper configuration: min and max are the same. Increasing max by step size.');this.set('max',this.min+this.step);return}if(this.min>this.max){this.set('_minMaxValid',0);console.warn('Improper configuration: min and max are reversed. Swapping them.');var temp=this.min;this.set('min',this.max);this.set('max',temp);return}this.setAttribute('aria-valuemin',this.min);this.setAttribute('aria-valuemax',this.max);this.set('_minMaxValid',(this._minMaxValid||0)+1)},_createScale:function _createScale(){this.debounce('_createScale',function(){this._createScaleDebounced()},10)},_createScaleDebounced:function _createScaleDebounced(){var scale;if(this.scale==='linear'){scale=Px.d3.scaleLinear().clamp(true)}else if(this.scale==='logarithmic'){scale=Px.d3.scaleLog().base(this.base).clamp(true)}else if(this.scale==='exponential'){scale=Px.d3.scalePow().exponent(this.exponent).clamp(true)}this.set('_scale',scale)},_setRange:function _setRange(){this.debounce('_setRange',function(){if(this._scale&&this._width&&this._height){this._setRangeDebouced()}},10)},_setRangeDebouced:function _setRangeDebouced(){var range;if(this.orientation==='vertical'){var h=Math.max(this._height,0);range=[h,0]}else{var w=Math.max(this._width,0);range=[0,w]}this._scale.range(range);this._scaleChanged=!this._scaleChanged},_setDomain:function _setDomain(){this.debounce('_setDomain',function(){if(this._scale&&this._minMaxValid){this._setDomainDebounced()}},10)},_setDomainDebounced:function _setDomainDebounced(){this._scale.domain([this.min,this.max]);this._scaleChanged=!this._scaleChanged},_calcSliderValue:function _calcSliderValue(mouseVal,valueVar){this.debounce('_calcSliderValue',function(){this._calcSliderValueDebounced(mouseVal,valueVar)},10)},_calcSliderValueDebounced:function _calcSliderValueDebounced(mouseVal,valueVar){var val=this._scale.invert(mouseVal),stepped=this._calcStepRounded(val),inputElem=valueVar==='value'?this._inputStart:this._inputEnd;if(this.isRange){stepped=valueVar==='value'&&stepped>this.endValue?this.endValue:stepped;stepped=valueVar==='endValue'&&stepped<this.value?this.value:stepped}this.toggleClass('validation-error',false,inputElem);this.set(valueVar,stepped)},_calcStepRounded:function _calcStepRounded(value){var s=Math.round(value/this.step)*this.step;s=s<this.min?s+this.step:s;s=s>this.max?s-this.step:s;return s},_validateValue:function _validateValue(v,thisVal){var valid=true;if(this.isRange&&thisVal==='value'&&v>this.endValue){v=this.endValue;valid=false;this.set(thisVal,v)}else if(this.isRange&&thisVal==='endValue'&&v<this.value){v=this.value;valid=false;this.set(thisVal,v)}if(v<this.min){v=this._calcStepRounded(this.min);valid=false;this.set(thisVal,v)}else if(v>this.max){v=this._calcStepRounded(this.max);valid=false;this.set(thisVal,v)}return valid},_valueChanged:function _valueChanged(v){if(this._startHandle){var valid=this._validateValue(v,'value');if(valid){this._moveHandle(this._startHandle,v);this.setAttribute('aria-valuenow',v)}}},_endValueChanged:function _endValueChanged(v){if(v!==null&&this._endHandle){var valid=this._validateValue(v,'endValue');if(valid){this._moveHandle(this._endHandle,v)}}},_moveHandle:function _moveHandle(handle,v){handle.attr('transform','translate('+this._scale(v)+',0)')},_calcProgressStart:function _calcProgressStart(){if(this.isRange){return this._scale(this.value)}return 0},_calcProgressEnd:function _calcProgressEnd(){if(this.isRange){return Math.max(this._scale(this.endValue)-this._scale(this.value),1)}return this._scale(this.value)},_updateFormat:function _updateFormat(){if(this.format){this.set('_format',this.format);return}var s=this.step.toString().split('.'),l=s.length===2?s[1].length:0,f='0.';for(var i=0;i<l;i++){f+='0'}this.set('_format',f)},_inputChangedStart:function _inputChangedStart(evt){var text=this._inputStart.value;this._inputChanged(text,this._inputStart,'#formatterStart','value')},_inputChangedEnd:function _inputChangedEnd(evt){var text=this._inputEnd.value;this._inputChanged(text,this._inputEnd,'#formatterEnd','endValue')},_inputChanged:function _inputChanged(text,inputElem,formatterId,valueVar){var formatter=this.$$(formatterId),newVal;formatter.set('unformat',text);newVal=formatter.unformattedValue;if(!newVal&&newVal!==0){this.toggleClass('validation-error',true,inputElem);return}newVal=Math.max(newVal,this.min);newVal=Math.min(newVal,this.max);newVal=this._calcStepRounded(newVal);if(this.isRange){if(valueVar==='value'&&newVal>this.endValue||valueVar==='endValue'&&newVal<this.value){this.toggleClass('validation-error',true,inputElem);return}}this.toggleClass('validation-error',false,inputElem);this[valueVar]=null;this.set(valueVar,newVal)},_restoreStartInputValue:function _restoreStartInputValue(evt){this._restoreInputValue(this._inputStart,this.formattedStartValue)},_restoreEndInputValue:function _restoreEndInputValue(evt){this._restoreInputValue(this._inputEnd,this.formattedEndValue)},_restoreInputValue:function _restoreInputValue(input,formattedVal){input.blur();input.value=formattedVal;this.toggleClass('validation-error',false,input)},_checkEndValue:function _checkEndValue(){var v=this._calcStepRounded(this.endValue);if(v>=this.value&&v<=this.max){this.set('endValue',v)}else{var m=this._calcStepRounded(this.max);this.set('endValue',m)}},_isRangeChanged:function _isRangeChanged(){this._checkEndValue();this._hideInputsChanged();this._buildHandles()},_toggleDisabledClass:function _toggleDisabledClass(){this._startHandle.classed('disabled',this.disabled);this._endHandle.classed('disabled',this.disabled)},_returnLabel:function _returnLabel(label,showLabels){return showLabels?label:''},_returnLabelPosition:function _returnLabelPosition(labelPosition){return labelPosition==='top'?-15:18},_returnLabelBaseline:function _returnLabelBaseline(labelPosition){return labelPosition==='top'?'baseline':'hanging'}})})();
//# sourceMappingURL=px-slider.js.map
