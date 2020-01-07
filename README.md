# vue-responsive-dash

Nightly notes TODO:
Consider the relation between x<=>Left, y<=>top using computed getter/setter:
Potentially gets around dragging/resising cases? Needs investigation
computed: {
  fullName: {
    // getter
    get: function () {
      return this.firstName + ' ' + this.lastName
    },
    // setter
    set: function (newValue) {
      var names = newValue.split(' ')
      this.firstName = names[0]
      this.lastName = names[names.length - 1]
    }
  }
}