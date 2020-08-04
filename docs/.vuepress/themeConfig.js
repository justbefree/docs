/*
* @Author: Just be free
* @Date:   2020-07-10 14:04:39
* @Last Modified by:   Just be free
* @Last Modified time: 2020-08-04 18:00:26
* @E-mail: justbefree@126.com
*/
module.exports = {
  nav: [
    { text: "Home", link: "/" },
    { text: "components", link: "/yui/" },
    { text: "BEM", link: "/bem/" },
    { text: "vue2-pro-cli", link: "/vue2-cli/" }
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
    "/bem/": [],
    "/vue2-cli/": [
      ["structure.md", "Directory structure"],
      {
        title: "Design principle",
        collapsable: true,
        children: [
          ["component.md", "Component"],
          ["router.md", "Router"],
          ["i18n.md", "I18n"],
          ["store.md", "Store"],
          ["export-application.md", "Application"],
          ["vue-class-component.md", "Vue class component"]
        ]
      }
    ]
  },
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