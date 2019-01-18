H5P.GoToScene = (function () {

  function GoToScene(params) {
    console.log("params", params);

    /**
     * Attach interaction
     *
     * @param {H5P.jQuery} $container
     */
    this.attach = function ($container) {
      var self = this;
      const goToScene = document.createElement('div');
      goToScene.textContent = 'View of GoToScene content type';
      goToScene.addEventListener('click', function () {
        console.log("clicked goToScene with nextSceneId", params.nextSceneId);
        self.trigger('goToScene', params.nextSceneId);
      });

      $container[0].appendChild(goToScene);
    };
  }

  return GoToScene;
})();
