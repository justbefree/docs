/*
* @Author: Just be free
* @Date:   2020-07-10 14:04:39
* @Last Modified by:   Just be free
* @Last Modified time: 2020-07-15 18:56:37
* @E-mail: justbefree@126.com
*/
module.exports = {
  nav: [
    { text: "Home", link: "/" },
    { text: "components", link: "/yui/" },
    { text: "BEM", link: "/bem/" }
  ],
  sidebar: {
    "/yui/": [
      ["install.md", "Installation"],
      {
        title: "Basic components",
        collapsable: true,
        children: [
          ["toast.md", "toast"],
          ["indicator.md", "indicator"],
          ["spin.md", "spin"],
          ["iconfont.md", "iconfont"],
          ["checkbox.md", "checkbox"],
          ["radiobox.md", "radiobox"],
          ["calendar.md", "calendar"],
          ["popup.md", "popup"],
          ["button.md", "button"],
          ["flex.md", "flex"],
          ["action-sheet.md", "action-sheet"],
          ["field.md", "field"],
          ["layout.md", "layout"],
          ["city-picker.md", "city-picker"],
          ["sticky.md", "sticky"],
          ["dialog.md", "dialog"],
          ["picky-stepper.md", "picky-stepper"],
          ["dropdown-menu.md", "dropdown-menu"],
          ["picker.md", "picker"],
          ["swipe.md", "swipe"],
          ["tabs.md", "tabs"],
          ["slider.md", "slider"],
          ["submit-action.md", "submit-action"],
          ["pull-refresh.md", "pull-refresh"],
          ["date-picker.md", "date-picker"],
          ["counter.md", "counter"],
        ]
      }
    ],
    "/bem/": [
      ""
    ]
  },
  // sidebar: [
  //   ["yui/install.md", "Installation"],
  //   {
  //     title: "Basic components",
  //     collapsable: true,
  //     children: [
  //       ["/yui/toast.md", "toast"],
  //       ["/yui/indicator.md", "indicator"],
  //       ["/yui/spin.md", "spin"],
  //       ["/yui/iconfont.md", "iconfont"],
  //       ["/yui/checkbox.md", "checkbox"],
  //       ["/yui/radiobox.md", "radiobox"],
  //       ["/yui/calendar.md", "calendar"],
  //       ["/yui/popup.md", "popup"],
  //       ["/yui/button.md", "button"],
  //       ["/yui/flex.md", "flex"],
  //       ["/yui/action-sheet.md", "action-sheet"],
  //       ["/yui/field.md", "field"],
  //       ["/yui/layout.md", "layout"],
  //       ["/yui/city-picker.md", "city-picker"],
  //       ["/yui/sticky.md", "sticky"],
  //       ["/yui/dialog.md", "dialog"],
  //       ["/yui/picky-stepper.md", "picky-stepper"],
  //       ["/yui/dropdown-menu.md", "dropdown-menu"],
  //       ["/yui/picker.md", "picker"],
  //       ["/yui/swipe.md", "swipe"],
  //       ["/yui/tabs.md", "tabs"],
  //       ["/yui/slider.md", "slider"],
  //       ["/yui/submit-action.md", "submit-action"],
  //       ["/yui/pull-refresh.md", "pull-refresh"],
  //       ["/yui/date-picker.md", "date-picker"],
  //       ["/yui/counter.md", "counter"],
  //     ]
  //   }
  // ],
  lastUpdated: "Last Updated",
  // Assumes GitHub. Can also be a full GitLab url.
  repo: "justbefree/youdefine-docs",
  // Customising the header label
  // Defaults to "GitHub"/"GitLab"/"Bitbucket" depending on `themeConfig.repo`
  repoLabel: 'Contribute!',

  // Optional options for generating "Edit this page" link

  // if your docs are in a different repo from your main project:
  docsRepo: "justbefree/youdefine-docs",
  // if your docs are not at the root of the repo:
  docsDir: "docs",
  docsBranch: "master",
  // defaults to false, set to true to enable
  editLinks: true,
  // custom text for edit link. Defaults to "Edit this page"
  editLinkText: "Help us improve this page!"
};