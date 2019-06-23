(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{100:function(t,a,r){"use strict";r.r(a);var s=r(1),e=Object(s.a)({},function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h3",{attrs:{id:"기준-환경"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#기준-환경","aria-hidden":"true"}},[t._v("#")]),t._v(" 기준 환경")]),t._v(" "),r("p",[r("strong",[t._v("Rust 튜토리얼의 대표주자 "),r("a",{attrs:{href:"https://doc.rust-lang.org/book/ch01-02-hello-world.html",target:"_blank",rel:"noopener noreferrer"}},[t._v('"The Book"'),r("OutboundLink")],1),t._v("를 기준으로 작성")]),r("br"),t._v(" "),r("strong",[t._v("Crostini 환경을 기준으로 함. 일반적인 리눅스 배포판에서는 그대로 동작하리라 예상")])]),t._v(" "),r("h2",{attrs:{id:"rust를-배워보자"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#rust를-배워보자","aria-hidden":"true"}},[t._v("#")]),t._v(" Rust를 배워보자")]),t._v(" "),r("p",[t._v("사실 Rust를 첫 프로그래밍 언어로 배우는 사람은 거의 없을 것이다. 그렇기에 많은 개념들은 건너뛰며 빠르게 넘어가도 되리라는 생각에서, 속성 기초 튜토리얼을 작성해본다. 다만, 중간중간 프로그래밍 언어에서의 추상적인 개념들을 함께 다루고자 한다. (즉 순전히 나의 개인적인 학습 목적의 글인 것.)")]),t._v(" "),r("h2",{attrs:{id:"rustup-설치"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#rustup-설치","aria-hidden":"true"}},[t._v("#")]),t._v(" rustup 설치")]),t._v(" "),r("p",[t._v("먼저 Rust toolchain installer인 rustup을 설치한다. "),r("a",{attrs:{href:"https://www.rust-lang.org/tools/install",target:"_blank",rel:"noopener noreferrer"}},[t._v("Rust 홈페이지의 설치 안내"),r("OutboundLink")],1),t._v("를 따라서 진행하자. 터미널에서")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("curl https://sh.rustup.rs -sSf | sh\n")])])]),r("p",[t._v("명령어로 설치 가능하다."),r("br"),t._v("\n설치 후에,")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("To get started you need Cargo's bin directory ($HOME/.cargo/bin) in your PATH\nenvironment variable. Next time you log in this will be done automatically.\n")])])]),r("p",[t._v("라는 메시지가 노출되는데, 그대로 터미널에")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("source $HOME/.cargo/env\n")])])]),r("p",[t._v("를 입력하여 경로를 설정한다.")]),t._v(" "),r("p",[t._v("이제 터미널에 "),r("code",[t._v("rustup")]),t._v("을 실행해보면, rustup이 설치된 것을 알 수 있다.")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("$ rustup\nrustup 1.16.0 (beab5ac2b 2018-12-06)\nThe Rust toolchain installer\n")])])]),r("h2",{attrs:{id:"hello-world"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#hello-world","aria-hidden":"true"}},[t._v("#")]),t._v(" Hello World")]),t._v(" "),r("p",[t._v("먼저 프로젝트가 생성될 디렉토리를 하나 만들자.")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("mkdir helloWorld\ncd helloWorld\n")])])]),r("p",[t._v("그리고 해당 디렉토리 안에, 다음과 같이 main.rs를 생성해주자.")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v('fn main() {\n    println!("Hello, World!");\n}\n')])])]),r("p",[t._v("컴파일하자:")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("$ rustc main.rs\n")])])]),r("p",[r("code",[t._v("main")]),t._v("이라는 이름의 binary 파일이 생성된다. 다만, rustc는 기본적으로 rs파일의 이름으로 binary 파일을 생성한다. 고로 hello.rs로 작성한 경우, "),r("code",[t._v("rustc hello.rs")]),t._v("로 컴파일하면 "),r("code",[t._v("hello")]),t._v("라는 binary 파일이 생성될 것이다.")]),t._v(" "),r("p",[r("code",[t._v("./main")]),t._v(" 명령어로 main 파일을 실행하면:")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("Hello, World!\n")])])]),r("p",[t._v("로 출력된다.")])])},[],!1,null,null,null);e.options.__file="rust0.md";a.default=e.exports}}]);