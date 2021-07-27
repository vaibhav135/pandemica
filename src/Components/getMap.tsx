import React, { useState, useEffect, useRef, useCallback } from "react";

export interface MapWindow extends Window {
  Microsoft: any;
  makeMap: any;
}
declare let window: MapWindow;
export let Microsoft: any, makeMap: any;

const GetMap = ({
  bingMapsKey,
  height,
  mapOptions,
  onMapReady,
  pushPins,
  pushPinsWithInfoboxes,
  viewOptions,
  width,
}: {
  bingMapsKey: string;
  height: any;
  mapOptions: any;
  onMapReady: any;
  pushPins: any;
  pushPinsWithInfoboxes: any;
  viewOptions: any;
  width: any;
}) => {
  const mapContainer = useRef(null);
  const map = useRef<any>(null);

  // removes pushpins
  function removePushpins(map: any, Maps: any) {
    for (var i = map.entities.getLength() - 1; i >= 0; i--) {
      var pushpin = map.entities.get(i);
      if (pushpin instanceof Maps.Pushpin) {
        map.entities.removeAt(i);
      }
    }
  }

  // add pushpins with infoboxes
  const addPushpinsWithInfoboxes = useCallback(
    (pushPinsToAdd, infobox, map, Maps) => {
      removePushpins(map, Maps);
      pushPinsToAdd.forEach((pushPin: any) => {
        if (pushPin === null) {
          return;
        }
        const newPin = new Maps.Pushpin(pushPin.center, pushPin.options);
        newPin.metadata = pushPin.metadata;
        Maps.Events.addHandler(newPin, "mouseover", (e: any) => {
          infobox.setOptions({
            location: e.target.getLocation(),
            title: e.target.metadata.title,
            description: e.target.metadata.description,
            visible: true,
            htmlContent: pushPin.infoboxHtml,
          });
        });
        Maps.Events.addHandler(newPin, "mouseout", (e: any) => {
          infobox.setOptions({
            visible: false,
          });
        });
        map.entities.push(newPin);
      });
    },
    []
  );

  // add pushpins
  function addPushpins(pushPinsToAdd: any, map: any, Maps: any) {
    pushPinsToAdd.forEach((pushPin: any) => {
      if (pushPin === null) {
        return;
      }
      const newPin = new Maps.Pushpin(pushPin.center, pushPin.options);
      map.entities.push(newPin);
    });
  }

  // set view options
  function setMapViewOptions(map: any, viewOptions: any, Maps: any) {
    const options = { ...viewOptions };
    if (viewOptions.mapTypeId) {
      options.mapTypeId = Maps.MapTypeId[viewOptions.mapTypeId];
    }
    if (viewOptions.hideRoadLabels) {
      options.labelOverlay = Maps.LabelOverlay.hidden;
    }
    map.setView(options);
  }

  // set map options
  function setMapOptions(map: any, mapOptions: any, Maps: any) {
    const options = { ...mapOptions };

    // some map options require values from the Maps class
    // these conditional statements handle those cases
    if (mapOptions.navigationBarMode) {
      options.navigationBarMode =
        Maps.NavigationBarMode[mapOptions.navigationBarMode];
    }
    if (mapOptions.navigationBarOrientation) {
      options.navigationBarOrientation =
        Maps.NavigationBarOrientation[mapOptions.navigationBarOrientation];
    }
    if (mapOptions.supportedMapTypes) {
      options.supportedMapTypes = mapOptions.supportedMapTypes.map(
        (types: any) => Maps.MapTypeId[types]
      );
    }
    map.setOptions(options);
  }

  // make map, set options, add pins
  const makeMap = useCallback(() => {
    const { Maps } = window.Microsoft;

    // only make a new map if one doesn't already exist
    if (!map.current) {
      map.current = new Maps.Map(mapContainer.current, {
        credentials: bingMapsKey,
      });
    }
    // set viewOptions, if any
    if (viewOptions) {
      setMapViewOptions(map.current, viewOptions, Maps);
    }

    // set mapOptions, if any
    if (mapOptions) {
      setMapOptions(map.current, mapOptions, Maps);
    }

    // add push pins, if any
    if (pushPins) {
      addPushpins(pushPins, map.current, Maps);
    }

    // add infoboxes, if any
    if (pushPinsWithInfoboxes) {
      const infobox = new Maps.Infobox(map?.current?.getCenter(), {
        visible: false,
      });
      infobox.setMap(map.current);
      addPushpinsWithInfoboxes(
        pushPinsWithInfoboxes,
        infobox,
        map.current,
        Maps
      );
    }
    onMapReady && onMapReady();
  }, [
    addPushpinsWithInfoboxes,
    bingMapsKey,
    mapOptions,
    onMapReady,
    pushPins,
    pushPinsWithInfoboxes,
    viewOptions,
  ]);

  useEffect(() => {
    if (window.Microsoft && window.Microsoft.Maps) {
      makeMap();
    } else {
      const scriptTag = document.createElement("script");
      scriptTag.setAttribute("type", "text/javascript");
      scriptTag.setAttribute(
        "src",
        `https://www.bing.com/api/maps/mapcontrol?callback=makeMap`
      );
      scriptTag.async = true;
      scriptTag.defer = true;
      document.body.appendChild(scriptTag);
      window.makeMap = makeMap;
    }
  }, [makeMap]);

  return (
    <div ref={mapContainer} style={{ height: height, width: width }}></div>
  );
};
GetMap.defaultProps = {
  bingMapsKey: null,
  mapOptions: null,
  height: "100%",
  onMapReady: null,
  pushPins: null,
  pushPinsWithInfoboxes: null,
  viewOptions: null,
  width: "100%",
};

export default GetMap;
