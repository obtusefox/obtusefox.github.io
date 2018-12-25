(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{174:function(t,e,n){"use strict";n.r(e);var r=n(0),a=Object(r.a)({},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),n("p",[t._v("최근 기존 언어와의 interoperability를 보장하는 여러 언어들이 등장하고 있으며, Kotlin도 그 중 하나이다. 다른 언어와 비교해서, 혹은 Kotlin이 interoperability를 보장하는 Java와 비교해서 어떤 다른 특징을 가질까? "),n("a",{attrs:{href:"https://kotlinlang.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Kotlin 공식 사이트"),n("OutboundLink")],1),t._v("를 확인해보자.")]),t._v(" "),t._m(2),t._v(" "),n("p",[t._v("정적 타입의 언어이고, Java와 Android(Android App도 Java로 개발되지만 사실 Android 개발은 Java 개발과는 다른 영역이라 생각된다.)와의 호환성을 보장한다. 간결한 문법을 제공하고, null 처리에서 더 안전함을 장점으로 내세운다.")]),t._v(" "),t._m(3),t._v(" "),n("p",[t._v("표현식은, 아무튼 간결하다. getter, setter, eqauls 등...을 클래스 선언과 동시에 간편하게 할 수 있다. 세미콜론이 없다든지, new가 없다든지, System.out을 안 써도 된다든지... 간결함이 반드시 더 나은 것이라 할 수는 없겠지만, 추상적인 아이디어를 주로 표현한다든지, fine tuning이 필요하지 않다면 좋은 언어로 보인다. 또 IDE 개발사에서 미는 언어인만큼 개발환경이 좋다.")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://try.kotlinlang.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("웹 환경"),n("OutboundLink")],1),t._v("에서 Kotlin을 사용해볼 수 있다.")]),t._v(" "),t._m(4),t._v(" "),n("p",[n("a",{attrs:{href:"http://www.oracle.com/technetwork/java/javase/downloads/index.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("JDK"),n("OutboundLink")],1),t._v("와 "),n("a",{attrs:{href:"https://www.jetbrains.com/idea/",target:"_blank",rel:"noopener noreferrer"}},[t._v("IntelliJ"),n("OutboundLink")],1),t._v("를 설치하자. 따로 옵션을 설정할 것은 없다. IntelliJ에서 64비트 바로가기를  IntelliJ Community Edition을 사용해도 무방하다.")]),t._v(" "),n("p",[t._v("그런데...")]),t._v(" "),t._m(5),t._v(" "),n("p",[t._v("...? Intellij를 제거하고 재설치하자.\n...? 그래도 마찬가지이다. 굴림과 돋움을 제거하고 다른 폰트를 덮어씌운 탓이라 보인다. 원래의 굴림으로 복원하니 무사히 실행된다.")]),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),n("p",[t._v("앞으로 Kotlin의 문법을 익히며 몇몇 알고리즘을 구현해보자.")])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"kotlin의-특징과-개발-환경-설정"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#kotlin의-특징과-개발-환경-설정","aria-hidden":"true"}},[this._v("#")]),this._v(" Kotlin의 특징과 개발 환경 설정")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"kotlin이란"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#kotlin이란","aria-hidden":"true"}},[this._v("#")]),this._v(" Kotlin이란")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("Statically typed programming language for modern multiplatform applications\n: 100% interoperable with Java™ and Android™")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("나무위키"),e("s",[this._v("지식의 보고")]),this._v("와 여러 블로그 글들을 읽어 보니 언어적 특성으로는 다음과 같은 것들이 눈에 띈다. Nullable과 NotNull로 변수 종류를 나누고, null 처리에 있어 오버헤드가 없다. 또 예외처리를 강제하지 않고(이에 대해서 이견이 있겠지만, 나는 강제하지 않는 것이 나은 것 같다.) == 연산자가 .eqauls()와 동일하게 작동한다. 즉 객체 동일성이 아니라 contents 동일성을 확인한다고 한다. 일반적으로 어떤지 모르겠지만, 나는 객체 동일성보다는 contents 동일성을 확인하는 경우가 훨씬 많기 때문에, 이쪽이 더 편하게 느껴진다. C로 프로그래밍을 시작하지 않아 Pointer 사용이 익숙하지 않기 때문인지 모르겠다. equals로 쓰는 것에는 익숙해졌지만, 이것 때문에 코드 가독성이 훨씬 떨어지는 일이 많다. 이외에도 연산자 오버로딩을 지원하며 모든 함수가 리턴값을 가지는 등의 특성을 가진다.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"개발-환경-설치"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#개발-환경-설치","aria-hidden":"true"}},[this._v("#")]),this._v(" 개발 환경 설치")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"/assets/article-img/intellij-privacy-error.PNG",alt:"screenshot"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"프로젝트-설정"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#프로젝트-설정","aria-hidden":"true"}},[this._v("#")]),this._v(" 프로젝트 설정")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ol",[n("li",[t._v("Intellij 실행 후 "),n("code",[t._v("Create New Project")]),t._v(" 선택")]),t._v(" "),n("li",[t._v("Project SDK에서 "),n("code",[t._v("New")]),t._v(", C:\\Program Files\\Java\\jdk-10.0.1 (버전은 상이할 수 있음)으로 설정")]),t._v(" "),n("li",[t._v("왼쪽 리스트에서 "),n("code",[t._v("Kotlin")]),t._v(" 선택")]),t._v(" "),n("li",[n("code",[t._v("Kotlin/JVM")]),t._v(" 선택 후 "),n("code",[t._v("Next")])]),t._v(" "),n("li",[t._v("적당한 Project name, location을 선택 후 finish.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"code-작성"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#code-작성","aria-hidden":"true"}},[this._v("#")]),this._v(" Code 작성")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ol",[n("li",[n("p",[t._v("왼쪽 상단 프로젝트명의 버튼 두 번 클릭 (프로젝트 폴더 확인))")])]),t._v(" "),n("li",[n("p",[t._v("프로젝트명/src 선택")])]),t._v(" "),n("li",[n("p",[t._v("File - New - Kotlin File/Class")])]),t._v(" "),n("li",[n("p",[t._v("'HelloWorld'로 Name 지정 후 확인.")])]),t._v(" "),n("li",[n("p",[t._v("다음과 같은 Code 작성:")]),t._v(" "),n("div",{staticClass:"language-kotlin extra-class"},[n("pre",{pre:!0,attrs:{class:"language-kotlin"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fun")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("args"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Array"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("String"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello, world!"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),n("li",[n("p",[t._v("프로젝트 경로에서 해당 파일 오른쪽 클릭 - `Run HelloWorldKt'")])]),t._v(" "),n("li",[n("p",[t._v("아랫쪽 콘솔 창의 출력 확인")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("Hello, world!\n")])])])}],!1,null,null,null);a.options.__file="2018-07-13-kotlin-setup.md";e.default=a.exports}}]);