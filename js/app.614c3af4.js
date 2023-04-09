(function () {
  "use strict";
  var e = {
      744: function (e, t, o) {
        var r = o(963),
          a = o(252),
          n = o(577);
        const i = (0, a._)("i", { "data-feather": "chevron-up" }, null, -1);
        function s(e, t, o, s, l, c) {
          const d = (0, a.up)("AppHeader"),
            m = (0, a.up)("router-view"),
            u = (0, a.up)("back-to-top"),
            p = (0, a.up)("AppFooter");
          return (
            (0, a.wg)(),
            (0, a.iD)(
              "div",
              { class: (0, n.C_)([e.appTheme, "pt-0.5"]) },
              [
                (0, a.Wm)(d),
                (0, a.Wm)(
                  r.uT,
                  { name: "fade", mode: "out-in" },
                  {
                    default: (0, a.w5)(() => [
                      (0, a.Wm)(m, { theme: e.appTheme }, null, 8, ["theme"]),
                    ]),
                    _: 1,
                  }
                ),
                (0, a.Wm)(
                  u,
                  {
                    visibleoffset: "500",
                    right: "30px",
                    bottom: "20px",
                    class: "shadow-lg",
                  },
                  { default: (0, a.w5)(() => [i]), _: 1 }
                ),
                (0, a.Wm)(p),
              ],
              2
            )
          );
        }
        var l = o(508),
          c = o.n(l);
        const d = (e) => (
            (0, a.dD)("data-v-266b1f7c"), (e = e()), (0, a.Cn)(), e
          ),
          m = { id: "nav", class: "sm:container sm:mx-auto" },
          u = {
            class:
              "z-10 max-w-screen-lg xl:max-w-screen-xl block sm:flex sm:justify-between sm:items-center my-6",
          },
          p = { class: "flex justify-between items-center px-4 sm:px-0" },
          g = d(() =>
            (0, a._)(
              "i",
              {
                class:
                  "fas fa-code text-secondary-dark dark:text-ternary-light",
              },
              null,
              -1
            )
          ),
          h = { class: "sm:hidden" },
          f = {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            class:
              "h-7 w-7 fill-current text-secondary-dark dark:text-ternary-light",
          },
          w = {
            key: 0,
            "fill-rule": "evenodd",
            d: "M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z",
            "clip-rule": "evenodd",
          },
          y = {
            key: 1,
            "fill-rule": "evenodd",
            d: "M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z",
          },
          b = {
            class:
              "hidden sm:flex justify-between items-center flex-col md:flex-row",
          },
          k = { class: "flex" };
        function v(e, t, o, r, i, s) {
          const l = (0, a.up)("router-link"),
            c = (0, a.up)("theme-switcher"),
            d = (0, a.up)("AppHeaderLinks");
          return (
            (0, a.wg)(),
            (0, a.iD)("nav", m, [
              (0, a._)("div", u, [
                (0, a._)("div", p, [
                  (0, a._)("div", null, [
                    (0, a.Wm)(
                      l,
                      { to: "/" },
                      { default: (0, a.w5)(() => [g]), _: 1 }
                    ),
                  ]),
                  (0, a.Wm)(
                    c,
                    {
                      theme: i.theme,
                      onThemeChanged: s.updateTheme,
                      class:
                        "block sm:hidden bg-ternary-light dark:bg-ternary-dark hover:bg-hover-light dark:hover:bg-hover-dark hover:shadow-sm px-2.5 py-2 rounded-lg",
                    },
                    null,
                    8,
                    ["theme", "onThemeChanged"]
                  ),
                  (0, a._)("div", h, [
                    (0, a._)(
                      "button",
                      {
                        onClick: t[0] || (t[0] = (e) => (i.isOpen = !i.isOpen)),
                        type: "button",
                        class: "focus:outline-none",
                        "aria-label": "Hamburger Menu",
                      },
                      [
                        ((0, a.wg)(),
                        (0, a.iD)("svg", f, [
                          i.isOpen
                            ? ((0, a.wg)(), (0, a.iD)("path", w))
                            : (0, a.kq)("", !0),
                          i.isOpen
                            ? (0, a.kq)("", !0)
                            : ((0, a.wg)(), (0, a.iD)("path", y)),
                        ])),
                      ]
                    ),
                  ]),
                ]),
                (0, a.Wm)(
                  d,
                  { showModal: e.showModal, isOpen: i.isOpen },
                  null,
                  8,
                  ["showModal", "isOpen"]
                ),
                (0, a._)("div", b, [
                  (0, a._)("div", k, [
                    (0, a._)(
                      "button",
                      {
                        class: (0, n.C_)([
                          "language-button mr-2 text-secondary-dark dark:text-ternary-light",
                          { active: "pl" === e.$root.language },
                        ]),
                        onClick:
                          t[1] || (t[1] = (t) => e.$root.changeLanguage("pl")),
                      },
                      " PL ",
                      2
                    ),
                    (0, a._)(
                      "button",
                      {
                        class: (0, n.C_)([
                          "language-button text-secondary-dark dark:text-ternary-light",
                          { active: "en" === e.$root.language },
                        ]),
                        onClick:
                          t[2] || (t[2] = (t) => e.$root.changeLanguage("en")),
                      },
                      " US ",
                      2
                    ),
                  ]),
                  (0, a.Wm)(
                    c,
                    {
                      theme: i.theme,
                      onThemeChanged: s.updateTheme,
                      class:
                        "ml-8 bg-primary-light dark:bg-ternary-dark px-3 py-2 shadow-sm rounded-xl cursor-pointer",
                    },
                    null,
                    8,
                    ["theme", "onThemeChanged"]
                  ),
                ]),
              ]),
            ])
          );
        }
        const x = {
            key: 0,
            "data-feather": "moon",
            class:
              "text-liText-ternary-dark hover:text-gray-400 dark:text-liText-ternary-light dark:hover:text-liBorder-primary-light w-5",
          },
          j = {
            key: 1,
            "data-feather": "sun",
            class: "text-gray-200 hover:text-gray-50 w-5",
          };
        function z(e, t, o, n, i, s) {
          return (
            (0, a.wg)(),
            (0, a.iD)(
              "a",
              {
                href: "#",
                onClick:
                  t[0] ||
                  (t[0] = (0, r.iM)(
                    (...e) => s.toggleTheme && s.toggleTheme(...e),
                    ["prevent"]
                  )),
                "aria-label": "Theme Switcher",
              },
              [
                "light" === o.theme
                  ? ((0, a.wg)(), (0, a.iD)("i", x))
                  : ((0, a.wg)(), (0, a.iD)("i", j)),
              ]
            )
          );
        }
        var _ = {
            props: { theme: { type: String, required: !0 } },
            methods: {
              toggleTheme() {
                const e = "light" === this.theme ? "dark" : "light";
                localStorage.setItem("theme", e),
                  this.$emit("theme-changed", e),
                  this.$router.go();
              },
            },
          },
          P = o(789);
        const C = (0, P.Z)(_, [["render", z]]);
        var S = C;
        function T(e, t, o, r, i, s) {
          const l = (0, a.up)("router-link");
          return (
            (0, a.wg)(),
            (0, a.iD)(
              "div",
              {
                class: (0, n.C_)([
                  o.isOpen ? "block" : "hidden",
                  "m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none",
                ]),
              },
              [
                (0, a.Wm)(
                  l,
                  {
                    to: "/projects",
                    class:
                      "font-general-medium block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-indigo-600 dark:hover:text-indigo-300 sm:mx-4 mb-2 sm:py-2",
                    "aria-label": "Projects",
                  },
                  {
                    default: (0, a.w5)(() => [
                      (0, a.Uk)((0, n.zw)(e.$root.t.projects), 1),
                    ]),
                    _: 1,
                  }
                ),
                (0, a.Wm)(
                  l,
                  {
                    to: "/about",
                    class:
                      "font-general-medium block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-indigo-600 dark:hover:text-indigo-300 sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark",
                    "aria-label": "About Me",
                  },
                  {
                    default: (0, a.w5)(() => [
                      (0, a.Uk)((0, n.zw)(e.$root.t.about), 1),
                    ]),
                    _: 1,
                  }
                ),
                (0, a.Wm)(
                  l,
                  {
                    to: "/contact",
                    class:
                      "font-general-medium block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-indigo-600 dark:hover:text-indigo-300 sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark",
                    "aria-label": "Contact",
                  },
                  {
                    default: (0, a.w5)(() => [
                      (0, a.Uk)((0, n.zw)(e.$root.t.contact), 1),
                    ]),
                    _: 1,
                  }
                ),
              ],
              2
            )
          );
        }
        var M = { props: ["showModal", "isOpen"] };
        const D = (0, P.Z)(M, [["render", T]]);
        var I = D,
          A = {
            components: { ThemeSwitcher: S, AppHeaderLinks: I },
            data() {
              return { theme: "", isOpen: !1 };
            },
            created() {
              this.theme = localStorage.getItem("theme") || "light";
            },
            mounted() {
              c().replace(),
                (this.theme = localStorage.getItem("theme") || "light");
            },
            methods: {
              updateTheme(e) {
                this.theme = e;
              },
            },
            updated() {
              c().replace();
            },
          };
        const O = (0, P.Z)(A, [
          ["render", v],
          ["__scopeId", "data-v-266b1f7c"],
        ]);
        var E = O;
        const W = { class: "container mx-auto" },
          B = {
            class:
              "pt-20 sm:pt-30 pb-8 mt-20 border-t-2 border-primary-light dark:border-secondary-dark",
          },
          H = {
            class: "flex flex-col justify-center items-center mb-12 sm:mb-20",
          },
          L = {
            class:
              "font-general-semibold text-3xl sm:text-4xl font-semibold text-primary-dark dark:text-primary-light mb-5",
          },
          U = { class: "flex gap-4 sm:gap-8" },
          Z = ["href"],
          F = ["data-feather"];
        function $(e, t, o, r, i, s) {
          return (
            (0, a.wg)(),
            (0, a.iD)("div", W, [
              (0, a._)("div", B, [
                (0, a._)("div", H, [
                  (0, a._)("p", L, (0, n.zw)(e.$root.t.followMe), 1),
                  (0, a._)("ul", U, [
                    ((0, a.wg)(!0),
                    (0, a.iD)(
                      a.HY,
                      null,
                      (0, a.Ko)(
                        i.socials,
                        (e) => (
                          (0, a.wg)(),
                          (0, a.iD)(
                            "a",
                            {
                              key: e.id,
                              href: e.url,
                              target: "__blank",
                              class:
                                "text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-4 duration-500",
                            },
                            [
                              (0, a._)(
                                "i",
                                {
                                  "data-feather": e.icon,
                                  class: "w-5 sm:w-8 h-5 sm:h-8",
                                },
                                null,
                                8,
                                F
                              ),
                            ],
                            8,
                            Z
                          )
                        )
                      ),
                      128
                    )),
                  ]),
                ]),
              ]),
            ])
          );
        }
        const G = [
          {
            id: 1,
            name: "GitHub",
            icon: "github",
            url: "https://github.com/Bonus1337",
          },
          {
            id: 2,
            name: "LinkedIn",
            icon: "linkedin",
            url: "https://www.linkedin.com/in/szymanski-maciej1337/",
          },
        ];
        var N = {
          data() {
            return { socials: G };
          },
          mounted() {
            c().replace();
          },
          updated() {
            c().replace();
          },
        };
        const q = (0, P.Z)(N, [["render", $]]);
        var V = q,
          K = {
            hello: "HI  IAM MACIEJ SZYMAŃSKI",
            title: "A Front-end Developer & Programmer mentor",
            download: "Download CV",
            projectsPortfolio: "Projects",
            projects: "Projects",
            about: "About Me",
            contact: "Contact",
            moreProjects: "More Projects",
            followMe: "Follow Me",
            myDescription:
              'Hi, I’m Maciej Szymański and I’m a frontend developer with passion and ambition. For over two years, I’ve been commercially creating modern and useful web applications for government projects in Angular and Vue.js. I work in a scrum agile system and I know the best programming practices. I graduated with an engineering degree in computer science and I want to continue my education by getting my master’s degree. I’m interested in chess, gym, new technologies, and learning new things. My goal is to make history as one of the best programmers and innovators. I am motivated to show people who previously did not take my words seriously that they were wrong after all. \nI’m proud of my achievements such as being the chairman of the computer science club for over 4 years during which I have helped new, young, and ambitious students develop their skills. \nApart from being the chairman of the student council during the whole year 2022, I completed the Frontend Bootcamp with React and a professional Vue.js 3 course at Kodilla and became a mentor at one of the largest Polish bootcamps "GoIT", where I help people take their first steps in HTML, CSS, Javascript and React.',
            experienceTitle: "Years of programming experience",
            commercialExperienceTitle:
              "Years of commercial programming experience",
            feedbackTitle: "satisfied customers",
            projectsTitle: "Completed projects",
            clientsHeading: "Some of the brands I have worked with",
            skills: "Skills",
            contactDetails: "Contact Details",
            contactForm: "Contact Form",
            fullName: "Full Name",
            email: "Email",
            message: "Message",
            send: "Send Message",
          },
          J = {
            hello: "CZEŚĆ, JESTEM MACIEJ SZYMAŃSKI",
            title: "Front-end Developer i mentor programisty",
            download: "Pobierz CV",
            projectsPortfolio: "Projekty",
            projects: "Projekty",
            about: "O mnie",
            contact: "Kontakt",
            moreProjects: "Więcej projektów",
            followMe: "Znajdź mnie na",
            myDescription:
              "Cześć, jestem Maciej Szymański i jestem frontend developerem z pasją i ambicją. Od ponad dwóch lat komercyjnie tworzę nowoczesne i użyteczne aplikacje internetowe dla projektów rządowych w Angularze i Vue.js. Pracuję w systemie scrum agile i znam się na najlepszych praktykach programistycznych. Ukończyłem studia inżynierskie z informatyki i planuję kontynuować edukację na studiach magisterskich. Interesuję się szachami, siłownią i nowymi technologiami oraz zdobywaniem nowej wiedzy. Moim celem jest zapisać się w historii ludzkości jako jeden z lepszych programistów i pomysłodawców. Motywuje mnie to, że nikt nie bierze moich słów na poważnie i pod koniec życia chcę pokazać im wszystkim że się mylili. Jestem dumny z moich osiągnięć, takich jak bycie od 4 lat przewodniczącym koła informatyki, gdzie pomagam w rozwoju nowym i młodym ambitnym studentom, bycie przewodniczącym samorządu studentów przez cały rok 2022 oraz ukończenie Bootcampu Frontendowego z Reacta oraz profesjonalnego kursu Vue.js 3 na kodilli. Byłem również mentorem w jednym z największych polskich bootcampów w polsce jakim jest GoIT, gdzie pomgadam ludziom stawiać swoje pierwsze kroki w HTML, CSS, Javascript i reacie.",
            experienceTitle: "Lata doświadczenia w programowaniu",
            commercialExperienceTitle: "Lata doświadczenia komercyjnego",
            feedbackTitle: "zadowolonych klientów",
            projectsTitle: "Ukonczone projekty",
            clientsHeading: "Współpracowałem z takimi firmami jak",
            skills: "Umiejętności",
            contactDetails: "Dane kontaktowe",
            contactForm: "Formularz kontaktowy",
            fullName: "Imię i nazwisko",
            email: "Email",
            message: "Wiadomość",
            send: "Wyślij wiadomość",
          },
          R = {
            components: { AppHeader: E, AppFooter: V },
            data: () => ({
              language: "en",
              translations: { en: K, pl: J },
              appTheme: localStorage.getItem("theme"),
            }),
            computed: {
              t() {
                return this.translations[this.language];
              },
            },
            methods: {
              changeLanguage(e) {
                this.language = e;
              },
            },
            mounted() {
              c().replace();
            },
            updated() {
              c().replace();
            },
          };
        const Y = (0, P.Z)(R, [["render", s]]);
        var Q = Y,
          X = o(201);
        const ee = { class: "container mx-auto" },
          te = { class: "mt-10 sm:mt-20 flex justify-center" };
        function oe(e, t, o, r, i, s) {
          const l = (0, a.up)("AppBanner"),
            c = (0, a.up)("ProjectsGrid"),
            d = (0, a.up)("router-link");
          return (
            (0, a.wg)(),
            (0, a.iD)("div", ee, [
              (0, a.Wm)(l, { class: "mb-5 sm:mb-8" }),
              (0, a.Wm)(c, { "max-projects": 3 }),
              (0, a._)("div", te, [
                (0, a.Wm)(
                  d,
                  {
                    to: "/projects",
                    class:
                      "font-general-medium flex items-center px-6 py-3 rounded-lg shadow-lg hover:shadow-xl bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 text-white text-lg sm:text-xl duration-300",
                    "aria-label": "More Projects",
                  },
                  {
                    default: (0, a.w5)(() => [
                      (0, a._)(
                        "button",
                        null,
                        (0, n.zw)(e.$root.t.moreProjects),
                        1
                      ),
                    ]),
                    _: 1,
                  }
                ),
              ]),
            ])
          );
        }
        var re = o.p + "img/developer.d30886eb.svg",
          ae = o.p + "img/developer-dark.cfadf07a.svg";
        const ne = {
            class:
              "flex flex-col sm:justify-between items-center sm:flex-row mt-12 sm:mt-10",
          },
          ie = { class: "w-full md:w-1/3 text-left" },
          se = {
            class:
              "font-general-semibold text-3xl md:text-3xl xl:text-4xl text-center sm:text-left text-ternary-dark dark:text-primary-light uppercase",
          },
          le = {
            class:
              "font-general-medium mt-2 text-lg sm:text-xl xl:text-2xl text-center sm:text-left leading-none text-gray-400",
          },
          ce = { class: "flex justify-center sm:block" },
          de = {
            key: 0,
            download: "Maciej_Szymański-Resume.pdf",
            href: "/PersonalPortfolio/MSPL.pdf",
            class:
              "flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500",
            "aria-label": "Download Resume",
          },
          me = (0, a._)(
            "i",
            {
              "data-feather": "arrow-down-circle",
              class: "ml-0 sm:ml-1 mr-2 sm:mr-3 w-5 sm:w-6 duration-100",
            },
            null,
            -1
          ),
          ue = { class: "text-sm sm:text-lg font-general-medium duration-100" },
          pe = {
            key: 1,
            download: "Maciej_Szymański-CV.pdf",
            href: "/PersonalPortfolio/MSENG.pdf",
            class:
              "flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500",
            "aria-label": "Download Resume",
          },
          ge = (0, a._)(
            "i",
            {
              "data-feather": "arrow-down-circle",
              class: "ml-0 sm:ml-1 mr-2 sm:mr-3 w-5 sm:w-6 duration-100",
            },
            null,
            -1
          ),
          he = { class: "text-sm sm:text-lg font-general-medium duration-100" },
          fe = { class: "w-full md:w-2/3 text-right float-right" },
          we = { key: 0, src: re, alt: "Developer" },
          ye = { key: 1, src: ae, alt: "Developer" };
        function be(e, t, o, r, i, s) {
          return (
            (0, a.wg)(),
            (0, a.iD)("section", ne, [
              (0, a._)("div", ie, [
                (0, a._)("h1", se, (0, n.zw)(e.$root.t.hello), 1),
                (0, a._)("p", le, (0, n.zw)(e.$root.t.title), 1),
                (0, a._)("div", ce, [
                  "Pobierz CV" == e.$root.t.download
                    ? ((0, a.wg)(),
                      (0, a.iD)("a", de, [
                        me,
                        (0, a._)("span", ue, (0, n.zw)(e.$root.t.download), 1),
                      ]))
                    : ((0, a.wg)(),
                      (0, a.iD)("a", pe, [
                        ge,
                        (0, a._)("span", he, (0, n.zw)(e.$root.t.download), 1),
                      ])),
                ]),
              ]),
              (0, a._)("div", fe, [
                "light" === e.theme
                  ? ((0, a.wg)(), (0, a.iD)("img", we))
                  : ((0, a.wg)(), (0, a.iD)("img", ye)),
              ]),
            ])
          );
        }
        var ke = {
          name: "Home",
          data: () => ({ theme: "" }),
          created() {
            this.theme = localStorage.getItem("theme") || "light";
          },
          mounted() {
            c().replace(),
              (this.theme = localStorage.getItem("theme") || "light");
          },
          updated() {
            c().replace();
          },
          methods: {},
        };
        const ve = (0, P.Z)(ke, [["render", be]]);
        var xe = ve,
          je = o(486),
          ze = {
            name: "Home",
            components: { AppBanner: xe, ProjectsGrid: je.Z },
          };
        const _e = (0, P.Z)(ze, [["render", oe]]);
        var Pe = _e;
        const Ce = [
            {
              path: "/",
              name: "Home",
              component: Pe,
              meta: { title: "Bonus - Home" },
            },
            {
              path: "/about",
              name: "About",
              component: () => o.e(416).then(o.bind(o, 614)),
              meta: { title: "Bonus - About" },
            },
            {
              path: "/projects",
              name: "Projects",
              component: () => o.e(703).then(o.bind(o, 703)),
              meta: { title: "Bonus - Projects" },
            },
            {
              path: "/contact",
              name: "Contact",
              component: () => o.e(503).then(o.bind(o, 503)),
              meta: { title: "Bonus - Contact" },
            },
          ],
          Se = (0, X.p7)({
            history: (0, X.PO)("/PersonalPortfolio/"),
            routes: Ce,
            scrollBehavior() {
              document.getElementById("app").scrollIntoView();
            },
          });
        var Te = Se;
        Se.beforeEach((e, t, o) => {
          const r = e.matched
              .slice()
              .reverse()
              .find((e) => e.meta && e.meta.title),
            a = e.matched
              .slice()
              .reverse()
              .find((e) => e.meta && e.meta.metaTags),
            n = t.matched
              .slice()
              .reverse()
              .find((e) => e.meta && e.meta.metaTags);
          if (
            (r
              ? (document.title = r.meta.title)
              : n && (document.title = n.meta.title),
            Array.from(
              document.querySelectorAll("[data-vue-router-controlled]")
            ).map((e) => e.parentNode.removeChild(e)),
            !a)
          )
            return o();
          a.meta.metaTags
            .map((e) => {
              const t = document.createElement("meta");
              return (
                Object.keys(e).forEach((o) => {
                  t.setAttribute(o, e[o]);
                }),
                t.setAttribute("data-vue-router-controlled", ""),
                t
              );
            })
            .forEach((e) => document.head.appendChild(e)),
            o();
        });
        var Me = o(617);
        const De = o(508);
        De.replace(), (0, r.ri)(Q).use(Te).use(Me.Z).mount("#app");
        const Ie = localStorage.getItem("theme");
        "dark" === Ie &&
        document.querySelector("body").classList.contains("app-theme")
          ? document.querySelector("body").classList.add("bg-primary-dark")
          : document.querySelector("body").classList.add("bg-secondary-light");
      },
      486: function (e, t, o) {
        o.d(t, {
          Z: function () {
            return P;
          },
        });
        var r = o(252),
          a = o(577);
        const n = { class: "pt-10 sm:pt-14" },
          i = { class: "text-center" },
          s = {
            class:
              "font-general-semibold text-2xl sm:text-5xl font-semibold mb-2 text-ternary-dark dark:text-ternary-light",
          },
          l = {
            class:
              "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10",
          };
        function c(e, t, o, c, d, m) {
          const u = (0, r.up)("ProjectSingle");
          return (
            (0, r.wg)(),
            (0, r.iD)("section", n, [
              (0, r._)("div", i, [
                (0, r._)("p", s, (0, a.zw)(e.$root.t.projectsPortfolio), 1),
              ]),
              (0, r._)("div", l, [
                ((0, r.wg)(!0),
                (0, r.iD)(
                  r.HY,
                  null,
                  (0, r.Ko)(
                    m.limitedProjects,
                    (e) => (
                      (0, r.wg)(),
                      (0, r.j4)(u, { key: e.id, project: e }, null, 8, [
                        "project",
                      ])
                    )
                  ),
                  128
                )),
              ]),
            ])
          );
        }
        var d = o(508),
          m = o.n(d);
        const u = ["href"],
          p = ["src", "alt"],
          g = { class: "text-center px-4 py-6" },
          h = {
            class:
              "font-general-semibold text-xl text-ternary-dark dark:text-ternary-light font-semibold mb-2",
          },
          f = {
            class:
              "font-general-medium text-lg text-ternary-dark dark:text-ternary-light",
          };
        function w(e, t, o, n, i, s) {
          return (
            (0, r.wg)(),
            (0, r.iD)(
              "a",
              {
                href: o.project.githubUrl,
                target: "_blank",
                class:
                  "rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark",
                "aria-label": "Single Project",
              },
              [
                (0, r._)("div", null, [
                  (0, r._)(
                    "img",
                    {
                      src: o.project.img,
                      alt: o.project.title,
                      class: "rounded-t-xl border-none",
                    },
                    null,
                    8,
                    p
                  ),
                ]),
                (0, r._)("div", g, [
                  (0, r._)("p", h, (0, a.zw)(o.project.title), 1),
                  (0, r._)("span", f, (0, a.zw)(o.project.category), 1),
                ]),
              ],
              8,
              u
            )
          );
        }
        var y = { props: ["project"] },
          b = o(789);
        const k = (0, b.Z)(y, [["render", w]]);
        var v = k;
        const x = [
          {
            id: 1,
            title: "Meteo IMGW Prognoza dla Polski",
            category: "Mobile application",
            img: o(141),
            githubUrl:
              "https://play.google.com/store/apps/details?id=pl.imgw.meteo&hl=pl&gl=US",
          },
          {
            id: 2,
            title: "Państwowa Uczelnia Zawodowa",
            category: "Web Application",
            img: o(197),
            githubUrl: "https://github.com/Bonus1337/puzim_web",
          },
          {
            id: 3,
            title: "Photo Gallery",
            category: "Web Application",
            img: o(779),
            githubUrl: "https://github.com/Bonus1337/fotosapp",
          },
          {
            id: 4,
            title: "Golden",
            category: "Web application",
            img: o(906),
            githubUrl: "https://github.com/Bonus1337/Golden",
          },
          {
            id: 5,
            title: "Mogo",
            category: "Web application",
            img: o(229),
            githubUrl: "https://github.com/Bonus1337/GoIT",
          },
          {
            id: 6,
            title: "ToDo App",
            category: "Web Application",
            img: o(931),
            githubUrl: "https://github.com/Bonus1337/to-do-app",
          },
        ];
        var j = x,
          z = {
            components: { ProjectSingle: v },
            data: () => ({ projects: j }),
            props: { maxProjects: { type: Number, default: 1 / 0 } },
            computed: {
              filteredProjects() {
                return this.selectedCategory
                  ? this.filterProjectsByCategory()
                  : this.searchProject
                  ? this.filterProjectsBySearch()
                  : this.projects;
              },
              limitedProjects() {
                return this.filteredProjects.slice(0, this.maxProjects);
              },
            },
            mounted() {
              m().replace();
            },
          };
        const _ = (0, b.Z)(z, [["render", c]]);
        var P = _;
      },
      906: function (e, t, o) {
        e.exports = o.p + "img/Golden.e969c3df.png";
      },
      141: function (e, t, o) {
        e.exports = o.p + "img/IMGW.aa53d0d3.jpg";
      },
      229: function (e, t, o) {
        e.exports = o.p + "img/Mogo.8e48313f.png";
      },
      197: function (e, t, o) {
        e.exports = o.p + "img/PUZ.5d76b776.png";
      },
      779: function (e, t, o) {
        e.exports = o.p + "img/Photo.2d2379c1.png";
      },
      931: function (e, t, o) {
        e.exports = o.p + "img/ToDo.ad71aa06.png";
      },
    },
    t = {};
  function o(r) {
    var a = t[r];
    if (void 0 !== a) return a.exports;
    var n = (t[r] = { exports: {} });
    return e[r].call(n.exports, n, n.exports, o), n.exports;
  }
  (o.m = e),
    (function () {
      var e = [];
      o.O = function (t, r, a, n) {
        if (!r) {
          var i = 1 / 0;
          for (d = 0; d < e.length; d++) {
            (r = e[d][0]), (a = e[d][1]), (n = e[d][2]);
            for (var s = !0, l = 0; l < r.length; l++)
              (!1 & n || i >= n) &&
              Object.keys(o.O).every(function (e) {
                return o.O[e](r[l]);
              })
                ? r.splice(l--, 1)
                : ((s = !1), n < i && (i = n));
            if (s) {
              e.splice(d--, 1);
              var c = a();
              void 0 !== c && (t = c);
            }
          }
          return t;
        }
        n = n || 0;
        for (var d = e.length; d > 0 && e[d - 1][2] > n; d--) e[d] = e[d - 1];
        e[d] = [r, a, n];
      };
    })(),
    (function () {
      o.n = function (e) {
        var t =
          e && e.__esModule
            ? function () {
                return e["default"];
              }
            : function () {
                return e;
              };
        return o.d(t, { a: t }), t;
      };
    })(),
    (function () {
      o.d = function (e, t) {
        for (var r in t)
          o.o(t, r) &&
            !o.o(e, r) &&
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
      };
    })(),
    (function () {
      (o.f = {}),
        (o.e = function (e) {
          return Promise.all(
            Object.keys(o.f).reduce(function (t, r) {
              return o.f[r](e, t), t;
            }, [])
          );
        });
    })(),
    (function () {
      o.u = function (e) {
        return (
          "js/" +
          e +
          "." +
          { 416: "19b08868", 503: "fbf7b30a", 703: "46719b4f" }[e] +
          ".js"
        );
      };
    })(),
    (function () {
      o.miniCssF = function (e) {
        return "css/" + e + ".371cfffb.css";
      };
    })(),
    (function () {
      o.g = (function () {
        if ("object" === typeof globalThis) return globalThis;
        try {
          return this || new Function("return this")();
        } catch (e) {
          if ("object" === typeof window) return window;
        }
      })();
    })(),
    (function () {
      o.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      };
    })(),
    (function () {
      var e = {},
        t = "vuejs-tailwindcss-portfolio:";
      o.l = function (r, a, n, i) {
        if (e[r]) e[r].push(a);
        else {
          var s, l;
          if (void 0 !== n)
            for (
              var c = document.getElementsByTagName("script"), d = 0;
              d < c.length;
              d++
            ) {
              var m = c[d];
              if (
                m.getAttribute("src") == r ||
                m.getAttribute("data-webpack") == t + n
              ) {
                s = m;
                break;
              }
            }
          s ||
            ((l = !0),
            (s = document.createElement("script")),
            (s.charset = "utf-8"),
            (s.timeout = 120),
            o.nc && s.setAttribute("nonce", o.nc),
            s.setAttribute("data-webpack", t + n),
            (s.src = r)),
            (e[r] = [a]);
          var u = function (t, o) {
              (s.onerror = s.onload = null), clearTimeout(p);
              var a = e[r];
              if (
                (delete e[r],
                s.parentNode && s.parentNode.removeChild(s),
                a &&
                  a.forEach(function (e) {
                    return e(o);
                  }),
                t)
              )
                return t(o);
            },
            p = setTimeout(
              u.bind(null, void 0, { type: "timeout", target: s }),
              12e4
            );
          (s.onerror = u.bind(null, s.onerror)),
            (s.onload = u.bind(null, s.onload)),
            l && document.head.appendChild(s);
        }
      };
    })(),
    (function () {
      o.r = function (e) {
        "undefined" !== typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      };
    })(),
    (function () {
      o.p = "/PersonalPortfolio/";
    })(),
    (function () {
      var e = function (e, t, o, r) {
          var a = document.createElement("link");
          (a.rel = "stylesheet"), (a.type = "text/css");
          var n = function (n) {
            if (((a.onerror = a.onload = null), "load" === n.type)) o();
            else {
              var i = n && ("load" === n.type ? "missing" : n.type),
                s = (n && n.target && n.target.href) || t,
                l = new Error(
                  "Loading CSS chunk " + e + " failed.\n(" + s + ")"
                );
              (l.code = "CSS_CHUNK_LOAD_FAILED"),
                (l.type = i),
                (l.request = s),
                a.parentNode.removeChild(a),
                r(l);
            }
          };
          return (
            (a.onerror = a.onload = n),
            (a.href = t),
            document.head.appendChild(a),
            a
          );
        },
        t = function (e, t) {
          for (
            var o = document.getElementsByTagName("link"), r = 0;
            r < o.length;
            r++
          ) {
            var a = o[r],
              n = a.getAttribute("data-href") || a.getAttribute("href");
            if ("stylesheet" === a.rel && (n === e || n === t)) return a;
          }
          var i = document.getElementsByTagName("style");
          for (r = 0; r < i.length; r++) {
            (a = i[r]), (n = a.getAttribute("data-href"));
            if (n === e || n === t) return a;
          }
        },
        r = function (r) {
          return new Promise(function (a, n) {
            var i = o.miniCssF(r),
              s = o.p + i;
            if (t(i, s)) return a();
            e(r, s, a, n);
          });
        },
        a = { 143: 0 };
      o.f.miniCss = function (e, t) {
        var o = { 416: 1 };
        a[e]
          ? t.push(a[e])
          : 0 !== a[e] &&
            o[e] &&
            t.push(
              (a[e] = r(e).then(
                function () {
                  a[e] = 0;
                },
                function (t) {
                  throw (delete a[e], t);
                }
              ))
            );
      };
    })(),
    (function () {
      var e = { 143: 0 };
      (o.f.j = function (t, r) {
        var a = o.o(e, t) ? e[t] : void 0;
        if (0 !== a)
          if (a) r.push(a[2]);
          else {
            var n = new Promise(function (o, r) {
              a = e[t] = [o, r];
            });
            r.push((a[2] = n));
            var i = o.p + o.u(t),
              s = new Error(),
              l = function (r) {
                if (o.o(e, t) && ((a = e[t]), 0 !== a && (e[t] = void 0), a)) {
                  var n = r && ("load" === r.type ? "missing" : r.type),
                    i = r && r.target && r.target.src;
                  (s.message =
                    "Loading chunk " + t + " failed.\n(" + n + ": " + i + ")"),
                    (s.name = "ChunkLoadError"),
                    (s.type = n),
                    (s.request = i),
                    a[1](s);
                }
              };
            o.l(i, l, "chunk-" + t, t);
          }
      }),
        (o.O.j = function (t) {
          return 0 === e[t];
        });
      var t = function (t, r) {
          var a,
            n,
            i = r[0],
            s = r[1],
            l = r[2],
            c = 0;
          if (
            i.some(function (t) {
              return 0 !== e[t];
            })
          ) {
            for (a in s) o.o(s, a) && (o.m[a] = s[a]);
            if (l) var d = l(o);
          }
          for (t && t(r); c < i.length; c++)
            (n = i[c]), o.o(e, n) && e[n] && e[n][0](), (e[n] = 0);
          return o.O(d);
        },
        r = (self["webpackChunkvuejs_tailwindcss_portfolio"] =
          self["webpackChunkvuejs_tailwindcss_portfolio"] || []);
      r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)));
    })();
  var r = o.O(void 0, [998], function () {
    return o(744);
  });
  r = o.O(r);
})();
//# sourceMappingURL=app.614c3af4.js.map
