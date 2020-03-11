class HomeCtrl {
  constructor($scope) {
    'ngInject';

    this.tableItems = [];

    this.name = "AngularJS";
    this.age = "18"
  }

  reset($scope){
    this.tableItems = [];
  }

  addItem($scope){
    this.tableItems.push({
      name:this.name,
      age:this.age
      });
  }

}

export default HomeCtrl;