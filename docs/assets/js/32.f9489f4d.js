(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{251:function(a,e,s){"use strict";s.r(e);var t=s(0),r=Object(t.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("div",{staticClass:"content"},[s("p",[a._v("As of 2019-07-01 15:36:58, I'm using spacemacs when I'm required to use emacs, but for most of time, I stay with VS Code or CoqIDE for Coq.")]),a._v(" "),s("h2",{attrs:{id:"텍스트-에디터"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#텍스트-에디터","aria-hidden":"true"}},[a._v("#")]),a._v(" 텍스트 에디터")]),a._v(" "),s("p",[a._v("나는 텍스트 에디터를 따로 배우지 않았다. 터미널에서 어쩔 수 없이 vim을 쓸 일은 있었지만, "),s("code",[a._v("wq")]),a._v(", "),s("code",[a._v("q!")]),a._v("정도의 명령어만 사용하고 기능들을 제대로 써보진 않았다. 복사 한 번 하기도 버거운 것이 터미널 기반 텍스트 에디터였다. 맨 처음에는 아마 노트패드++를 썼을 것 같지만 기억 나지 않는다. 내 첫 코딩은 awk였으며, 그 다음은 python2.7이었다. 그러나 툴은 기억 나지 않고, 리눅스에서 뭔가를 띄운 기억도 없다. 그러다가 Atom을 쓰기 시작했고, 17년에 Brackets를 써봤다가 Visual Studio Code에 정착한 기억이 난다. 그후로 나의 메인 에디터는 쭉 Code였다. 그러나 Proof General을 쓰기 위해 Emacs 사용법을 익힐 필요성이 생겼다. 터미널 환경에서 코딩하기 위해서는 CLI 기반 텍스트 에디터를 쓰는 것이 필요하다지만, 아직은 모르겠다. 서버를 다룰 일이 없어서인지. 어쩔 수 없이 써야만 했기에 Emacs를 배우기 시작했다.")]),a._v(" "),s("h2",{attrs:{id:"emacs-설치-및-실행"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#emacs-설치-및-실행","aria-hidden":"true"}},[a._v("#")]),a._v(" Emacs 설치 및 실행")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("sudo apt install emacs\n")])])]),s("p",[a._v("끝. crostini 환경에서도 문제 없이 작동하였다. 터미널에서 "),s("code",[a._v("emacs")]),a._v("를 실행하거나 아이콘을 클릭하면 된다.")]),a._v(" "),s("h2",{attrs:{id:"emacs-기본-튜토리얼"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#emacs-기본-튜토리얼","aria-hidden":"true"}},[a._v("#")]),a._v(" Emacs 기본 튜토리얼")]),a._v(" "),s("p",[a._v("처음 실행하면 다음 메뉴가 표시된다. 다행히도 방향키와 엔터키(이하 RET로 표현된다.)로 선택할 수 있으니 "),s("code",[a._v("Emacs Tutorial")]),a._v("을 선택하자.")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("Emacs Tutorial\tLearn basic keystroke commands\nEmacs Guided Tour\tOverview of Emacs features at gnu.org\nView Emacs Manual\tView the Emacs manual using Info\nAbsence of Warranty\tGNU Emacs comes with ABSOLUTELY NO WARRANTY\nCopying Conditions\tConditions for redistributing and changing Emacs\nOrdering Manuals\tPurchasing printed copies of manuals\n")])])]),s("h2",{attrs:{id:"기본-단축키-조합법"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#기본-단축키-조합법","aria-hidden":"true"}},[a._v("#")]),a._v(" 기본 단축키 조합법")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("C-(어쩌구)\n")])])]),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("M-(어쩌구)\n")])])]),s("p",[a._v("두 조합이 많이 쓰이는데, "),s("code",[a._v("C-")]),a._v("는 Ctrl 키와의 조합을, "),s("code",[a._v("M-")]),a._v("는 (원래 Meta 키지만) 대부분은 Alt 키와의 조합을 뜻한다. 예를 들어 "),s("code",[a._v("M-x")]),a._v("는 "),s("code",[a._v("Alt + x")]),a._v("를 누르라는 뜻.")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("C-x C-c ( 현재 세션 종료 )\n")])])]),s("p",[a._v("는 현재 세션을 종료하는 키이다. "),s("code",[a._v("C-x")]),a._v("와 "),s("code",[a._v("C-c")]),a._v("를 차례대로 누르면 된다. 튜토리얼을 진행하다 해당 키를 눌러보면 Emacs 창이 꺼져버린다.")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("M-x ( 명령어 입력 )\nC-g ( 명령어 관두기 )\n")])])]),s("p",[s("code",[a._v("M-x")]),a._v("를 누르면 함수를 입력할 수 있는데, 이때 "),s("code",[a._v("C-g")]),a._v("를 누르면 명령어 입력을 관둘 수 있다. "),s("code",[a._v("M-x")]),a._v("는 많이 사용하니 외워두자. "),s("code",[a._v("execute")]),a._v("라서 "),s("code",[a._v("x")]),a._v("라고 하면 바로 외울 수 있다. 그런데 대부분의 단축키는 그다지 직관적이지 않다.")]),a._v(" "),s("h2",{attrs:{id:"화면-이동"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#화면-이동","aria-hidden":"true"}},[a._v("#")]),a._v(" 화면 이동")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("C-v ( 한 화면만큼 다음 페이지 이동 )\nM-v ( 한 화면만큼 이전 페이지 이동, 즉 위와 반대 )\nC-l ( 현재 커서를 기준으로 페이지 시점 변경)\n")])])]),s("p",[s("code",[a._v("C-v")]),a._v("와 "),s("code",[a._v("M-v")]),a._v("는 각각 "),s("code",[a._v("PgDn")]),a._v(" "),s("code",[a._v("PgUp")]),a._v("에 해당하니 헷갈릴 것 없고, 다만 "),s("code",[a._v("C-l")]),a._v("이 복잡한데,\n한 번 누르면 커서가 중앙으로 오도록 화면 전환, 다시 누르면 커서가 맨 위로 오도록 페이지를 전환, 다시 누르면 커서가 맨 아래로 가도록 페이지가 움직인다. 커서가 움직이는 게 아니라 페이지 시점이 바뀌는 것.")]),a._v(" "),s("h2",{attrs:{id:"커서-이동"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#커서-이동","aria-hidden":"true"}},[a._v("#")]),a._v(" 커서 이동")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("C-p ( 이전 라인 )\nC-n ( 다음 라인 )\nC-b ( 커서를 뒤로, string 기준이라면 index 0을 향해서 이동 )\nC-f ( 커서를 앞으로, 문장의 뒤를 향해 이동 )\n")])])]),s("p",[a._v("그냥 화살표로 이동해도 된다. 다만 Emacs는 이 커서 이동 단축키를 익힐 것을 권하는데,")]),a._v(" "),s("ol",[s("li",[a._v("화살표 키가 지원 안되는 환경이 있고")]),a._v(" "),s("li",[a._v("익숙해지면 화살키로 손을 움직이는 것보다 빠를 것이며")]),a._v(" "),s("li",[a._v("쓰다보면 다른 단축키를 익히기 좋다.\n는 세 가지 이유이다. 아직은 그리 납득이 되질 않지만.")])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("C-a ( 라인의 시작으로 )\nC-e ( 라인의 끝으로 )\n")])])]),s("p",[a._v("각각 "),s("code",[a._v("home")]),a._v(" "),s("code",[a._v("end")]),a._v("에 대응한다.")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("M-a ( 라인의 시작으로, 이미 시작인 경우 이전 문장으로 )\nM-e ( 라인의 끝으로, 이미 끝인 경우 다음 문장으로 )\n")])])]),s("p",[a._v("는 비슷하지만, 다른 문장으로까지 이동한다는 것이 다르다.")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("M-b ( 단어 단위 커서 뒤로 이동 )\nM-f ( 단어 단위 커서 앞으로 이동 )\n")])])]),s("p",[a._v("도 비슷하지만, 단어 단위로 이동한다.\n"),s("code",[a._v("M-")]),a._v("조합이 더 크게, meta하다는 느낌.")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("M-< ( 파일의 앞으로 )\nM-> ( 파일의 끝으로 )\n")])])]),s("h2",{attrs:{id:"숫자-인자를-주어-n회-반복하기"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#숫자-인자를-주어-n회-반복하기","aria-hidden":"true"}},[a._v("#")]),a._v(" 숫자 인자를 주어 n회 반복하기")]),a._v(" "),s("p",[a._v("emacs 명령어는 숫자를 인자로 받는데, 대체로 n회 반복을 위해 쓰인다.")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("C-u 8 C-f ( C-f 8번 반복)\n")])])]),s("p",[s("code",[a._v("C-u")]),a._v(" 조합이 여기에 쓰인다. 이 정도가 되면 웬만한 emacs의 사용법에 익숙해졌다고 할만한 것 같다. 나머지 키들은 실제 사용하면서 하나하나 익혀보는 것이 좋을 것 같다. 그럼 이외에도 바로 당장 필요한 키들만을 보고, 나머지는")]),a._v(" "),s("h2",{attrs:{id:"그외-사용할-키들"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#그외-사용할-키들","aria-hidden":"true"}},[a._v("#")]),a._v(" 그외 사용할 키들")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("C-x C-s ( 저장 )\nC-x k ( 현재 버퍼 종료 )\nC-s ( 앞으로 찾기 )\nC-r ( 뒤로 찾기 )\nC-/ ( 동작 취소, Ctrl-Z에 해당 )\nM-w ( 복사 )\nC-y ( 붙여넣기 )\n")])])]),s("p",[a._v("이 정도 키를 주로 사용하게 되었고, 나머지는 그때그때, GUI 메뉴에서 탐색하며 사용하기로 했다.")]),a._v(" "),s("h2",{attrs:{id:"emacs를-계속-사용할-유인이-있는가"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#emacs를-계속-사용할-유인이-있는가","aria-hidden":"true"}},[a._v("#")]),a._v(" emacs를 계속 사용할 유인이 있는가?")]),a._v(" "),s("p",[a._v("사실 잘 모르겠다. 일단 crostini에서는, 입력 문제 때문에 터미널 에디터들을 제외하고는 emacs가 거의 유일하게 사용할 수 있는 에디터이다. 그래서 크롬북에서는 선택의 여지 없이 emacs를 사용할 것 같고, coq를 사용할 때에도 가장 제대로 된 에디터가 proof-general이기 때문에 마찬가지로 선택의 여지가 없을 것 같다. 하지만, 그렇다고 이 에디터 자체가 편리하거나, 작업 능률을 늘리냐고 하면, 그것은 아닌 것 같다. "),s("code",[a._v("C-s")]),a._v("면 저장이 되는 것을, "),s("code",[a._v("C-x C-s")]),a._v("로 두 배나 피곤해야 한다. 그리고 이 때문에 왼쪽 손가락들에 부담이 너무 심하다. 무엇 하나를 하려고 해도 몇 번씩 반복해서 눌러야 하기 때문에 쉽게 피로가 느껴진다. Ctrl, Alt 키를 페달에 배정해서 쓰지 않는한, 새끼손가락은 영원히 고통 받을 것. 타격감이 좋긴 하다. 내 손가락도 타격을 받아서 문제지.")])])}],!1,null,null,null);e.default=r.exports}}]);