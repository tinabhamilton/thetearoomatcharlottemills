if (self.CavalryLogger) { CavalryLogger.start_js(["kfpZa"]); }

__d('GoodwillDailyDialogueAutoHideUnit',['OnVisible.react','React','ReactDOM'],function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();var h=c('React').PropTypes,i=c('React').createClass({displayName:'GoodwillDailyDialogueAutoHideElement',propTypes:{className:h.string.isRequired,minViewTime:h.number.isRequired,onHide:h.func.isRequired,onVisible:h.func.isRequired},getInitialState:function(){return {lastViewTime:0,toHide:false};},render:function(){return (c('React').createElement(c('OnVisible.react'),{onVisible:this._onVisible,onHidden:this._onHidden},c('React').createElement('div',{className:this.props.className})));},_onVisible:function(){this.props.onVisible();this.setState({lastViewTime:Date.now()});},_onHidden:function(){if(Date.now()-this.state.lastViewTime>this.props.minViewTime)this.setState({toHide:true});if(this.state.toHide)this.props.onHide();}});function j(k,l,m){this.$GoodwillDailyDialogueAutoHideUnit1=k;this.$GoodwillDailyDialogueAutoHideUnit2=l;this.$GoodwillDailyDialogueAutoHideUnit3=function(){'function'===typeof m.onHide&&m.onHide();this.unmount();}.bind(this);this.$GoodwillDailyDialogueAutoHideUnit4='function'===typeof m.onVisible?m.onVisible:function n(){};}j.prototype.mount=function(k){c('ReactDOM').render(c('React').createElement(i,{className:this.$GoodwillDailyDialogueAutoHideUnit1,minViewTime:this.$GoodwillDailyDialogueAutoHideUnit2,onVisible:this.$GoodwillDailyDialogueAutoHideUnit4,onHide:this.$GoodwillDailyDialogueAutoHideUnit3}),k);this.$GoodwillDailyDialogueAutoHideUnit5=k;};j.prototype.unmount=function(){c('ReactDOM').unmountComponentAtNode(this.$GoodwillDailyDialogueAutoHideUnit5);};f.exports=j;},null);
__d("XGoodwillDailyDialogueGreetingViewedAsyncController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/dd\/greeting\/viewed\/",{});},null);
__d('GoodwillGreetingsViewController',['AsyncRequest','GoodwillDailyDialogueAutoHideUnit','XGoodwillDailyDialogueGreetingViewedAsyncController'],function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();var h={hideAfterView:function(i,j,k){var l=function(){var m=c('XGoodwillDailyDialogueGreetingViewedAsyncController').getURIBuilder().getURI();new (c('AsyncRequest'))().setURI(m).setData({lightweight_unit_type:k.lightweight_unit_type,lightweight_unit_id:k.lightweight_unit_id,lightweight_extra:k.lightweight_extra}).setMethod('POST').send();};new (c('GoodwillDailyDialogueAutoHideUnit'))(k.class_name,k.min_view_time,{onVisible:l}).mount(j);}};f.exports=h;},null);