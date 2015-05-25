'use strict';

angular.module('lilybook').factory('mapperSvc', function () {

  var buildCleanUrl = function (title) {
    var url = title.split(' ').join('_');
    url = url.replace(/,/g, '');
    url = url.replace(/\./g, '');
    url = url.replace(/♯/g, '_sharp');
    url = url.replace(/♭/g, '_flat');
    return url.toLowerCase();
  };

  var compositionMapper = function (composition) {
    return {
      base: composition,
      id: composition.id,
      title: composition.get('title'),
      opus: composition.get('opus'),
      number: composition.get('number'),
      key: composition.get('key').get('name'),
      instrumentation: composition.get('instrumentation').get('name'),
      type: composition.get('type').get('name'),
      wikipedia: composition.get('wikipedia'),
      imslp: composition.get('imslp'),
      composer: composition.get('composer') ? composerMapper(composition.get('composer')) : null,
      rcm: composition.get('rcm') ? composition.get('rcm').get('name') : null,
      abrsm: composition.get('abrsm') ? composition.get('abrsm').get('name') : null,
      henle: composition.get('henle') ? composition.get('henle').get('name') : null,
      getUrl: function () {
        return 'composition/' + buildCleanUrl(this.title) + '/' + this.id;
      }
    };
  };

  var composerMapper = function (composer) {
    return {
      base: composer,
      id: composer.id,
      fullname: composer.get('fullName'),
      shortname: composer.get('shortName'),
      bio: composer.get('description'),
      vanity: composer.get('vanity'),
      image: composer.get('image') ? composer.get('image').url() : null,
      getUrl: function () {
        return 'composer/' + this.vanity;
      }
    };
  };

  var videoMapper = function (video) {
    return {
      base: video,
      id: video.id,
      embed: video.get('embed'),
      source: video.get('source'),
      title: video.get('title')
    };
  };

  var compositionTypeMapper = function (compositionType) {
    return {
      base: compositionType,
      id: compositionType.id,
      name: compositionType.get('name')
    };
  };

  var keyMapper = function (key) {
    return {
      base: key,
      id: key.id,
      name: key.get('name')
    };
  };

  var instrumentationMapper = function (instrumentation) {
    return {
      base: instrumentation,
      id: instrumentation.id,
      name: instrumentation.get('name')
    };
  };

  return {
    compositionMapper: compositionMapper,
    composerMapper: composerMapper,
    videoMapper: videoMapper,
    compositionTypeMapper: compositionTypeMapper,
    keyMapper: keyMapper,
    instrumentationMapper: instrumentationMapper
  };

});