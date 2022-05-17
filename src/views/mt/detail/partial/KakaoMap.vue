<template>
  <div class="q-ma-xl">
    <h4 class="text-bold q-mb-md">지도</h4>
    <div id="map" class="rounded-borders"></div>
  </div>
</template>

<script>
export default {
  name: "KakaoMap",
  data() {
    return {
      infowindow: null,
    };
  },
  props: {
    mapInfo: {
      type: Object,
      default: () => {
        return {
          latitude: 0,
          longitude: 0,
        };
      },
    },
  },
  mounted() {
    if (window.kakao && window.kakao.maps) {
      this.initMap();
    } else {
      const script = document.createElement("script");
      /* global kakao */
      script.onload = () => kakao.maps.load(this.initMap);
      script.src =
        "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=e89d70f7aebdb38b2302f6b3d4396071";
      document.head.appendChild(script);
    }
  },
  methods: {
    initMap() {
      const container = document.getElementById("map");
      const position = new kakao.maps.LatLng(
        this.mapInfo.latitude,
        this.mapInfo.longitude
      );
      const options = {
        center: position,
        level: 7,
      };

      //지도 객체를 등록합니다.
      //지도 객체는 반응형 관리 대상이 아니므로 initMap에서 선언합니다.
      this.map = new kakao.maps.Map(container, options);

      // 마커를 생성합니다
      var marker = new kakao.maps.Marker({
        position: position,
      });

      // 마커가 지도 위에 표시되도록 설정합니다
      marker.setMap(this.map);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#map {
  min-width: 400px;
  height: 400px;
}

.button-group {
  margin: 10px 0px;
}

button {
  margin: 0 3px;
}
</style>
