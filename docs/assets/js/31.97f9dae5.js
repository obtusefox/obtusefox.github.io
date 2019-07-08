(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{250:function(t,s,e){"use strict";e.r(s);var a=e(0),r=Object(a.a)({},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[e("p",[t._v("As of 2019-07-01 15:34:43,\nthe input problem in Crostini is fixed,\nand GPU acceleration is enabled for some devices.\nSo, it is highly recommended to use Crostini.")]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),e("p",[t._v("(그러나 결국 다시 Crostini를 쓰기로 했다. 대신 텍스트 입력 문제가 적은 emacs를 사용하기로 결심.)")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),e("p",[t._v("클릭만 하면 되는 crostini에 비해 설치하기 복잡하다. 그리고 앱을 실행할 때마다 shell에서 명령어를 실행해야 한다. 크롬의 Crouton 확장이 잘 동작하지 않아 창이 실행되지 않을 때도 있다. 그래도 crostini처럼 이상하게 동작하진 않는다. 그러니 내가 쓰는 것.")]),t._v(" "),t._m(5),t._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/dnschneid/crouton",target:"_blank",rel:"noopener noreferrer"}},[t._v("crouton"),e("OutboundLink")],1),t._v("의 "),e("code",[t._v("Usage")]),t._v(" 안내를 따라 설치하되, 18.04를 설치하게 지정하자. 문제가 생길 수 있다고 하는데 아직 유의미한 문제를 마주하진 못했다. 링크에서 crouton을 받은 후에 크롬 창에서 ctrl + alt + T를 이용해 shell을 띄우고")]),t._v(" "),t._m(6),e("p",[t._v("명령어를 입력하면 된다. 오래 오래 걸려서 설치가 된다.\n다시 shell에서")]),t._v(" "),t._m(7),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),e("p",[t._v("로 git, lxde의 파일관리자, 외형 관리자, gtk 엔진들을 설치하자.\ngtk 테마로 구글이 crostini에 사용하는 "),e("a",{attrs:{href:"https://chromium.googlesource.com/chromiumos/third_party/cros-adapta/+/master",target:"_blank",rel:"noopener noreferrer"}},[t._v("cros-adapata"),e("OutboundLink")],1),t._v(", 아이콘 테마로 "),e("a",{attrs:{href:"https://github.com/daniruiz/flat-remix",target:"_blank",rel:"noopener noreferrer"}},[t._v("Flat Remix"),e("OutboundLink")],1),t._v("를 사용하자.")]),t._v(" "),t._m(11),e("p",[t._v("로 두 파일을 받자. 그리고 크롬에서 새 shell을 띄우고")]),t._v(" "),t._m(12),e("p",[t._v("을 이용해 탐색기를 띄워주자. 아까 받은 cros-adapata 테마를 .themes 폴더에 넣어주고, flat-remix 테마를 .themes 폴더에 넣어주자. 그리고 또 새 shell을 띄워서")]),t._v(" "),t._m(13),e("p",[t._v("로 외형 관리자를 실행하고 gtk 테마를 cros-adapta로, icon 테마를 flat-remix로 바꾸자. 이제 마찬가지 방식으로 다른 앱을 실행하면 예뻐져있는 것을 확인할 수 있다.")]),t._v(" "),e("p",[t._v("다만 앱으로 가는 바로가기를 만들 수 없다는 것이 안타깝다. 이것은 chrome extension으로 만들 수 있는 권한 밖의 것인지 확인해보고, 가능하다면 직접 만들어보는 것도 괜찮을 것 같다.")])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"크롬북에서-crouton-설정"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#크롬북에서-crouton-설정","aria-hidden":"true"}},[this._v("#")]),this._v(" 크롬북에서 Crouton 설정")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"crouton-셋팅하기"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#crouton-셋팅하기","aria-hidden":"true"}},[this._v("#")]),this._v(" Crouton 셋팅하기")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"crostini를-쓰지-않을-이유"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#crostini를-쓰지-않을-이유","aria-hidden":"true"}},[this._v("#")]),this._v(" Crostini를 쓰지 않을 이유")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("성능은 crostini와 crouton 모두 비슷하다고 한다. 물론 crouton을 쓰면 그래픽 가속이 되지만, 나는 xiwi를 사용하기 때문에 해당 사항이 없다. 그러나 crostini를 쓸 때에는 간단하지만 기이한 버그가 나를 괴롭혔다. 입력 문제. 리눅스 앱으로 창 전환을 하면 "),s("code",[this._v("tttttt...")]),this._v(", "),s("code",[this._v("222222...")]),this._v(" 등의 기이한 입력이 발생하는 것. 그리고 CoqIde 경우 파일 열기나 저장 다이얼로그를 아무리 꺼도 다시 창이 떠버리는 기이한 버그. 보고를 하긴 했는데 언제 고쳐질지 모르겠고, crostini가 그리 완벽하진 않음을 느꼈다. 가끔은 앱이 실행되지 않는듯 삐걱거리는 것이 늘 느껴진다. 결국 crostini가 제공하는 통합성을 포기하고 crouton을 사용하기로 했다.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"crouton의-단점"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#crouton의-단점","aria-hidden":"true"}},[this._v("#")]),this._v(" Crouton의 단점")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"crouton로-18-04-bionic-설치하기"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#crouton로-18-04-bionic-설치하기","aria-hidden":"true"}},[this._v("#")]),this._v(" Crouton로 18.04 Bionic 설치하기")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[this._v(">")]),this._v(" shell\n"),s("span",{pre:!0,attrs:{class:"token function"}},[this._v("sudo")]),this._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[this._v("cd")]),this._v(" ~/Downloads\ncrouton -r bionic -t xiwi -n bionic\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[this._v(">")]),this._v(" shell\n"),s("span",{pre:!0,attrs:{class:"token function"}},[this._v("sudo")]),this._v(" enter-chroot\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("로 container에 접속할 수 있다. 일단 "),s("code",[this._v("sudo apt update")]),this._v("로 패키지 정보를 업데이트하자.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"chromeos와-어울리는-테마-설치"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#chromeos와-어울리는-테마-설치","aria-hidden":"true"}},[this._v("#")]),this._v(" ChromeOS와 어울리는 테마 설치")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" pcmanfm lxappearance gtk2-engines-murrine gtk2-engines-pixbuf\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[this._v("git")]),this._v(" clone https://chromium.googlesource.com/chromiumos/third_party/cros-adapta\n"),s("span",{pre:!0,attrs:{class:"token function"}},[this._v("git")]),this._v(" clone https://github.com/daniruiz/flat-remix\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[this._v("sudo")]),this._v(" startxiwi pcmanfm\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[this._v("sudo")]),this._v(" startxiwi lxappearance\n")])])])}],!1,null,null,null);s.default=r.exports}}]);