(function () {
    'use strict';

    const js = () => {
      console.log('js.js');
    };

    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

    class App {
      static init() {
        // if (isSafari) {
        //     window.console.log(`isSafari`);
        // }
        // if (window.objectFitImages) {
        //   window.objectFitImages();
        // }
        js();
      }

    }

    App.init();
    window.App = App;

}());

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsiY2F0YWxvZy92aWV3L3RoZW1lL2NlZGFyL2pzL3NjcmlwdHMvanMuanMiLCJjYXRhbG9nL3ZpZXcvdGhlbWUvY2VkYXIvanMvbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBqcyA9ICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCdqcy5qcycpXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBqcztcclxuIiwiaW1wb3J0IGpzIGZyb20gXCIuL3NjcmlwdHMvanNcIjtcclxuXHJcblxyXG5jb25zdCBpc1NhZmFyaSA9IC9eKCg/IWNocm9tZXxhbmRyb2lkKS4pKnNhZmFyaS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XHJcblxyXG5jbGFzcyBBcHAge1xyXG4gICAgc3RhdGljIGluaXQoKSB7XHJcbiAgICAgICAgLy8gaWYgKGlzU2FmYXJpKSB7XHJcbiAgICAgICAgLy8gICAgIHdpbmRvdy5jb25zb2xlLmxvZyhgaXNTYWZhcmlgKTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gaWYgKHdpbmRvdy5vYmplY3RGaXRJbWFnZXMpIHtcclxuICAgICAgICAvLyAgIHdpbmRvdy5vYmplY3RGaXRJbWFnZXMoKTtcclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIGpzKCk7XHJcblxyXG5cclxuICAgIH1cclxufVxyXG5cclxuQXBwLmluaXQoKTtcclxud2luZG93LkFwcCA9IEFwcDtcclxuIl0sIm5hbWVzIjpbImpzIiwiY29uc29sZSIsImxvZyIsImlzU2FmYXJpIiwidGVzdCIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsIkFwcCIsImluaXQiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7OztJQUFBLE1BQU1BLEVBQUUsR0FBRyxNQUFNO0lBQ2JDLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQVo7SUFDSCxDQUZEOztJQ0dBLE1BQU1DLFFBQVEsR0FBRyxpQ0FBaUNDLElBQWpDLENBQXNDQyxTQUFTLENBQUNDLFNBQWhELENBQWpCOztJQUVBLE1BQU1DLEdBQU4sQ0FBVTtJQUNOLFNBQU9DLElBQVAsR0FBYztJQUNWO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUVBUixJQUFBQSxFQUFFO0lBR0w7O0lBWks7O0lBZVZPLEdBQUcsQ0FBQ0MsSUFBSjtJQUNBQyxNQUFNLENBQUNGLEdBQVAsR0FBYUEsR0FBYjs7OzsifQ==
