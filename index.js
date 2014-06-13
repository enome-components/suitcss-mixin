var suitCss = {

  classNames: function (base) {

    var class_names = [];
   
    if (this.props.suitCss) {
      class_names = this.props.suitCss.split(' ');

      class_names = class_names.map(function (class_name) {

        if (class_name.indexOf('--') === 0) {
          return base + class_name;
        }

        return class_name;
        
      });
    }

    class_names.unshift(base);

    return class_names.join(' ');

  }

};

module.exports = suitCss;
