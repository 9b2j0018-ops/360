var APP_DATA = {
  "scenes": [
    {
      "id": "0-1",
      "name": "1戶外",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 360,
      "initialViewParameters": {
        "yaw": 2.5142945925764515,
        "pitch": 0.060295643860616366,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": 2.239378687886399,
          "pitch": 0.09059119328913567,
          "rotation": 0,
          "target": "1-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-2",
      "name": "2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 360,
      "initialViewParameters": {
        "yaw": -1.3814968267207899,
        "pitch": 0.12021828668949652,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": -1.5154987699012956,
          "pitch": 0.06765433440835622,
          "rotation": 0,
          "target": "0-1"
        },
        {
          "yaw": 1.0229169499841735,
          "pitch": 0.2025192632946009,
          "rotation": 0,
          "target": "2-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-3",
      "name": "3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 360,
      "initialViewParameters": {
        "yaw": -0.11143255993503054,
        "pitch": 0.015595564281008834,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": 0.6664268314232018,
          "pitch": 0.03889901582234856,
          "rotation": 0,
          "target": "3-4"
        },
        {
          "yaw": -0.832290315213239,
          "pitch": 0.03674126322209581,
          "rotation": 0,
          "target": "1-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-4",
      "name": "4",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 360,
      "initialViewParameters": {
        "yaw": 0.6511420670901948,
        "pitch": 0.024043543245884536,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": -2.559777395222209,
          "pitch": 0.07276043935938148,
          "rotation": 0,
          "target": "2-3"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
