(function(){
  var mainApp = angular.module('mainApp',['appDirective']);

  mainApp.controller('switchPanel',[function(){
    this.active = 1;
    this.setActive = function(num){
      this.active = num;
    }
    this.changePanel = function(pointer){
      if ("next" === pointer) {
        this.active = this.active + 1;
        if(this.active === 4){
          this.active = 1;
        }
      }else if("previous" === pointer){
        this.active = this.active - 1;
        if (this.active === 0) {
          this.active = 3;
        }
      }
    }
    this.check = function(num){
      if (this.active === num) {
        return true
      }
    }
  }])

  angular.bootstrap(window.document,['mainApp'],{strictDi:false});
}())
