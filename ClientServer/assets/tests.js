'use strict';

define('ipi-mdd-050-web/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('adapters/application.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'adapters/application.js should pass ESLint\n\n15:15 - \'type\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/application.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/employes/detail.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/employes/detail.js should pass ESLint\n\n4:9 - \'Ember\' is not defined. (no-undef)\n27:28 - \'error\' is not defined. (no-undef)');
  });

  QUnit.test('controllers/employes/edit.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/employes/edit.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/employes/liste.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/employes/liste.js should pass ESLint\n\n');
  });

  QUnit.test('models/commercial.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'models/commercial.js should pass ESLint\n\n4:14 - \'DS\' is not defined. (no-undef)\n5:17 - \'DS\' is not defined. (no-undef)');
  });

  QUnit.test('models/employe.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/employe.js should pass ESLint\n\n');
  });

  QUnit.test('models/manager.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/manager.js should pass ESLint\n\n');
  });

  QUnit.test('models/technicien.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/technicien.js should pass ESLint\n\n');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });

  QUnit.test('routes/application.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/application.js should pass ESLint\n\n5:12 - \'Ember\' is not defined. (no-undef)\n5:72 - \'error\' is defined but never used. (no-unused-vars)\n10:18 - \'transition\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('routes/employes.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/employes.js should pass ESLint\n\n');
  });

  QUnit.test('routes/employes/detail.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/employes/detail.js should pass ESLint\n\n31:18 - \'transition\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('routes/employes/edit.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/employes/edit.js should pass ESLint\n\n');
  });

  QUnit.test('routes/employes/liste.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/employes/liste.js should pass ESLint\n\n');
  });

  QUnit.test('routes/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/index.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/application.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'serializers/application.js should pass ESLint\n\n61:31 - \'options\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('serializers/commercial.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/commercial.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/manager.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/manager.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/technicien.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/technicien.js should pass ESLint\n\n');
  });
});
define('ipi-mdd-050-web/tests/helpers/destroy-app', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = destroyApp;
  function destroyApp(application) {
    Ember.run(application, 'destroy');
  }
});
define('ipi-mdd-050-web/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ipi-mdd-050-web/tests/helpers/start-app', 'ipi-mdd-050-web/tests/helpers/destroy-app'], function (exports, _qunit, _startApp, _destroyApp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (name) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _startApp.default)();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },
      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Ember.RSVP.resolve(afterEach).then(function () {
          return (0, _destroyApp.default)(_this.application);
        });
      }
    });
  };
});
define('ipi-mdd-050-web/tests/helpers/resolver', ['exports', 'ipi-mdd-050-web/resolver', 'ipi-mdd-050-web/config/environment'], function (exports, _resolver, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var resolver = _resolver.default.create();

  resolver.namespace = {
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix
  };

  exports.default = resolver;
});
define('ipi-mdd-050-web/tests/helpers/start-app', ['exports', 'ipi-mdd-050-web/app', 'ipi-mdd-050-web/config/environment'], function (exports, _app, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = startApp;
  function startApp(attrs) {
    var attributes = Ember.merge({}, _environment.default.APP);
    attributes = Ember.merge(attributes, attrs); // use defaults, but you can override;

    return Ember.run(function () {
      var application = _app.default.create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
      return application;
    });
  }
});
define('ipi-mdd-050-web/tests/test-helper', ['ipi-mdd-050-web/tests/helpers/resolver', 'ember-qunit', 'ember-cli-qunit'], function (_resolver, _emberQunit, _emberCliQunit) {
  'use strict';

  (0, _emberQunit.setResolver)(_resolver.default);
  (0, _emberCliQunit.start)();
});
define('ipi-mdd-050-web/tests/tests.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('helpers/destroy-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/module-for-acceptance.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/start-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass ESLint\n\n');
  });

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });
});
require('ipi-mdd-050-web/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
