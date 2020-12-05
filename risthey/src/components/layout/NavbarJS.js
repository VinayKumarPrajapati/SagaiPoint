// Side Menu
const sideNav = document.querySelector(".sidenav");
M.Sidenav.init(sideNav, {});

// Slider
const slider = document.querySelector(".slider");
M.Slider.init(slider, {
  indicators: false,
  height: 500,
  transition: 500,
  interval: 6000,
});
document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".dropdown-trigger");
  var options = {};
  var instances = M.Dropdown.init(elems, options);
});

// Scrollspy
const ss = document.querySelectorAll(".scrollspy");
M.ScrollSpy.init(ss, {});

// Material Boxed
const mb = document.querySelectorAll(".materialboxed");
M.Materialbox.init(mb, {});

// Auto Complete
const ac = document.querySelector(".autocomplete");
M.Autocomplete.init(ac, {
  data: {
    Ahmedabad: null,
    Surat: null,
    Jaipur: null,
    NRI: null,
  },
});
const ac1 = document.querySelector(".autocomplete1");
M.Autocomplete.init(ac1, {
  data: {
    Doctor: null,
    Engineer: null,
    Teacher: null,
  },
});
