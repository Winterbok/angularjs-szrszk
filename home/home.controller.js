class HomeCtrl {
  constructor($scope) {
    'ngInject';

    this.name = "AngularJS";
  }

  reset($scope){
    this.name = "AngularJS";
  }

}

export default HomeCtrl;