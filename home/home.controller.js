class HomeCtrl {
  constructor($scope) {
    'ngInject';

    this.tableItems = [];

    this.name = "AngularJS";
  }

  reset($scope){
    this.name = "AngularJS";
  }

  addItem($scope){
    this.tableItems.push(this.name);
  }

}

export default HomeCtrl;