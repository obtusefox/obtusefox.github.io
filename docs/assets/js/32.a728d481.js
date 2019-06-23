(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{66:function(t,a,s){"use strict";s.r(a);var n=s(1),r=function(t){t.options.__data__block__={po:"popopo"}},e=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"named-arguments"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#named-arguments","aria-hidden":"true"}},[t._v("#")]),t._v(" Named Arguments")]),t._v(" "),s("article-info"),s("p",[t._v("사실 Java에서 이 개념을 별로 써보진 않은 것 같다. "),s("s",[t._v("오히려 Verilog에서 이 개념을 많이 썼다.")]),t._v(" Java에서 named parameters를 사용하는 법에 대해 쓴 다른 "),s("a",{attrs:{href:"https://javax0.wordpress.com/2014/08/27/named-parameters-in-java/",target:"_blank",rel:"noopener noreferrer"}},[t._v("블로그 글"),s("OutboundLink")],1),t._v("을 링크한다."),s("br"),t._v("\n여러 인자를 받는 함수가 있을 때, 내가 원하는 인자만을 입력할 수 있을까? 인자의 Type만 달라지는 경우라면, Java에서 나는 아마 다음과 같이 했을 것 같다.")]),t._v(" "),s("div",{staticClass:"language-Java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("someClass")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("someMethod")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" intParam"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" String strnParam"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        Do something\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("someMethod")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" intParam"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        Do something\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("someMethod")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("String strnParam1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" String strnParam2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        Do something\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("그런데 이것은 Named Arguments와는 다르다. 이것은 그저 다른 인자 타입에 대해 다른 행동을 지정한 것일 뿐이다. 잠시 오버로딩, 오버라이딩 등에 대해 알아보고 넘어가자.")]),t._v(" "),s("h2",{attrs:{id:"오버로딩-overloading"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#오버로딩-overloading","aria-hidden":"true"}},[t._v("#")]),t._v(" 오버로딩 Overloading")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://ko.wikipedia.org/wiki/%EC%97%B0%EC%82%B0%EC%9E%90_%EC%98%A4%EB%B2%84%EB%A1%9C%EB%94%A9",target:"_blank",rel:"noopener noreferrer"}},[t._v("오버로딩"),s("OutboundLink")],1),t._v("은 함수나 연산자의 이름은 그대로 유지하면서, 받는 인자의 종류에 따라 동작을 다르게 정의하는 것을 뜻한다. 위의 예시 코드처럼.")]),t._v(" "),s("h2",{attrs:{id:"오버라이딩-overriding"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#오버라이딩-overriding","aria-hidden":"true"}},[t._v("#")]),t._v(" 오버라이딩 Overriding")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://ko.wikipedia.org/wiki/%EB%A9%94%EC%86%8C%EB%93%9C_%EC%98%A4%EB%B2%84%EB%9D%BC%EC%9D%B4%EB%94%A9",target:"_blank",rel:"noopener noreferrer"}},[t._v("오버라이딩"),s("OutboundLink")],1),t._v("은 부모 클래스의 메소드를 자식 클래스가 특정한 형태로 구현하는 것을 의미한다.")]),t._v(" "),s("p",[t._v("Named Arguments는 이 둘과 달리 여러 인자를 한 번에 받는 메소드에 대해, 내가 원하는 특정 인자들의 값만을 입력하고 나머지 인자는 기본값으로 연산을 수행하는 것을 말한다.")]),t._v(" "),s("h2",{attrs:{id:"예제"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#예제","aria-hidden":"true"}},[t._v("#")]),t._v(" 예제")]),t._v(" "),s("p",[t._v("이 예제는 이미 정의된 joinToString method에 대해, 어떻게 named arguments를 구현할 것인지를 묻는다. "),s("code",[t._v("Collection")]),t._v(" Class에 대한 method "),s("code",[t._v("joinToString")]),t._v("은 다음과 같다:")]),t._v(" "),s("div",{staticClass:"language-Kotlin extra-class"},[s("pre",{pre:!0,attrs:{class:"language-kotlin"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fun")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("joinToString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    separator"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" String "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    prefix"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" String "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    postfix"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" String "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* ... */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" String\n")])])]),s("p",[t._v('우리는, 예컨대 "a, b, c"의 Collection에 대해,'),s("br"),t._v('\n앞뒤로 "[", "]"를 붙여 "[a, b, c]"의 String을 return하는 method joinOptions를 만들어야 한다. prefix와 postfix만을 설정하는 것이다.')]),t._v(" "),s("p",[t._v("답은 간단하다.")]),t._v(" "),s("div",{staticClass:"language-Kotlin extra-class"},[s("pre",{pre:!0,attrs:{class:"language-kotlin"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fun")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("joinOptions")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("options"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Collection"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("String"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" options"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("joinToString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("prefix "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"["')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" postfix "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"]"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("와 같은 식으로 named arguments를 사용할 수 있다.")])],1)},[],!1,null,null,null);"function"==typeof r&&r(e),e.options.__file="koan2.md";a.default=e.exports}}]);