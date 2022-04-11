/**
 * @author Michael Arenander
 * @date 2020-07-16
 * @license All-Rights-Reserved
 */

var user = new URLSearchParams(window.location.search).get('user');

const vis = {
  hide: function () {
    getID("modal").style.display = "none";
  },
  show: function () {
    const m = member[vis.translate(user)];
    //getID("modal").style.display = "inherit";
    getID("mod-role").innerHTML = m.role;
    getID("mod-name").innerHTML = m.name;
    getID("mod-alias").innerHTML = m.alias ? "Also known as " + m.alias : "";
    getID("mod-country").innerHTML = m.country;
    getID("mod-text").innerHTML = getID("mod-text").innerHTML = m.text;
    getID("mod-pp").src = "../../assets/profilepics/pp_" + m.id + ".jpg";
    getID("mod-links").innerHTML = linkbuild(m.links);
  },
  translate: function(id) {
    var res = 1;
    member.forEach(function (m, index) {
      if(m.id == id)
        res = index;
    });
    return res;
  },
};

function pack(link, id, src) {
  return link != undefined
    ? "<a href=" +
        link +
        '><img id="' +
        id +
        '" class="pp-link" src="../../assets/' +
        src +
        '"/></a>'
    : "";
}

function linkbuild(l) {
  if (l == undefined) return "";

  var res = "";
  [
    { d: l.web, id: "l-web", v: "svg/home.svg" },
    { d: l.as, id: "l-as", v: "logos/artstation-icon.svg" },
    { d: l.yt, id: "l-yt", v: "logos/youtube-icon.svg" },
    { d: l.ig, id: "l-ig", v: "logos/instagram-icon.png" },
    { d: l.tw, id: "l-tw", v: "logos/twitter-icon.svg" },
    { d: l.li, id: "l-li", v: "logos/linkedin-icon.png" },
    { d: l.tb, id: "l-tu", v: "logos/tumblr-icon.png" },
    { d: l.da, id: "l-da", v: "logos/deviantart-icon.svg" },
    { d: l.fb, id: "l-fb", v: "logos/facebook-icon.png" },
    { d: l.sp, id: "l-sp", v: "logos/Spotify_Icon_RGB_Green.png" },
  ].forEach(function (e) {
    res += pack(e.d, e.id, e.v);
  });
  return res;
}

window.onload = function () {
  console.log("building");
  vis.show(1);
};